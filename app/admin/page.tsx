'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  Users, 
  Package, 
  TrendingUp, 
  DollarSign,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react'

export default function AdminPage() {
  const stats = [
    { name: 'Total Users', value: '1,234', change: '+12%', changeType: 'positive', icon: Users },
    { name: 'Active Shipments', value: '567', change: '+8%', changeType: 'positive', icon: Package },
    { name: 'Revenue', value: '$2.4M', change: '+15%', changeType: 'positive', icon: DollarSign },
    { name: 'Success Rate', value: '98.5%', change: '+2.1%', changeType: 'positive', icon: TrendingUp }
  ]

  const recentShipments = [
    {
      id: 'FLP-2024-001',
      customer: 'Tech Corp',
      origin: 'Shanghai, China',
      destination: 'Los Angeles, CA',
      status: 'in_transit',
      eta: '2024-01-15',
      value: '$45,000'
    },
    {
      id: 'FLP-2024-002',
      customer: 'Logistics Inc',
      origin: 'Rotterdam, Netherlands',
      destination: 'New York, NY',
      status: 'at_port',
      eta: '2024-01-20',
      value: '$32,500'
    },
    {
      id: 'FLP-2024-003',
      customer: 'Import Co',
      origin: 'Hamburg, Germany',
      destination: 'Miami, FL',
      status: 'delivered',
      eta: '2024-01-10',
      value: '$28,750'
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
        return <XCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your logistics platform and monitor system performance.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
              </Button>
              <Button size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add User
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L12 10.586 17.586 5H13z" clipRule="evenodd" />
                  </svg>
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <stat.icon className="w-8 h-8 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Shipments */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Shipments</h2>
                <Link href="/admin/shipments">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
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
                        <p className="font-medium text-gray-900">{shipment.id}</p>
                        <p className="text-sm text-gray-600">{shipment.customer}</p>
                        <p className="text-xs text-gray-500">{shipment.origin} → {shipment.destination}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                          {getStatusIcon(shipment.status)}
                          <span className="ml-1 capitalize">{shipment.status.replace('_', ' ')}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">ETA: {shipment.eta}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{shipment.value}</p>
                      </div>
                      <Link href={`/admin/shipments/${shipment.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-3" />
                  Manage Users
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="w-4 h-4 mr-3" />
                  View Shipments
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-3" />
                  Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <DollarSign className="w-4 h-4 mr-3" />
                  Billing
                </Button>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">System Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <span className="text-sm font-medium text-gray-900">99.9%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 