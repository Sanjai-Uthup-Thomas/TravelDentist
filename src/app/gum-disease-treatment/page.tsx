"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
export default function GumDiseaseTreatment() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ffffff] to-white text-gray-900">
      <Navbar />
      <div className="h-20 md:h-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">
          Gum Disease Treatment
        </h1>

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
            <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">
              What is Gum Disease?
            </h2>
            <p>
              Also known as pyorrhoea / periodontal disease chronic
              multifactorial disease affecting gums and bone which is initiated
              by bacterial infection and if untreated can lead to loss of
              supporting bone and finally to tooth loss.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">
              Who is a Periodontist?
            </h2>
            <p>
              A dentist who specialised with advanced knowledge in prevention
              ,diagnosis and treatment of gum disease.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#F875AA] mb-2">
              What is LASER Periodontal Therapy?
            </h2>
            <p>
              A modern, minimally invasive treatment option that uses laser
              technology to remove bacteria and promote healing.
            </p>
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
          <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">
            Health Risks from Gum Disease
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Tooth loss</li>
            <li>Heart disease risk increases</li>
            <li>Stroke likelihood rises</li>
            <li>Premature births</li>
            <li>Difficulty in controlling diabetes leading to complications</li>
            <li>Pregnancy related complications</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">
            Who&#39;s at Risk?
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Medical Conditions:</h3>
              <ul className="list-disc ml-6">
                <li>Heart Disease</li>
                <li>Diabetes</li>
                <li>Respiratory Issues</li>
                <li>Geriatric Patients</li>
                <li>Pregnant Women</li>
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
          <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">
            Signs & Symptoms
          </h2>
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
                <li>Protruding teeth</li>
                <li>Spacing between teeth</li>
                <li>Recurrent swellings in the gum</li>
                <li>Food Impaction</li>
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
          <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">
            Treatment Options
          </h2>
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
