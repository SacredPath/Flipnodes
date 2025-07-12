'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  Package, 
  MapPin, 
  Calendar, 
  Truck, 
  Ship, 
  Plane,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

export default function ShipmentDetailPage({ params }: { params: { id: string } }) {
  const shipment = {
    id: params.id,
    tracking_number: 'FLIP123456789',
    status: 'in_transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, CA',
    eta: '2024-01-15',
    carrier: 'Maersk',
    container: 'MAEU-1234567',
    vessel: 'Maersk Sealand',
    voyage: 'AE123',
    weight: 500,
    volume: 25.5,
    value: 45000,
    cargo_type: 'Electronics',
    progress: 65,
    shipper: 'Tech Corp',
    consignee: 'Electronics Inc',
    port_of_loading: 'Shanghai Port',
    port_of_discharge: 'Los Angeles Port',
    bill_of_lading: 'BL-2024-001',
    customs_status: 'Cleared',
    insurance: 'Covered'
  }

  const trackingEvents = [
    {
      id: '1',
      event_type: 'pickup',
      location: 'Shanghai Port, China',
      timestamp: '2024-01-10T10:00:00Z',
      description: 'Container loaded onto vessel Maersk Sealand',
      icon: '📦'
    },
    {
      id: '2',
      event_type: 'in_transit',
      location: 'Pacific Ocean',
      timestamp: '2024-01-11T10:00:00Z',
      description: 'Vessel departed Shanghai Port bound for Los Angeles',
      icon: '🚢'
    },
    {
      id: '3',
      event_type: 'in_transit',
      location: 'Approaching Los Angeles',
      timestamp: '2024-01-14T10:00:00Z',
      description: 'Vessel approaching destination port',
      icon: '📍'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100'
      case 'in_transit':
        return 'text-blue-600 bg-blue-100'
      case 'at_port':
        return 'text-yellow-600 bg-yellow-100'
      case 'pending':
        return 'text-gray-600 bg-gray-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />
      case 'in_transit':
        return <Clock className="w-4 h-4" />
      case 'at_port':
        return <MapPin className="w-4 h-4" />
      case 'pending':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shipment Details</h1>
              <p className="text-gray-600 mt-1">Tracking shipment {shipment.tracking_number}</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </Button>
              <Button size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipment Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Shipment Overview</h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                  {getStatusIcon(shipment.status)}
                  <span className="ml-2 capitalize">{shipment.status.replace('_', ' ')}</span>
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tracking Number</label>
                    <p className="text-lg font-semibold text-gray-900">{shipment.tracking_number}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Route</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{shipment.origin}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-gray-900">{shipment.destination}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Carrier</label>
                    <div className="flex items-center space-x-2">
                      <Ship className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{shipment.carrier}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vessel</label>
                    <p className="text-gray-900">{shipment.vessel} - {shipment.voyage}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ETA</label>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{shipment.eta}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Container</label>
                    <p className="text-gray-900">{shipment.container}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Type</label>
                    <p className="text-gray-900">{shipment.cargo_type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                    <p className="text-gray-900">${shipment.value.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracking Timeline */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tracking Timeline</h3>
              <div className="space-y-6">
                {trackingEvents.map((event, index) => (
                  <div key={event.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">{event.icon}</span>
                      </div>
                      {index < trackingEvents.length - 1 && (
                        <div className="w-0.5 h-8 bg-gray-200 mx-auto mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium text-gray-900 capitalize">
                          {event.event_type.replace('_', ' ')}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {new Date(event.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-1">{event.location}</p>
                      {event.description && (
                        <p className="text-sm text-gray-500 mt-2">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Shipment Progress</span>
                    <span className="text-gray-900">{shipment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${shipment.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Estimated arrival: {shipment.eta}</p>
                </div>
              </div>
            </Card>

            {/* Details */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Weight</span>
                  <span className="text-sm text-gray-900">{shipment.weight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Volume</span>
                  <span className="text-sm text-gray-900">{shipment.volume} m³</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shipper</span>
                  <span className="text-sm text-gray-900">{shipment.shipper}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Consignee</span>
                  <span className="text-sm text-gray-900">{shipment.consignee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Port of Loading</span>
                  <span className="text-sm text-gray-900">{shipment.port_of_loading}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Port of Discharge</span>
                  <span className="text-sm text-gray-900">{shipment.port_of_discharge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Bill of Lading</span>
                  <span className="text-sm text-gray-900">{shipment.bill_of_lading}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Customs Status</span>
                  <span className="text-sm text-gray-900">{shipment.customs_status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Insurance</span>
                  <span className="text-sm text-gray-900">{shipment.insurance}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 