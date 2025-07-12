import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Shipment {
  id: string
  tracking_number: string
  status: 'pending' | 'in_transit' | 'delivered' | 'failed'
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
}

export interface TrackingEvent {
  id: string
  shipment_id: string
  event_type: 'pickup' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'failed'
  location: string
  timestamp: string
  description: string
}

export interface User {
  id: string
  email: string
  full_name: string
  company?: string
  role: 'customer' | 'admin'
  created_at: string
} 