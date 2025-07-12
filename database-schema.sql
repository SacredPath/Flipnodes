-- FlipRoutes Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company TEXT,
  phone TEXT,
  address TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Shipments table
CREATE TABLE IF NOT EXISTS shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_transit', 'at_port', 'delivered', 'failed')),
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  eta DATE,
  carrier TEXT,
  container TEXT,
  vessel TEXT,
  voyage TEXT,
  weight DECIMAL,
  volume DECIMAL,
  value DECIMAL,
  cargo_type TEXT,
  special_instructions TEXT,
  progress INTEGER DEFAULT 0,
  customer_id UUID REFERENCES users(id),
  shipper_name TEXT,
  consignee_name TEXT,
  port_of_loading TEXT,
  port_of_discharge TEXT,
  bill_of_lading TEXT,
  customs_status TEXT,
  insurance TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tracking events table
CREATE TABLE IF NOT EXISTS tracking_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  location TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Support tickets table
CREATE TABLE IF NOT EXISTS support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  shipment_id UUID REFERENCES shipments(id),
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_shipments_customer_id ON shipments(customer_id);
CREATE INDEX IF NOT EXISTS idx_shipments_status ON shipments(status);
CREATE INDEX IF NOT EXISTS idx_shipments_tracking_number ON shipments(tracking_number);
CREATE INDEX IF NOT EXISTS idx_tracking_events_shipment_id ON tracking_events(shipment_id);
CREATE INDEX IF NOT EXISTS idx_documents_shipment_id ON documents(shipment_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_user_id ON support_tickets(user_id);

-- Create RLS (Row Level Security) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracking_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Shipments policies
CREATE POLICY "Users can view own shipments" ON shipments
  FOR SELECT USING (auth.uid() = customer_id);

CREATE POLICY "Users can create own shipments" ON shipments
  FOR INSERT WITH CHECK (auth.uid() = customer_id);

CREATE POLICY "Users can update own shipments" ON shipments
  FOR UPDATE USING (auth.uid() = customer_id);

CREATE POLICY "Admins can view all shipments" ON shipments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );

-- Tracking events policies
CREATE POLICY "Users can view tracking events for own shipments" ON tracking_events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM shipments 
      WHERE shipments.id = tracking_events.shipment_id 
      AND shipments.customer_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all tracking events" ON tracking_events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );

-- Documents policies
CREATE POLICY "Users can view documents for own shipments" ON documents
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM shipments 
      WHERE shipments.id = documents.shipment_id 
      AND shipments.customer_id = auth.uid()
    )
  );

-- Support tickets policies
CREATE POLICY "Users can view own tickets" ON support_tickets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create tickets" ON support_tickets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all tickets" ON support_tickets
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );

-- Insert sample data
INSERT INTO users (id, email, full_name, company, role) VALUES
  ('00000000-0000-0000-0000-000000000001', 'admin@fliproutes.com', 'Admin User', 'FlipRoutes', 'admin'),
  ('00000000-0000-0000-0000-000000000002', 'john.doe@company.com', 'John Doe', 'Tech Corp', 'customer'),
  ('00000000-0000-0000-0000-000000000003', 'sarah.smith@logistics.com', 'Sarah Smith', 'Logistics Inc', 'customer'),
  ('00000000-0000-0000-0000-000000000004', 'mike.johnson@import.com', 'Mike Johnson', 'Import Co', 'customer');

INSERT INTO shipments (id, tracking_number, status, origin, destination, eta, carrier, container, progress, value, customer_id, cargo_type) VALUES
  ('11111111-1111-1111-1111-111111111111', 'FLIP123456789', 'in_transit', 'Shanghai, China', 'Los Angeles, CA', '2024-01-15', 'Maersk', 'MAEU-1234567', 65, 45000, '00000000-0000-0000-0000-000000000002', 'Electronics'),
  ('22222222-2222-2222-2222-222222222222', 'FLIP987654321', 'at_port', 'Rotterdam, Netherlands', 'New York, NY', '2024-01-20', 'MSC', 'MSCU-9876543', 25, 32500, '00000000-0000-0000-0000-000000000003', 'Machinery'),
  ('33333333-3333-3333-3333-333333333333', 'FLIP456789123', 'delivered', 'Hamburg, Germany', 'Miami, FL', '2024-01-10', 'Hapag-Lloyd', 'HLBU-4567890', 100, 28750, '00000000-0000-0000-0000-000000000004', 'Textiles');

INSERT INTO tracking_events (shipment_id, event_type, location, description, icon) VALUES
  ('11111111-1111-1111-1111-111111111111', 'pickup', 'Shanghai Port', 'Container loaded onto vessel Maersk Sealand', '📦'),
  ('11111111-1111-1111-1111-111111111111', 'in_transit', 'Pacific Ocean', 'Vessel departed Shanghai Port bound for Los Angeles', '🚢'),
  ('22222222-2222-2222-2222-222222222222', 'pickup', 'Rotterdam Port', 'Container loaded onto vessel MSC', '📦'),
  ('33333333-3333-3333-3333-333333333333', 'delivered', 'Miami Port', 'Shipment delivered successfully', '✅'); 