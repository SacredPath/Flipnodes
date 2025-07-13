'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Truck, Globe, Shield, Zap, Users, BarChart3, FileText, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Route } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function TruckingPage() {
  const [selectedService, setSelectedService] = useState('ftl')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [cargoType, setCargoType] = useState('')
  const [weight, setWeight] = useState('')

  const services = [
    {
      id: 'ftl',
      name: 'Full Truck Load (FTL)',
      description: 'Dedicated truck for your shipment',
      transitTime: '1-5 days',
      price: 'From $1.50/mile',
      features: ['Dedicated truck', 'Door-to-door service', 'Real-time tracking', 'Flexible scheduling'],
      icon: Truck
    },
    {
      id: 'ltl',
      name: 'Less than Truck Load (LTL)',
      description: 'Shared truck space for smaller shipments',
      transitTime: '2-7 days',
      price: 'From $0.15/lb',
      features: ['Shared truck', 'Cost-effective', 'Multiple pickups', 'Consolidation'],
      icon: Package
    },
    {
      id: 'expedited',
      name: 'Expedited Trucking',
      description: 'Fast delivery for time-critical shipments',
      transitTime: 'Same day - 2 days',
      price: 'From $3.00/mile',
      features: ['Priority handling', 'Guaranteed delivery', 'Team drivers', '24/7 support'],
      icon: Zap
    }
  ]

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Trucking quote request submitted! We\'ll contact you within 1 hour.')
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <Image
            src="/trucking.png"
            alt="Trucking"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Truck className="w-4 h-4 mr-2" />
              North American Trucking Solutions
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Trucking Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Reliable ground transportation with comprehensive coverage across North America. 
              From FTL to LTL, we provide flexible trucking solutions for all your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quote">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Get Trucking Quote
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
              <div className="text-3xl font-bold text-blue-600 mb-2">48</div>
              <div className="text-gray-600">States covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Trucks available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
              <div className="text-gray-600">On-time delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Dispatch support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trucking Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the service that best fits your cargo and timeline requirements
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
                    <span className="text-gray-700">Transit: {service.transitTime}</span>
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

      {/* Coverage Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Coverage Area</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive trucking coverage across North America
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">All 48 contiguous United States</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Major Canadian provinces</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Cross-border Mexico shipments</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Major metropolitan areas</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Specialized Services</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Temperature-controlled transport</li>
                  <li>• Hazardous materials handling</li>
                  <li>• Oversized load transport</li>
                  <li>• White glove delivery</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Route className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Route Optimization</h3>
              <p className="text-gray-600 mb-6">
                Our advanced routing system ensures the most efficient and cost-effective routes for your shipments.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-blue-600">Real-time GPS</div>
                  <div className="text-gray-600">Live tracking</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600">Traffic alerts</div>
                  <div className="text-gray-600">Route updates</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600">ETA updates</div>
                  <div className="text-gray-600">Accurate delivery</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600">Fuel efficiency</div>
                  <div className="text-gray-600">Cost savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Trucking Quote</h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and receive a competitive trucking quote within 1 hour
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleQuoteRequest} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="e.g., Los Angeles, CA"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Location
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g., New York, NY"
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
                      placeholder="e.g., Electronics, Furniture, Machinery"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight (lbs)
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g., 5000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Selected Service: {services.find(s => s.id === selectedService)?.name}</h4>
                  <p className="text-blue-700 text-sm">
                    Estimated transit time: {services.find(s => s.id === selectedService)?.transitTime}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Trucking Quote
                  </Button>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="flex-1">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Dispatch
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Trucking?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive trucking solutions with unmatched reliability and service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600">Service all 48 states with extensive network</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cargo Insurance</h3>
              <p className="text-gray-600">Full cargo insurance and secure handling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">GPS tracking with live updates and ETAs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Dispatch</h3>
              <p className="text-gray-600">Round-the-clock dispatch and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Ship by Truck?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant quotes and book your trucking shipment in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Trucking Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Contact Dispatch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 