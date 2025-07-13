'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, FileText, Gavel, Shield, Users, Calendar } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
                <p className="text-gray-600">Last updated: December 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of the FlipRoutes platform, website, and services (collectively, the "Service") operated by FlipRoutes ("we," "our," or "us").
              </p>
              <p className="text-gray-700">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 mb-4">
                FlipRoutes provides logistics and supply chain management services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Freight booking and management</li>
                <li>Shipment tracking and monitoring</li>
                <li>Customs clearance services</li>
                <li>Warehousing and fulfillment</li>
                <li>Analytics and reporting</li>
                <li>API integration services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to terminate accounts that violate these Terms or are inactive for extended periods.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service to transmit harmful or malicious code</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment for our services is due according to the terms specified in your service agreement. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Pay all fees and charges in a timely manner</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Notify us of any changes to your payment information</li>
              </ul>
              <p className="text-gray-700">
                Late payments may result in service suspension or termination. All fees are non-refundable unless otherwise specified.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by FlipRoutes and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable and uninterrupted service, but we do not guarantee that the Service will be available at all times. We may:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Perform maintenance and updates</li>
                <li>Experience technical difficulties</li>
                <li>Suspend service for security reasons</li>
                <li>Modify or discontinue features</li>
              </ul>
              <p className="text-gray-700">
                We will provide reasonable notice for planned maintenance and updates.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, FlipRoutes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Any errors or omissions in any content</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties that the Service will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless FlipRoutes and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through the Service</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700">
                Any disputes arising from these Terms or your use of the Service shall be resolved in the courts of San Francisco County, California.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700">
                Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive termination.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Entire Agreement</h2>
              <p className="text-gray-700 mb-4">
                These Terms constitute the entire agreement between you and FlipRoutes regarding the use of the Service, superseding any prior agreements between you and FlipRoutes relating to your use of the Service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@fliproutes.com</p>
                  <p><strong>Phone:</strong> +1 (415) 555-0123</p>
                  <p><strong>Address:</strong> 123 Market Street, Suite 100, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/privacy">
              <Button size="lg" variant="outline">
                View Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 