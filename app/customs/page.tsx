'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, FileText, Globe, Shield, Zap, Users, BarChart3, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Scale, Gavel } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function CustomsPage() {
  const [selectedService, setSelectedService] = useState('clearance')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [cargoType, setCargoType] = useState('')
  const [value, setValue] = useState('')

  const services = [
    {
      id: 'clearance',
      name: 'Customs Clearance',
      description: 'Complete customs documentation and clearance',
      processingTime: '1-3 days',
      price: 'From $150/declaration',
      features: ['Documentation preparation', 'Duty calculation', 'Compliance checks', 'Real-time updates'],
      icon: FileText
    },
    {
      id: 'brokerage',
      name: 'Customs Brokerage',
      description: 'Licensed customs brokerage services',
      processingTime: 'Same day - 2 days',
      price: 'From $200/entry',
      features: ['Licensed brokers', '24/7 support', 'Risk management', 'Compliance expertise'],
      icon: Gavel
    },
    {
      id: 'consulting',
      name: 'Compliance Consulting',
      description: 'Expert advice on trade compliance',
      processingTime: 'Consultation based',
      price: 'From $500/hour',
      features: ['Trade compliance', 'Regulatory updates', 'Risk assessment', 'Training programs'],
      icon: Scale
    }
  ]

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Customs clearance quote request submitted! We\'ll contact you within 4 hours.')
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
            alt="Customs Clearance"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <FileText className="w-4 h-4 mr-2" />
              Expert Customs Solutions
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Customs Clearance Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert customs brokerage with automated documentation, duty calculation, and compliance management. 
              Navigate complex customs regulations with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quote">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Get Customs Quote
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
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Clearance success rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
              <div className="text-gray-600">Average clearance time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Compliance rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Customs Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the service that best fits your customs clearance needs
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Customs Services?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive customs solutions with unmatched expertise and compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Expertise</h3>
              <p className="text-gray-600">Licensed brokers in 50+ countries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance First</h3>
              <p className="text-gray-600">100% compliance rate with regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Live tracking of clearance status</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Licensed customs professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Customs Quote</h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and receive a competitive customs clearance quote within 4 hours
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleQuoteRequest} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Origin Country
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="e.g., China"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination Country
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g., United States"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo Type
                    </label>
                    <input
                      type="text"
                      value={cargoType}
                      onChange={(e) => setCargoType(e.target.value)}
                      placeholder="e.g., Electronics, Textiles, Machinery"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Declared Value (USD)
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="e.g., 50000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
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
                    Request Customs Quote
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
            Ready to Navigate Customs?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant quotes and ensure smooth customs clearance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Customs Quote
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