'use client'

import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ShipmentTimeline } from '@/components/ShipmentTimeline'
import { TrackingMap } from '@/components/TrackingMap'

export default function ShipmentDetailPage({ params }: { params: { id: string } }) {
  const shipment = {
    id: params.id,
    trackingNumber: 'FLIP123456789',
    status: 'In Transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, CA',
    eta: '2024-01-15',
    carrier: 'Maersk',
    container: 'MAEU-1234567',
    progress: 65,
    value: '$45,000',
    weight: '2,500 kg',
    volume: '15.2 cbm',
    cargo: 'Electronics and Machinery',
    shipper: 'Shanghai Electronics Co.',
    consignee: 'Los Angeles Import Corp.',
    vessel: 'Maersk Sealand',
    voyage: 'AE123',
    portOfLoading: 'Shanghai Port',
    portOfDischarge: 'Los Angeles Port',
    billOfLading: 'MAEU123456789',
    customsStatus: 'Cleared',
    insurance: 'Covered',
    specialInstructions: 'Handle with care - Fragile items'
  }

  const timeline = [
    {
      id: 1,
      date: '2024-01-10',
      time: '14:30',
      location: 'Shanghai Port',
      status: 'Container Loaded',
      description: 'Container MAEU-1234567 has been loaded onto vessel Maersk Sealand',
      icon: '📦'
    },
    {
      id: 2,
      date: '2024-01-11',
      time: '08:15',
      location: 'Shanghai Port',
      status: 'Vessel Departed',
      description: 'Vessel Maersk Sealand departed Shanghai Port bound for Los Angeles',
      icon: '🚢'
    },
    {
      id: 3,
      date: '2024-01-13',
      time: '16:45',
      location: 'Pacific Ocean',
      status: 'In Transit',
      description: 'Vessel is currently crossing the Pacific Ocean',
      icon: '🌊'
    },
    {
      id: 4,
      date: '2024-01-15',
      time: '10:30',
      location: 'Los Angeles Port',
      status: 'Arrived at Port',
      description: 'Vessel arrived at Los Angeles Port, awaiting customs clearance',
      icon: '⚓'
    }
  ]

  const documents = [
    { name: 'Bill of Lading', type: 'PDF', size: '2.3 MB', date: '2024-01-10' },
    { name: 'Commercial Invoice', type: 'PDF', size: '1.1 MB', date: '2024-01-10' },
    { name: 'Packing List', type: 'PDF', size: '856 KB', date: '2024-01-10' },
    { name: 'Certificate of Origin', type: 'PDF', size: '1.5 MB', date: '2024-01-10' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" href="/dashboard/shipments">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Shipments
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{shipment.id}</h1>
                  <p className="text-gray-600 mt-1">Tracking: {shipment.trackingNumber}</p>
                </div>
              </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Shipment Status</h2>
                  <p className="text-gray-600">Current location and progress</p>
                </div>
                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                  shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                  shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                  shipment.status === 'At Port' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {shipment.status}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Origin</h3>
                  <p className="text-lg font-semibold text-gray-900">{shipment.origin}</p>
                  <p className="text-sm text-gray-600">{shipment.portOfLoading}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Destination</h3>
                  <p className="text-lg font-semibold text-gray-900">{shipment.destination}</p>
                  <p className="text-sm text-gray-600">{shipment.portOfDischarge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">ETA</h3>
                  <p className="text-lg font-semibold text-gray-900">{shipment.eta}</p>
                  <p className="text-sm text-gray-600">Estimated arrival</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Progress</h3>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${shipment.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{shipment.progress}%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracking Map */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Live Tracking</h2>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <TrackingMap shipment={shipment} />
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipment Timeline</h2>
              <ShipmentTimeline events={timeline} />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Shipment Details */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipment Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Carrier</h3>
                  <p className="text-sm text-gray-900">{shipment.carrier}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Vessel</h3>
                  <p className="text-sm text-gray-900">{shipment.vessel}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Container</h3>
                  <p className="text-sm text-gray-900">{shipment.container}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cargo</h3>
                  <p className="text-sm text-gray-900">{shipment.cargo}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                  <p className="text-sm text-gray-900">{shipment.weight}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Volume</h3>
                  <p className="text-sm text-gray-900">{shipment.volume}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Value</h3>
                  <p className="text-sm text-gray-900">{shipment.value}</p>
                </div>
              </div>
            </Card>

            {/* Parties */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Parties</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Shipper</h3>
                  <p className="text-sm text-gray-900">{shipment.shipper}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Consignee</h3>
                  <p className="text-sm text-gray-900">{shipment.consignee}</p>
                </div>
              </div>
            </Card>

            {/* Documents */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Documents</h2>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Actions */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions</h2>
              <div className="space-y-3">
                <Button className="w-full" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Track Live
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Documents
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 