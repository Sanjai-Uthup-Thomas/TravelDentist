'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#fff0f5] text-gray-900">
      <Navbar />
      <div className="h-20 md:h-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Welcome to [Your Clinic Name]! These Terms of Service govern your use of our website and services. By accessing our website, booking appointments, or using our services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a manner that does not infringe upon the rights or restrict the use of others. Misuse of the website, such as unauthorized access, scraping, or disruption, is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">2. Appointments and Cancellations</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Appointment times are subject to availability.</li>
            <li>Please provide at least 24 hours notice for cancellations or rescheduling.</li>
            <li>No-shows may be subject to a cancellation fee.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F875AA]">3. Medical Disclaimer</h2>
          <p>
            Our website provides general dental information and is not a substitute for professional consultation. Please consult our qualified practitioners before making any medical or dental decisions.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of [Your Clinic Name] and is protected by copyright laws. You may not reproduce or use this content without permission.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">5. Limitation of Liability</h2>
          <p>
            [Your Clinic Name] is not liable for any direct, indirect, or incidental damages arising from the use or inability to use our services or website.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our services indicates your acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of [Your City/State].
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">8. Contact Us</h2>
          <p>
            If you have questions or concerns about these Terms, please contact us:
          </p>
          <ul className="list-none ml-4">
            <li>Email: youremail@example.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: [Your Clinic Address]</li>
          </ul>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
