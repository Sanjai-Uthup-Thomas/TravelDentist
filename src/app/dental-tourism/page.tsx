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
            </motion.div>

            <Footer />
        </div>
    );
}