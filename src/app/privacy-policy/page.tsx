'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            At [Your Clinic Name], we value your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personal identification information (Name, Email, Phone number, etc.)</li>
            <li>Health-related information voluntarily provided during appointment bookings or consultations</li>
            <li>Usage data such as IP address, browser type, and access time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F875AA]">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>To provide and manage dental care services</li>
            <li>To respond to inquiries and improve customer support</li>
            <li>To send appointment confirmations and updates</li>
            <li>For internal record keeping and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may share data with trusted partners who assist in operating our website or conducting our business — all of whom are required to maintain confidentiality.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Data Security</h2>
          <p>
            We take appropriate security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections, or ask for its deletion under applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Policy Updates</h2>
          <p>
            We may update this policy from time to time. All updates will be posted on this page with the revised date.
          </p>

          <h2 className="text-2xl font-semibold text-[#F875AA]">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at:
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
