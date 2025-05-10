'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Kumarkom from '../../../public/Kumarkom.jpg';
import kattappana from '../../../public/kattappana.jpg';
import thekkady from '../../../public/thekkady-munnar.jpg';
import vagamon from '../../../public/vagamon-1.jpg';




export default function DentalTourism() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#fff1f2] to-white text-gray-900">
            <Navbar />
            <div className="h-20 md:h-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto px-4 py-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">Dental Tourism</h1>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 mb-12"
                >
                    <p>
                        With the healthcare costs increasing rapidly in developed countries, dental treatment has
                        become a costly affair. Patients in developed nations are increasingly looking forward to treatment
                        options in countries like India which offer similar or even better dental services at much more
                        affordable rates — along with the opportunity to explore the country.
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 mb-12"
                >
                    <h2 className="text-3xl font-semibold text-[#F875AA]">Kerala - God&apos;s Own Country</h2>
                    <p>
                        Our dental office is set up in a picturesque part of Kerala called Kottayam. From there, you can
                        explore hilly terrains, exotic wildlife, stunning waterfalls, serene streams in the hills of Idukki,
                        and the beautiful backwaters of Kumarakom.
                    </p>
                    <p>
                        We offer great staycations promoting sustainable, ecologically friendly, and locally oriented tourism.
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-semibold text-[#F875AA] mb-6">Places to Explore</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'THEKKADY', img: thekkady },
                            { name: 'VAGAMON', img: vagamon },
                            { name: 'KATTAPANA', img: kattappana },
                            { name: 'KUMARAKOM', img: Kumarkom },
                        ].map((place, idx) => (
                            <motion.div
                                key={idx}
                                className="rounded-xl shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src={place.img} alt={place.name} width={600} height={400} className="w-full h-60 object-cover" />
                                <div className="p-4 bg-white">
                                    <h3 className="text-xl font-semibold text-[#F875AA] text-center">{place.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg mt-10 "
                >
                    <p className="text-2xl font-semibold mb-4 text-pink-900">
                        Interested in exploring Kerala while taking care of your dental health?
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        Contact us to curate unforgettable experiences during your stay.
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