'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      {/* Spacer */}
      <div className="h-30 md:h-40" />

      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-[200px] flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#F875AA] tracking-wide">
          ABOUT US
        </h1>
      </motion.div>

      {/* About Doctors Section */}
      <div className="py-16 px-4 md:px-12 bg-gray-50 space-y-20">
        {/* Doctor 1 */}
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Dr. Rahul Joseph
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-medium">Bachelor of Dental Surgery (BDS)</span>, and 
              <span className="font-medium"> Masters in Dental Surgery (MDS)</span> in Periodontology and Implantology. 
              Dr. Rahul Joseph has undergone extensive training in conventional implants by 
              <span className="text-pink-600 font-semibold"> Dentium, South Korea</span>. He brings precision and excellence in gum treatment and implantology with a compassionate approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Dr. Rahul Joseph"
              width={320}
              height={320}
              className="rounded-2xl shadow-2xl object-cover border-4 border-pink-200"
            />
          </motion.div>
        </div>

        {/* Doctor 2 */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="Dr. Rohit S Menon"
              width={320}
              height={320}
              className="rounded-2xl shadow-2xl object-cover border-4 border-pink-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Dr. Rohit S Menon
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-medium">Bachelor of Dental Surgery (BDS)</span>, and 
              <span className="font-medium"> Masters in Dental Surgery (MDS)</span> in Prosthodontics and Implantology. 
              He holds a Fellowship in Oral Implantology from 
              <span className="text-pink-600 font-semibold"> FBDCI, Sweden</span> and has advanced training in 
              <span className="text-pink-600 font-semibold"> corticobasal implantology</span> from 
              <span className="text-pink-600 font-semibold"> IFFID, Switzerland</span>. 
              Additionally, he is highly skilled in pterygoid implants and the nerve bypass technique.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
