'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Network, Target, TrendingUp, Database, Eye } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function SupplyChainPage() {
  const [selectedService, setSelectedService] = useState('optimization')

  const services = [
    {
      id: 'optimization',
      name: 'Supply Chain Optimization',
      description: 'Optimize your entire supply chain for maximum efficiency',
      features: ['Route optimization', 'Inventory management', 'Demand forecasting', 'Cost reduction'],
      icon: TrendingUp
    },
    {
      id: 'visibility',
      name: 'End-to-End Visibility',
      description: 'Complete transparency across your entire supply chain',
      features: ['Real-time tracking', 'Supplier management', 'Performance analytics', 'Risk monitoring'],
      icon: Eye
    },
    {
      id: 'automation',
      name: 'Process Automation',
      description: 'Automate repetitive tasks and streamline operations',
      features: ['Workflow automation', 'Document processing', 'Order management', 'Reporting'],
      icon: Zap
    }
  ]

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 30%',
      metric: '30%',
      icon: DollarSign
    },
    {
      title: 'Efficiency Gain',
      description: 'Improve operational efficiency and speed',
      metric: '50%',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate supply chain risks',
      metric: '90%',
      icon: Shield
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve delivery times and customer experience',
      metric: '25%',
      icon: Star
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
            alt="Supply Chain Management"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Network className="w-4 h-4 mr-2" />
              End-to-End Supply Chain
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Supply Chain Management
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Optimize your entire supply chain with our comprehensive platform. From procurement 
              to delivery, we provide the tools and insights you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">Cost reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600">Efficiency gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Risk mitigation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Faster delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Supply Chain Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions to optimize every aspect of your supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-2 ${
                  selectedService === service.id ? 'border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full ${
                    selectedService === service.id
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Supply Chain Solutions?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transform your supply chain with our proven approach and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful tools to manage and optimize your supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Centralized Platform</h3>
              <p className="text-gray-600 mb-6">Manage all your supply chain operations from a single, integrated platform</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Unified dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Real-time data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Multi-user access</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-6">Get deep insights into your supply chain performance and trends</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Performance metrics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Predictive analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Custom reports</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
              <p className="text-gray-600 mb-6">Identify and mitigate risks before they impact your operations</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Risk assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Early warning system</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Contingency planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our supply chain solutions and transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Link href="/demo">
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