'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Edit, 
  Share, 
  Download,
  MapPin,
  Calendar,
  Package,
  Truck
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ShipmentCard } from '@/components/shipment/ShipmentCard'
import { ShipmentTimeline } from '@/components/shipment/ShipmentTimeline'
import { TrackingMap } from '@/components/shipment/TrackingMap'

export default function ShipmentDetailPage({ params }: { params: { id: string } }) {
  const [shipment] = useState({
    id: params.id,
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

  const [events] = useState([
    {
      id: '1',
      shipment_id: params.id,
      event_type: 'pickup',
      location: 'Shanghai Port, China',
      timestamp: '2024-01-10T10:00:00Z',
      description: 'Shipment picked up from origin'
    },
    {
      id: '2',
      shipment_id: params.id,
      event_type: 'in_transit',
      location: 'Pacific Ocean',
      timestamp: '2024-01-11T10:00:00Z',
      description: 'Shipment in transit via ocean freight'
    },
    {
      id: '3',
      shipment_id: params.id,
      event_type: 'in_transit',
      location: 'Los Angeles Port, CA',
      timestamp: '2024-01-12T10:00:00Z',
      description: 'Shipment arrived at destination port'
    }
  ])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/shipments">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shipments
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shipment Details</h1>
            <p className="text-gray-600">Tracking number: {shipment.tracking_number}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Link href={`/dashboard/shipments/${params.id}/edit`}>
            <Button size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </Link>
        </div>
      </div>

      {/* Shipment Overview */}
      <ShipmentCard shipment={shipment} />

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
            <ShipmentTimeline events={events} />
          </div>
        </Card>
      </div>

      {/* Shipment Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Carrier</p>
                  <p className="text-sm text-gray-600">{shipment.carrier}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Route</p>
                  <p className="text-sm text-gray-600">{shipment.origin} → {shipment.destination}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Estimated Delivery</p>
                  <p className="text-sm text-gray-600">January 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Weight & Dimensions</p>
                  <p className="text-sm text-gray-600">{shipment.weight}kg • {shipment.dimensions.length}"×{shipment.dimensions.width}"×{shipment.dimensions.height}"</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Commercial Invoice</p>
                  <p className="text-sm text-gray-600">PDF • 245 KB</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Packing List</p>
                  <p className="text-sm text-gray-600">PDF • 156 KB</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Bill of Lading</p>
                  <p className="text-sm text-gray-600">PDF • 312 KB</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 