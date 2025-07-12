'use client'

import { useState } from 'react'
import { 
  Eye, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

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

interface ShipmentsTableProps {
  shipments: Shipment[]
  onView: (shipment: Shipment) => void
  onEdit: (shipment: Shipment) => void
  onDelete: (shipmentId: string) => void
}

export function ShipmentsTable({ shipments, onView, onEdit, onDelete }: ShipmentsTableProps) {
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'in_transit':
        return <Truck className="w-4 h-4 text-blue-600" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return <Package className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'in_transit':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-900">Tracking #</th>
            <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-900">Route</th>
            <th className="text-left py-3 px-4 font-medium text-gray-900">Carrier</th>
            <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
            <th className="text-left py-3 px-4 font-medium text-gray-900">ETA</th>
            <th className="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  {getStatusIcon(shipment.status)}
                  <span className="ml-2 font-medium text-gray-900">{shipment.tracking_number}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                  {shipment.status === 'in_transit' ? 'In Transit' : shipment.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">{shipment.origin}</div>
                  <div className="text-sm text-gray-500">→ {shipment.destination}</div>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-900">{shipment.carrier}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-900">{formatDate(shipment.created_at)}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-900">{formatDate(shipment.estimated_delivery)}</span>
              </td>
              <td className="py-4 px-4 text-right">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedShipment(selectedShipment === shipment.id ? null : shipment.id)}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                  
                  {selectedShipment === shipment.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            onView(shipment)
                            setSelectedShipment(null)
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            onEdit(shipment)
                            setSelectedShipment(null)
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            onDelete(shipment.id)
                            setSelectedShipment(null)
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {shipments.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No shipments found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
} 