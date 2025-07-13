'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Warehouse, Globe, Shield, Zap, Users, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Database, Box, Forklift } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function WarehousingPage() {
  const [selectedService, setSelectedService] = useState('fulfillment')
  const [location, setLocation] = useState('')
  const [inventoryType, setInventoryType] = useState('')
  const [volume, setVolume] = useState('')

  const services = [
    {
      id: 'fulfillment',
      name: 'Order Fulfillment',
      description: 'Complete order processing and shipping',
      processingTime: 'Same day - 2 days',
      price: 'From $2.50/order',
      features: ['Pick and pack', 'Shipping labels', 'Inventory management', 'Returns processing'],
      icon: Package
    },
    {
      id: 'storage',
      name: 'Storage Solutions',
      description: 'Flexible storage for all inventory types',
      storageTime: 'Monthly contracts',
      price: 'From $0.50/sq ft',
      features: ['Climate controlled', 'Security monitoring', '24/7 access', 'Inventory tracking'],
      icon: Warehouse
    },
    {
      id: 'crossdock',
      name: 'Cross-Docking',
      description: 'Fast transfer without storage',
      processingTime: 'Same day',
      price: 'From $15/pallet',
      features: ['No storage fees', 'Fast turnaround', 'Real-time tracking', 'Quality control'],
      icon: Forklift
    }
  ]

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Warehousing quote request submitted! We\'ll contact you within 24 hours.')
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/fulfilment.png"
            alt="Warehousing"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Warehouse className="w-4 h-4 mr-2" />
              Strategic Warehousing Solutions
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Warehousing Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Strategic warehousing solutions with inventory management, order fulfillment, and distribution services. 
              From storage to cross-docking, we provide comprehensive warehouse solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quote">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Get Warehousing Quote
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
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Warehouse locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Square feet</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Order accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Warehousing Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the service that best fits your inventory and fulfillment needs
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
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Processing: {service.processingTime}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{service.price}</span>
                  </div>
                </div>
                
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
                  Select Service
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Warehousing?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive warehousing solutions with unmatched reliability and service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">25+ warehouse locations across major markets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
              <p className="text-gray-600">24/7 security monitoring and climate control</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Inventory tracking with live updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced warehouse professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Warehousing Quote</h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and receive a competitive warehousing quote within 24 hours
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleQuoteRequest} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Los Angeles, CA"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inventory Type
                    </label>
                    <input
                      type="text"
                      value={inventoryType}
                      onChange={(e) => setInventoryType(e.target.value)}
                      placeholder="e.g., Electronics, Apparel, Food"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Volume (sq ft)
                    </label>
                    <input
                      type="number"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="e.g., 1000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Selected Service: {services.find(s => s.id === selectedService)?.name}</h4>
                  <p className="text-blue-700 text-sm">
                    Processing time: {services.find(s => s.id === selectedService)?.processingTime}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Warehousing Quote
                  </Button>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="flex-1">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Sales
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Storage?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant quotes and optimize your warehousing operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Warehousing Quote
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