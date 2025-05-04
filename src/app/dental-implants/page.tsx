'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function DentalImplantsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-gray-900">
      <Navbar />
      <div className="h-20 md:h-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">Dental Implants</h1>

        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA]">What are dental implants?</h2>
            <p>
              Dental implants are titanium-like screws surgically placed into the jawbone to support artificial teeth. They are a great alternative to traditional bridges which require reducing adjacent healthy teeth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA]">The Procedure</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Clinical & Radiographic Assessment:</strong>
                <ul className="list-disc ml-6">
                  <li>Soft tissue evaluation</li>
                  <li>X-rays like OPG and CBCT scan</li>
                </ul>
              </li>
              <li>
                <strong>Surgical Phase:</strong>
                <ul className="list-disc ml-6">
                  <li>Implant placed in the jawbone</li>
                  <li>Performed either chairside or in OT</li>
                  <li>Bone grafting if needed</li>
                  <li>Healing by osseointegration</li>
                  <li>Chronic illnesses like diabetes & smoking can delay healing</li>
                </ul>
              </li>
              <li>
                <strong>Restorative Phase:</strong>
                <ul className="list-disc ml-6">
                  <li>Artificial tooth attached to implant</li>
                  <li>May start immediately if implant is stable</li>
                  <li>Usually a 3-month wait before fitting</li>
                </ul>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA]">Cortico Basal Implants</h2>
            <p>
              Cortico basal implantology engages the stable basal bone, offering greater predictability and is suited for cases with limited crestal bone. It differs in implant design and loading protocols, minimizing resorption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA]">Taking Care of Your Dental Implants</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Brush, floss, and use interdental brushes</li>
              <li>Use antibacterial mouth rinse after surgery</li>
              <li>Quit smoking to avoid implant failure</li>
              <li>Professional cleaning every 6 months</li>
              <li>Manage chronic conditions like diabetes</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
           className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg "
          >
            <p className="text-xl font-semibold mb-4 text-pink-900">
              Have questions about dental implants?
            </p>
            <p className="mb-6 text-gray-800">
              Reach out to us on WhatsApp or email for expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:youremail@example.com"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
}
