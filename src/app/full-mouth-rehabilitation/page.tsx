'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function FullMouthRehabilitationPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-gray-900">
      <Navbar />
      <div className="h-20 md:h-32" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">
          Full Mouth Rehabilitation (FMR)
        </h1>

        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
<p className="text-lg text-gray-700">
  Full Mouth Rehabilitation involves a series of customized dental treatments to restore both the aesthetics and functionality of your teeth. It&apos;s tailored to each individual&apos;s dental concerns — whether mild or severe — and focuses on rejuvenating your smile through comprehensive care.
</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA] mb-4">Who Needs Full Mouth Rehabilitation?</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Loose or mobile teeth often due to gum disease and poor oral hygiene, which can lead to tooth loss.
              </li>
              <li>
                Excessive tooth wear or enamel erosion caused by prolonged abrasion or acidic exposure.
              </li>
              <li>
                Night-time teeth grinding (bruxism) leading to jaw, facial, and muscular discomfort.
              </li>
              <li>
                Improper or untreated dental conditions.
              </li>
              <li>
                Congenital enamel abnormalities affecting natural tooth structure.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#F875AA] mb-4">Benefits of Full Mouth Rehabilitation</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Repairs damaged teeth caused by erosion or abrasion, reducing pain and sensitivity.
              </li>
              <li>
                Enhances chewing and cutting abilities, improving appetite and digestion.
              </li>
              <li>
                Boosts esthetic appearance for a more confident smile.
              </li>
              <li>
                Improves bite alignment and strengthens jaw joints and facial muscles.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 text-center p-10 rounded-2xl shadow-lg mt-16"
          >
            <p className="text-xl font-semibold mb-4 text-pink-900">
              Considering Full Mouth Rehabilitation?
            </p>
            <p className="mb-6 text-gray-800">
              Our specialists can help restore your smile and improve your dental health. Book a consultation now!
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
