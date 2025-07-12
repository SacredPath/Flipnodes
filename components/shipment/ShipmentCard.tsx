'use client'

import { 
  Package, 
  MapPin, 
  Calendar, 
  Truck,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface Shipment {
  id: string
  tracking_number: string
  status: 'pending' | 'in_transit' | 'delivered' | 'failed'
  origin: string
  destination: string
  created_at: string
  updated_at: string
  estimated_delivery: string
  carrier: string
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  customer_id: string
  actual_delivery?: string
}

interface ShipmentCardProps {
  shipment: Shipment
}

export function ShipmentCard({ shipment }: ShipmentCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'in_transit':
        return <Truck className="w-5 h-5 text-blue-600" />
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      default:
        return <Package className="w-5 h-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100'
      case 'in_transit':
        return 'text-blue-600 bg-blue-100'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100'
      case 'failed':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Shipment Details</h2>
            <p className="text-gray-600">Tracking number: {shipment.tracking_number}</p>
          </div>
          <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${getStatusColor(shipment.status)}`}>
            {getStatusIcon(shipment.status)}
            <span className="font-medium capitalize">
              {shipment.status === 'in_transit' ? 'In Transit' : shipment.status}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Route</p>
                <p className="text-sm text-gray-600">{shipment.origin} → {shipment.destination}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Carrier</p>
                <p className="text-sm text-gray-600">{shipment.carrier}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Package className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Weight & Dimensions</p>
                <p className="text-sm text-gray-600">{shipment.weight}kg • {shipment.dimensions.length}"×{shipment.dimensions.width}"×{shipment.dimensions.height}"</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Estimated Delivery</p>
                <p className="text-sm text-gray-600">{formatDate(shipment.estimated_delivery)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Last Updated</p>
                <p className="text-sm text-gray-600">{formatDate(shipment.updated_at)}</p>
              </div>
            </div>
            {shipment.actual_delivery && (
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Delivered</p>
                  <p className="text-sm text-gray-600">{formatDate(shipment.actual_delivery)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
} 