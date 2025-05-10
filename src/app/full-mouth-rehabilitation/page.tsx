'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function FullMouthRehabilitationPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-gray-900">
      <Navbar />
      <div className="h-20 md:h-50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">
          Full Mouth Rehabilitation
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
            className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg "
          >
            <p className="text-xl font-semibold mb-4 text-pink-900">
              Considering Full Mouth Rehabilitation?
            </p>
            <p className="mb-6 text-gray-800">
              Our specialists can help restore your smile and improve your dental health. Book a consultation now!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919035153096"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:traveldentist.in@gmail.com"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </section>
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
