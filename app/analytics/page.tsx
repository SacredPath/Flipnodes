'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, BarChart3, Globe, Shield, Zap, Users, TrendingUp, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, PieChart, Activity, Target, Award } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('shipments')

  const metrics = [
    {
      name: 'Total Shipments',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: Package
    },
    {
      name: 'Revenue',
      value: '$1.2M',
      change: '+8.3%',
      changeType: 'positive',
      icon: DollarSign
    },
    {
      name: 'On-Time Delivery',
      value: '96.8%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Clock
    },
    {
      name: 'Customer Satisfaction',
      value: '4.9/5',
      change: '+0.2',
      changeType: 'positive',
      icon: Star
    }
  ]

  const insights = [
    {
      title: 'Peak Shipping Season',
      description: 'December shows 25% increase in air freight volume',
      metric: '+25%',
      trend: 'up',
      category: 'Seasonal'
    },
    {
      title: 'Route Optimization',
      description: 'Asia-Pacific routes show 15% cost reduction',
      metric: '-15%',
      trend: 'down',
      category: 'Cost'
    },
    {
      title: 'Customer Growth',
      description: 'New customer acquisition up 30% this quarter',
      metric: '+30%',
      trend: 'up',
      category: 'Growth'
    }
  ]

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Analytics & Insights"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BarChart3 className="w-4 h-4 mr-2" />
              Data-Driven Insights
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Analytics & Insights
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform your logistics data into actionable insights. Monitor performance, optimize routes, 
              and make data-driven decisions with our comprehensive analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Access Analytics
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Monitor your logistics performance with real-time data and insights
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipment Trends */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Shipment Trends</h3>
                <div className="flex space-x-2">
                  {['7d', '30d', '90d'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        selectedPeriod === period
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive chart showing shipment trends</p>
                  <p className="text-sm text-gray-500 mt-2">Real-time data visualization</p>
                </div>
              </div>
            </div>
            
            {/* Quick Insights */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Quick Insights</h3>
              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">{insight.category}</span>
                      <span className={`text-lg font-bold ${
                        insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {insight.metric}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful tools to analyze and optimize your logistics operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Tracking</h3>
              <p className="text-gray-600">Monitor KPIs and performance metrics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Analysis</h3>
              <p className="text-gray-600">Detailed cost breakdown and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600">Live updates and alerts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">AI-powered forecasting and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Reports</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Generate detailed reports tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Monthly Reports</h3>
              <p className="text-gray-600 mb-6">Comprehensive monthly performance summaries with trends and insights</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Revenue analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Cost breakdown</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Performance metrics</span>
                </li>
              </ul>
              <Button className="w-full">Generate Report</Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Executive Summary</h3>
              <p className="text-gray-600 mb-6">High-level insights for executive decision making</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Key performance indicators</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Strategic insights</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Recommendations</span>
                </li>
              </ul>
              <Button className="w-full">Generate Report</Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Analytics</h3>
              <p className="text-gray-600 mb-6">Build custom dashboards and reports</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Drag-and-drop builder</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Real-time data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Export capabilities</span>
                </li>
              </ul>
              <Button className="w-full">Create Dashboard</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our analytics platform and unlock insights from your logistics data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Access Analytics
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 