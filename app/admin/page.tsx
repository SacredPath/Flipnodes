'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Package, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  MessageCircle,
  DollarSign,
  Globe,
  Clock
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function AdminDashboardPage() {
  const [stats] = useState({
    totalShipments: 1247,
    activeUsers: 892,
    revenue: 456230,
    pendingIssues: 23
  })

  const [recentActivity] = useState([
    {
      id: '1',
      type: 'shipment_created',
      message: 'New shipment created by John Doe',
      time: '2 minutes ago',
      user: 'john.doe@company.com'
    },
    {
      id: '2',
      type: 'user_registered',
      message: 'New user registered: Sarah Wilson',
      time: '15 minutes ago',
      user: 'sarah.wilson@company.com'
    },
    {
      id: '3',
      type: 'support_ticket',
      message: 'Support ticket opened: #1234',
      time: '1 hour ago',
      user: 'mike.smith@company.com'
    },
    {
      id: '4',
      type: 'shipment_delivered',
      message: 'Shipment FLIP123456789 delivered',
      time: '2 hours ago',
      user: 'system'
    }
  ])

  const quickActions = [
    {
      title: 'View All Shipments',
      description: 'Manage and track all shipments',
      icon: Package,
      href: '/admin/shipments',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      href: '/admin/users',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Support Tickets',
      description: 'Handle customer support requests',
      icon: MessageCircle,
      href: '/admin/support',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics and reports',
      icon: TrendingUp,
      href: '/admin/analytics',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of your FlipRoutes platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Shipments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalShipments.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Package className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
              <p className="text-sm text-green-600">+15% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Issues</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingIssues}</p>
              <p className="text-sm text-red-600">+3 from yesterday</p>
            </div>
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${action.color}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-900">API Services</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-900">Database</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-900">Email Service</span>
                </div>
                <span className="text-sm text-yellow-600">Degraded</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-900">Tracking API</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 