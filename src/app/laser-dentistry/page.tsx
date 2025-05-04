'use client';
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function LaserDentistryPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-gray-900 overflow-hidden">
            <Navbar />
            <div className="h-20 md:h-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto px-4 py-10"
            >
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#F875AA] mb-10 leading-tight">
                Laser Dentistry
                </h1>

                {/* Description */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                >
                    <p className="text-lg leading-relaxed">
                        Laser dentistry uses focused light beams to remove or shape tissue with unmatched precision. It reduces discomfort, speeds healing, and sterilizes treatment areas to lower infection risk — perfect for modern dental care.
                    </p>

                    {/* Advantages */}
                    <div className="bg-pink-50 p-6 rounded-xl shadow-md border-l-4 border-[#F875AA]">
                        <h2 className="text-2xl font-semibold text-[#F875AA] mb-3">Why Choose Laser Dentistry?</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-800">
                            <li>Minimal discomfort during procedures</li>
                            <li>Reduced bleeding and faster healing</li>
                            <li>Precision work that protects healthy tissue</li>
                            <li>No need for sutures or invasive cuts</li>
                        </ul>
                    </div>

                    {/* Uses */}
                    <div className="bg-pink-50 p-6 rounded-xl shadow-md border-l-4 border-[#F875AA]">
                        <h2 className="text-2xl font-semibold text-[#F875AA] mb-3">Common Laser Applications</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-800">
                            <li>Gum disease treatment (laser debridement)</li>
                            <li>Teeth whitening</li>
                            <li>Smile designing</li>
                            <li>Apicoectomy (root-end surgery)</li>
                            <li>Frenectomy (tongue/lip tie treatment)</li>
                        </ul>
                    </div>

                    <p className="text-lg leading-relaxed">
                        We use a high-tech 10W 980nm diode laser — the gold standard for safe, effective, and comfortable treatments.
                    </p>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg "
                >
                    <p className="text-3xl font-bold mb-4 text-pink-900">
                        Ready for stress-free dental care?
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        Discover the benefits of laser treatment. Let’s make your next dental visit calm and comfortable.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/919XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
                        >
                            Chat on WhatsApp
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
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
