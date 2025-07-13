'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Briefcase, Heart, Lightbulb, Users as TeamIcon, GraduationCap, Zap as Lightning } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' },
    { id: 'marketing', name: 'Marketing' }
  ]

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build scalable backend systems and APIs for our logistics platform',
      requirements: ['Python, Go, or Node.js', 'AWS/Cloud infrastructure', 'Microservices architecture', 'Database design'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful, responsive user interfaces for our web and mobile applications',
      requirements: ['React/Next.js', 'TypeScript', 'CSS/Tailwind', 'Mobile development'],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Remote work']
    },
    {
      id: 3,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Generate new business opportunities and build relationships with potential customers',
      requirements: ['B2B sales experience', 'CRM proficiency', 'Strong communication', 'Logistics knowledge'],
      benefits: ['Base salary + commission', 'Health insurance', 'Professional development', 'Team events']
    },
    {
      id: 4,
      title: 'Logistics Operations Manager',
      department: 'operations',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Manage day-to-day logistics operations and optimize shipping processes',
      requirements: ['Supply chain management', 'Team leadership', 'Process optimization', 'International shipping'],
      benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Travel opportunities']
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop and execute marketing strategies to drive growth and brand awareness',
      requirements: ['Digital marketing', 'Content strategy', 'Analytics tools', 'B2B marketing'],
      benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Remote work']
    }
  ]

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities',
      icon: GraduationCap
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: Zap
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events',
      icon: TeamIcon
    }
  ]

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment)

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Careers at FlipRoutes"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Careers at FlipRoutes
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing global logistics. We're looking for passionate individuals 
              who want to make a difference in the world of international shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#jobs">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact HR
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're building a team of passionate individuals who share our vision for the future of logistics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find the perfect role for your skills and career goals
            </p>
          </div>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
          
          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button className="lg:ml-4 mt-4 lg:mt-0">
                    Apply Now
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions available</h3>
              <p className="text-gray-600">Check back later for new opportunities or contact us directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in fostering an environment where innovation thrives and people grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">We encourage creative thinking and experimentation. Every team member has a voice in shaping our products.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TeamIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">We work together across departments and functions to achieve common goals and deliver exceptional results.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">We respect personal time and provide flexibility to ensure our team members can thrive both professionally and personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Send Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Contact HR
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 