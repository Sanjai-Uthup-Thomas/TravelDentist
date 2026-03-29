"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import GummySmileCorrection from "../../../public/gummy-smile-correction.webp";
import GummySmileBeforeAfter from "../../../public/gummy-smile-makeover-before-and-after-980x551.webp";
import WhatsAppButton from "../components/Whatsapp";

export default function GumDiseaseTreatment() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ffffff] to-white text-gray-900">
      <Navbar />
      <div className="h-20 md:h-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-10 md:pt-40"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F875AA] mb-10">
          Gummy smile correction
        </h1>

        <div className="flex justify-center mb-12 bg-white">
          <Image
            src={GummySmileCorrection}
            alt="Quality Icon"
            width={700}
            height={400}
          />
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
              What is gummy smile?
            </h2>
            <p>
              A Gummy smile in terms refers to a condition when there is an
              excessive display of gums (gingival) while smiling. Normally 2/3rd
              to 3/4th of the upper teeth should be visible while smiling and
              the rest should be covered by the upper lip. In case the gum show
              is more ( 2 to 3 mm) while speaking or smiling it gives an
              unaesthetic appearance.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#F875AA]">
            Gummy smile correction
          </h2>
          <p>
            Typically the procedure that we do most of the time is what is
            called crown Lengthening, where we actually sculpt or reshape the
            gum tissue to make those teeth a little bit longer and more
            attractive. Use of a Dental Laser for Gum Contouring gives a
            bloodless, precise and painless results. Sometimes the bone around
            the teeth needs to be reshaped as well. So we reshape the gum and
            also reshape the bone to give the patient the look that they want
            and have a normal-looking smile with teeth and in proportion to
            their face. Another advantage of gum contouring is that it
            eliminates the deep gum pockets and prevents recurrent gum
            infections. This treatment also includes the use of
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>veneers</li>
            <li>Aligners </li>
            <li>Lip lengthening procedures</li>
            <li>Depigmentation of gums</li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white"
        >
          <div className="flex justify-center mb-12 bg-white">
            <Image
              src={GummySmileBeforeAfter}
              alt="Quality Icon"
              width={700}
              height={400}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 text-center p-8 rounded-2xl shadow-lg "
        >
          <p className="text-2xl font-semibold mb-4 text-pink-900">
            Worried about gummy smile?
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
    </div>
  );
}
