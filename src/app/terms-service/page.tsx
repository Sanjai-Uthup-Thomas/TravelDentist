'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-gray-900">
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
          Welcome to travel dentist! These Terms of Service govern your use of our website and services. By accessing our website, booking appointments, or using our services, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in a manner that does not infringe upon the rights or restrict the use of others. Misuse of the website, such as unauthorized access, scraping, or disruption, is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Appointments and Cancellations</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Appointment times are subject to availability.</li>
          <li>Please provide at least 24 hours notice for cancellations or rescheduling.</li>
          <li>No-shows may be subject to a cancellation fee.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Medical Disclaimer</h2>
        <p>
          Our website provides general dental information and is not a substitute for professional consultation. Please consult our qualified practitioners before making any medical or dental decisions.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and images, is the property of travel dentist and is protected by copyright laws. You may not reproduce or use this content without permission.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Limitation of Liability</h2>
        <p>
          Travel dentist is not liable for any direct, indirect, or incidental damages arising from the use or inability to use our services or website.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our services indicates your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of Kerala.
        </p>

        <h2 className="text-2xl font-semibold text-[#F875AA]">Contact Us</h2>
        <ul className="list-none ml-4 text-sm space-y-1">
          <li><span className="font-semibold">Email:</span> traveldentist.in@gmail.com</li>
          <li><span className="font-semibold">Phone:</span> +91-9035153096</li>
          <li><span className="font-semibold">Address 1:</span> SK Dental Clinic, Salem Church Building, Chingavanam, Kottayam</li>
          <li><span className="font-semibold">Address 2:</span> Perio Center, Muttambalam P.O., Kottayam</li>
        </ul>
      </div>
    </motion.div>

    <Footer />
          {/* WhatsApp Floating Button */}
          <a
        href="https://wa.me/919035153096" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="bg-[#25D366] hover:bg-green-500 rounded-full p-3 shadow-lg transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.81 11.81 0 0 0-8.42-3.48c-6.56 0-11.9 5.34-11.9 11.9a11.8 11.8 0 0 0 1.64 6.08L.01 24l5.26-1.39a11.8 11.8 0 0 0 6.83 2.1c6.56 0 11.9-5.34 11.9-11.9a11.84 11.84 0 0 0-3.48-8.43zm-8.42 20.18a10.27 10.27 0 0 1-5.54-1.61l-.4-.24-3.11.83.83-3.04-.26-.44a10.33 10.33 0 0 1-1.62-5.57c0-5.7 4.64-10.33 10.33-10.33a10.27 10.27 0 0 1 7.32 3.03 10.27 10.27 0 0 1 3.03 7.32c0 5.7-4.64 10.33-10.33 10.33zm5.97-7.75c-.26-.13-1.53-.75-1.77-.83-.24-.09-.42-.13-.6.13s-.69.83-.85 1-.31.2-.57.07a8.42 8.42 0 0 1-2.49-1.54 9.2 9.2 0 0 1-1.71-2.12c-.18-.31-.02-.48.14-.61.14-.13.31-.35.48-.52.17-.17.22-.3.35-.52.13-.22.07-.4 0-.52-.07-.13-.61-1.48-.84-2.03-.22-.52-.43-.45-.6-.45-.17 0-.35 0-.52 0s-.48.07-.73.35c-.26.26-1 1-1 2.43s1.02 2.82 1.17 3.02c.13.17 2.01 3.06 4.87 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.53-.63 1.74-1.25.21-.61.21-1.13.15-1.25-.07-.13-.24-.2-.5-.33z" />
          </svg>
        </div>
      </a>
  </div>
  );
}
