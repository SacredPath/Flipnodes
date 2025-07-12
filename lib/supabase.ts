import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Shipment {
  id: string
  tracking_number: string
  status: 'pending' | 'in_transit' | 'at_port' | 'delivered' | 'failed'
  origin: string
  destination: string
  created_at: string
  updated_at: string
  estimated_delivery: string
  actual_delivery?: string
  customer_id: string
  carrier: string
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  eta?: string
  container?: string
  vessel?: string
  voyage?: string
  volume?: number
  value?: number
  cargo_type?: string
  special_instructions?: string
  progress?: number
  shipper_name?: string
  consignee_name?: string
  port_of_loading?: string
  port_of_discharge?: string
  bill_of_lading?: string
  customs_status?: string
  insurance?: string
}

export interface TrackingEvent {
  id: string
  shipment_id: string
  event_type: 'pickup' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'failed'
  location: string
  timestamp: string
  description: string
  icon?: string
}

export interface User {
  id: string
  email: string
  full_name?: string
  company?: string
  phone?: string
  address?: string
  role: 'customer' | 'admin'
  created_at: string
  updated_at: string
} 