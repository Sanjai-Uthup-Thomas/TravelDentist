'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RahulImage from '../../../public/Rahul_Image.png';
import RohitImage from '../../../public/Rohit_Image.png';
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
              src={RahulImage}
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
              src={RohitImage}
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
              <span className="text-pink-600 font-semibold"> FBOCI, Sweden</span> and has advanced training in
              <span className="text-pink-600 font-semibold"> corticobasal implantology</span> from
              <span className="text-pink-600 font-semibold"> IFFID, Switzerland</span>.
              Additionally, he is highly skilled in pterygoid implants and the nerve bypass technique.
            </p>
          </motion.div>
        </div>
      </div>

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
