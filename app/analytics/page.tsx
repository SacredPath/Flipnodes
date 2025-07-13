'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, BarChart3, Globe, Shield, Zap, Users, TrendingUp, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, PieChart, Activity, Target, Award } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('shipments')
  const [isLoading, setIsLoading] = useState(false)
  const [chartData, setChartData] = useState<any[]>([])

  // Sample data for different periods
  const periodData = {
    '7d': [
      { day: 'Mon', shipments: 45, revenue: 12500, onTime: 98 },
      { day: 'Tue', shipments: 52, revenue: 14200, onTime: 96 },
      { day: 'Wed', shipments: 48, revenue: 13100, onTime: 97 },
      { day: 'Thu', shipments: 61, revenue: 16800, onTime: 95 },
      { day: 'Fri', shipments: 55, revenue: 15200, onTime: 99 },
      { day: 'Sat', shipments: 38, revenue: 10400, onTime: 98 },
      { day: 'Sun', shipments: 42, revenue: 11800, onTime: 97 }
    ],
    '30d': [
      { day: 'Week 1', shipments: 320, revenue: 89000, onTime: 96 },
      { day: 'Week 2', shipments: 345, revenue: 95000, onTime: 97 },
      { day: 'Week 3', shipments: 310, revenue: 86000, onTime: 95 },
      { day: 'Week 4', shipments: 372, revenue: 102000, onTime: 98 }
    ],
    '90d': [
      { day: 'Month 1', shipments: 1250, revenue: 340000, onTime: 96 },
      { day: 'Month 2', shipments: 1380, revenue: 375000, onTime: 97 },
      { day: 'Month 3', shipments: 1420, revenue: 385000, onTime: 98 }
    ]
  }

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

  // Update chart data when period changes
  useEffect(() => {
    setChartData(periodData[selectedPeriod as keyof typeof periodData] || [])
  }, [selectedPeriod])

  const renderChart = () => {
    const maxValue = Math.max(...chartData.map(d => d[selectedMetric as keyof typeof d] as number))
    
    return (
      <div className="h-64 flex items-end justify-between space-x-2">
        {chartData.map((data, index) => {
          const value = data[selectedMetric as keyof typeof data] as number
          const height = (value / maxValue) * 100
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-300 hover:from-blue-700 hover:to-blue-500"
                style={{ height: `${height}%` }}
              />
              <div className="text-xs text-gray-600 mt-2">{data.day}</div>
              <div className="text-xs font-medium text-gray-900">{value}</div>
            </div>
          )
        })}
      </div>
    )
  }

  const handleGenerateReport = (reportType: string) => {
    setIsLoading(true)
    // Simulate report generation
    setTimeout(() => {
      alert(`${reportType} report generated successfully!`)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/analytics-view.svg"
            alt="Analytics View"
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
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
                <h3 className="text-xl font-semibold">Performance Trends</h3>
                <div className="flex space-x-2">
                  {['7d', '30d', '90d'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
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
              
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  {['shipments', 'revenue', 'onTime'].map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        selectedMetric === metric
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {metric === 'shipments' ? 'Shipments' : 
                       metric === 'revenue' ? 'Revenue' : 'On-Time %'}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Interactive Chart */}
              <div className="h-64 bg-gray-50 rounded-lg p-4">
                {chartData.length > 0 ? (
                  renderChart()
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-600">Loading chart data...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Quick Insights */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Quick Insights</h3>
              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 hover:border-blue-600 transition-colors">
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
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
              <Button 
                className="w-full" 
                onClick={() => handleGenerateReport('Monthly')}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Report'}
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
              <Button 
                className="w-full" 
                onClick={() => handleGenerateReport('Executive')}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Report'}
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
              <Button 
                className="w-full" 
                onClick={() => handleGenerateReport('Custom')}
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Dashboard'}
              </Button>
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