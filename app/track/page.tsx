'use client'

import { useState } from 'react'
import { 
  Search, 
  Package, 
  MapPin, 
  Calendar,
  Truck,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ShipmentTimeline } from '@/components/shipment/ShipmentTimeline'
import { TrackingMap } from '@/components/shipment/TrackingMap'

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipment, setShipment] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      if (trackingNumber === 'FLIP123456789') {
        setShipment({
          id: '1',
          tracking_number: 'FLIP123456789',
          status: 'in_transit',
          origin: 'Shanghai, China',
          destination: 'Los Angeles, CA',
          created_at: '2024-01-10T10:00:00Z',
          updated_at: '2024-01-12T10:00:00Z',
          estimated_delivery: '2024-01-15T10:00:00Z',
          carrier: 'Ocean Freight',
          weight: 500,
          dimensions: {
            length: 20,
            width: 10,
            height: 8
          },
          customer_id: 'user123'
        })
      } else {
        setError('Shipment not found. Please check your tracking number.')
        setShipment(null)
      }
      setIsLoading(false)
    }, 1000)
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5" />
      case 'in_transit':
        return <Truck className="w-5 h-5" />
      case 'pending':
        return <Clock className="w-5 h-5" />
      case 'failed':
        return <AlertCircle className="w-5 h-5" />
      default:
        return <Package className="w-5 h-5" />
    }
  }

  const [events] = useState([
    {
      id: '1',
      shipment_id: '1',
      event_type: 'pickup' as const,
      location: 'Shanghai Port, China',
      timestamp: '2024-01-10T10:00:00Z',
      description: 'Shipment picked up from origin'
    },
    {
      id: '2',
      shipment_id: '1',
      event_type: 'in_transit' as const,
      location: 'Pacific Ocean',
      timestamp: '2024-01-11T10:00:00Z',
      description: 'Shipment in transit via ocean freight'
    },
    {
      id: '3',
      shipment_id: '1',
      event_type: 'in_transit' as const,
      location: 'Los Angeles Port, CA',
      timestamp: '2024-01-12T10:00:00Z',
      description: 'Shipment arrived at destination port'
    }
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Shipment</h1>
          <p className="text-lg text-gray-600">Enter your tracking number to get real-time updates</p>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <div className="p-8">
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking Number
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter your tracking number (e.g., FLIP123456789)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-3 text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Tracking...' : 'Track Shipment'}
              </Button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Shipment Details */}
        {shipment && (
          <div className="space-y-6">
            {/* Shipment Overview */}
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipment Details</h2>
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
                        <p className="text-sm text-gray-600">January 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Last Updated</p>
                        <p className="text-sm text-gray-600">January 12, 2024 at 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracking Information */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Map */}
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Tracking</h3>
                  <TrackingMap
                    origin={shipment.origin}
                    destination={shipment.destination}
                    currentLocation="Pacific Ocean"
                    className="h-80"
                  />
                </div>
              </Card>

              {/* Timeline */}
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Timeline</h3>
                  <ShipmentTimeline events={events} />
                </div>
              </Card>
            </div>

            {/* Additional Information */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Package Issues?</h4>
                    <p className="text-sm text-gray-600 mb-3">Report damage or missing items</p>
                    <Button variant="outline" size="sm">Report Issue</Button>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Delivery Changes?</h4>
                    <p className="text-sm text-gray-600 mb-3">Reschedule or redirect delivery</p>
                    <Button variant="outline" size="sm">Modify Delivery</Button>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Truck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Contact Support</h4>
                    <p className="text-sm text-gray-600 mb-3">Get help from our team</p>
                    <Button variant="outline" size="sm">Contact Us</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
} 