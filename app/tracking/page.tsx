'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Search, Globe, Shield, Zap, Users, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Eye, Bell, Smartphone } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipment, setShipment] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const sampleShipments = [
    {
      id: 'FLIP123456789',
      status: 'in_transit',
      origin: 'Shanghai, China',
      destination: 'Los Angeles, USA',
      carrier: 'Maersk',
      eta: '2024-12-15',
      currentLocation: 'Pacific Ocean',
      progress: 65
    },
    {
      id: 'FLIP987654321',
      status: 'delivered',
      origin: 'Rotterdam, Netherlands',
      destination: 'New York, USA',
      carrier: 'MSC',
      eta: '2024-12-10',
      currentLocation: 'Delivered',
      progress: 100
    },
    {
      id: 'FLIP456789123',
      status: 'at_port',
      origin: 'Hamburg, Germany',
      destination: 'Miami, USA',
      carrier: 'Hapag-Lloyd',
      eta: '2024-12-20',
      currentLocation: 'Hamburg Port',
      progress: 25
    }
  ]

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const foundShipment = sampleShipments.find(s => s.id === trackingNumber)
      setShipment(foundShipment || null)
      setLoading(false)
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'in_transit':
        return 'bg-blue-100 text-blue-800'
      case 'at_port':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered'
      case 'in_transit':
        return 'In Transit'
      case 'at_port':
        return 'At Port'
      default:
        return status
    }
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Shipment Tracking"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Search className="w-4 h-4 mr-2" />
              Real-Time Shipment Tracking
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Track Your Shipments
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Get real-time updates on your shipments with GPS tracking, milestone notifications, and predictive ETAs. 
              Monitor your cargo from pickup to delivery with complete visibility.
            </p>
            
            {/* Tracking Form */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number (e.g., FLIP123456789)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button type="submit" disabled={loading} className="px-8 py-3">
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Tracking...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Track Shipment
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Tracking Numbers */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Try these sample tracking numbers:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {sampleShipments.map((shipment) => (
                <button
                  key={shipment.id}
                  onClick={() => setTrackingNumber(shipment.id)}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  {shipment.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipment Details */}
      {shipment && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Shipment Details</h2>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                    {getStatusLabel(shipment.status)}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Shipment Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tracking Number:</span>
                        <span className="font-medium">{shipment.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Origin:</span>
                        <span className="font-medium">{shipment.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destination:</span>
                        <span className="font-medium">{shipment.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carrier:</span>
                        <span className="font-medium">{shipment.carrier}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ETA:</span>
                        <span className="font-medium">{shipment.eta}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Current Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{shipment.currentLocation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Progress:</span>
                        <span className="font-medium">{shipment.progress}%</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${shipment.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tracking Timeline */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tracking Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Shipment Booked</div>
                        <div className="text-sm text-gray-500">2024-12-01 10:30 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Picked Up</div>
                        <div className="text-sm text-gray-500">2024-12-02 2:15 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">In Transit</div>
                        <div className="text-sm text-gray-500">2024-12-03 8:45 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Estimated Delivery</div>
                        <div className="text-sm text-gray-500">{shipment.eta}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Tracking Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get complete visibility into your shipments with our advanced tracking platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time GPS</h3>
              <p className="text-gray-600">Live location tracking with GPS precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Instant alerts for milestones and delays</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile App</h3>
              <p className="text-gray-600">Track shipments on the go</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">Detailed insights and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Track Your Shipments?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with real-time tracking and never lose sight of your cargo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Start Tracking
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 