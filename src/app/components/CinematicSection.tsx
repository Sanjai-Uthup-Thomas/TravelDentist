'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Image1 from "../../../public/Image.jpg";
export default function CinematicSection() {
  return (
    <section className="relative mt-5 min-h-[700px] flex items-center overflow-hidden">

      {/* 🎥 BACKGROUND IMAGE WITH SLOW ZOOM */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src={Image1}
          alt="Dental Care"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 🌑 DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />

      {/* ✨ LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(248,117,170,0.25),transparent_40%)]" />

      {/* 🌫️ SOFT TOP FADE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* 🎬 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20">

        <motion.div
          className="max-w-2xl text-white space-y-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* LABEL */}
          <motion.p
            className="text-sm tracking-widest uppercase text-pink-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Premium Dental Experience
          </motion.p>

          {/* TITLE */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Redefining Smiles with
            <span className="block text-pink-400">
              Precision & Care
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-200 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Experience advanced dental treatments designed for comfort,
            aesthetics, and long-term health. We help patients worldwide
            achieve confident smiles at affordable costs.
          </motion.p>

          {/* HIGHLIGHTS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>✔ Save up to 70% globally</p>
            <p>✔ Advanced implant solutions</p>
            <p>✔ Full-mouth rehabilitation</p>
            <p>✔ International patient care</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >

            <a
              href="/contact-us"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-xl hover:scale-105 transition"
            >
              Get Free Consultation
            </a>

            <a
              href="https://wa.me/919035153096"
              target="_blank"
              className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black transition"
            >
              Chat on WhatsApp
            </a>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}