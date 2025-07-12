'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Package, 
  Truck, 
  Clock, 
  TrendingUp, 
  Plus,
  Eye,
  Calendar
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function DashboardPage() {
  const [recentShipments] = useState([
    {
      id: '1',
      trackingNumber: 'FLIP123456789',
      status: 'in_transit',
      origin: 'Shanghai, China',
      destination: 'Los Angeles, CA',
      eta: '2024-01-15',
      carrier: 'Ocean Freight'
    },
    {
      id: '2',
      trackingNumber: 'FLIP987654321',
      status: 'delivered',
      origin: 'Amsterdam, Netherlands',
      destination: 'New York, NY',
      eta: '2024-01-10',
      carrier: 'Air Freight'
    },
    {
      id: '3',
      trackingNumber: 'FLIP456789123',
      status: 'pending',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      eta: '2024-01-20',
      carrier: 'Trucking'
    }
  ])

  const stats = [
    {
      title: 'Active Shipments',
      value: '24',
      change: '+12%',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'In Transit',
      value: '18',
      change: '+8%',
      icon: Truck,
      color: 'text-green-600'
    },
    {
      title: 'Delivered Today',
      value: '6',
      change: '+25%',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$45,230',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your shipments.</p>
        </div>
        <Link href="/dashboard/shipments/new">
          <Button className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Shipment
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Shipments */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Shipments</h2>
          <Link href="/dashboard/shipments" className="text-blue-600 hover:text-blue-700">
            View All
          </Link>
        </div>
        
        <div className="space-y-4">
          {recentShipments.map((shipment) => (
            <div key={shipment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{shipment.trackingNumber}</p>
                  <p className="text-sm text-gray-600">{shipment.origin} → {shipment.destination}</p>
                  <p className="text-xs text-gray-500">{shipment.carrier}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {shipment.status === 'delivered' ? 'Delivered' : 
                     shipment.status === 'in_transit' ? 'In Transit' : 'Pending'}
                  </p>
                  <p className="text-xs text-gray-500">ETA: {shipment.eta}</p>
                </div>
                <Link href={`/dashboard/shipments/${shipment.id}`}>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/track">
              <Button variant="outline" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                Track Shipment
              </Button>
            </Link>
            <Link href="/dashboard/shipments/new">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Create Shipment
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deliveries</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">FLIP123456789</p>
                <p className="text-sm text-gray-600">Shanghai → Los Angeles</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-blue-600">Today</p>
                <p className="text-xs text-gray-500">Ocean Freight</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">FLIP987654321</p>
                <p className="text-sm text-gray-600">Amsterdam → New York</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">Tomorrow</p>
                <p className="text-xs text-gray-500">Air Freight</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 