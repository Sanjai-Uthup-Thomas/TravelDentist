'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
export default function GumDiseaseTreatment() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#ffffff] to-white text-gray-900">
            <Navbar />
            <div className="h-20 md:h-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-4 py-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">Gum Disease Treatment</h1>

                <div className="flex justify-center mb-12 bg-red-950">
                    <iframe
                        loading="lazy"
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/B5O9oDuu2BQ"
                        title="Gum Disease Treatment"
                        className="rounded-2xl shadow-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 space-y-6"
                >
                    <div>
                        <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">What is Gum Disease?</h2>
                        <p>Also known as periodontal disease, it is a chronic bacterial infection affecting gums and bone. If untreated, it can lead to tooth loss.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">Who is a Periodontist?</h2>
                        <p>A dentist specializing in the prevention, diagnosis, and treatment of gum disease.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">What is LASER Periodontal Therapy?</h2>
                        <p>A modern, minimally invasive treatment option that uses laser technology to remove bacteria and promote healing.</p>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-red-600 text-center font-bold animate-pulse mb-12"
                >
                    Bleeding gums? You may need a periodontist&#39;s care.
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">Health Risks from Gum Disease</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Tooth loss</li>
                        <li>Heart disease risk increases</li>
                        <li>Stroke likelihood rises</li>
                        <li>Premature births</li>
                        <li>Complications in diabetes</li>
                        <li>Worsened lung conditions</li>
                    </ul>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">Who&#39;s at Risk?</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Medical Conditions:</h3>
                            <ul className="list-disc ml-6">
                                <li>Heart disease</li>
                                <li>Diabetes</li>
                                <li>Respiratory issues</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Lifestyle Factors:</h3>
                            <ul className="list-disc ml-6">
                                <li>Smoking</li>
                                <li>High stress</li>
                                <li>Poor oral hygiene</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">Signs & Symptoms</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Early Stage:</h3>
                            <ul className="list-disc ml-6">
                                <li>Red, swollen gums</li>
                                <li>Bleeding while brushing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Moderate Stage:</h3>
                            <ul className="list-disc ml-6">
                                <li>Receding gums</li>
                                <li>Bad breath</li>
                                <li>Pus around gums</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Advanced Stage:</h3>
                            <ul className="list-disc ml-6">
                                <li>Loose teeth</li>
                                <li>Changes in bite or taste</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">Treatment Options</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Basic Care:</h3>
                            <ul className="list-disc ml-6">
                                <li>Scaling and root planing</li>
                                <li>Deep cleaning under anesthesia</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Advanced Procedures:</h3>
                            <ul className="list-disc ml-6">
                                <li>Laser therapy</li>
                                <li>Flap surgery</li>
                                <li>Bone grafts</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#f2f2f2] text-center p-6 rounded-xl shadow-md"
        >
          <p className="text-lg font-medium">
            Concerned about your gums? <br />
            <span className="text-[#F875AA]">Reach out to us on WhatsApp or Email.</span>
          </p>
        </motion.div> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg "
                >
                    <p className="text-2xl font-semibold mb-4 text-pink-900">
                        Worried about bleeding gums or bad breath?
                    </p>
                    <p className="text-lg mb-6 text-gray-800">
                        Our specialists are just a message away — get expert help today!
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
