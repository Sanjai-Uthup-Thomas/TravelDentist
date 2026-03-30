"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/Hero-bg.png";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:h-150 flex items-center overflow-hidden pt-40">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Hero Background"
          fill
          className="object-cover scale-105"
          priority
        />
      </div>

      {/* DARK PREMIUM GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#0f172a]/85 to-black/95 z-10" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,117,170,0.15),transparent_40%)] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Tag */}
          <p className="text-pink-400 text-sm tracking-widest uppercase">
            Premium Dental Care
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Dental Tourism in Kerala, India
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-300">
            Experience world-class dental care at
            <span className="text-pink-400 font-semibold">
              {" "}
              up to 70% lower cost{" "}
            </span>
            compared to global treatment prices.
          </p>

          {/* 💰 PRICE COMPARISON */}
          {/* <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Typical International Cost
              </p>
              <p className="text-red-400 line-through text-lg md:text-xl">
                $3000+
              </p>
            </div>

            <div className="text-2xl font-bold text-pink-400">→</div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">Your Cost in India</p>
              <p className="text-green-400 text-xl md:text-2xl font-bold">
                $400
              </p>
            </div>
          </div> */}

          {/* 💰 SAVINGS BADGE */}
          {/* <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium shadow-md">
            💰 Save up to $2600 on your treatment
          </div> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg px-4 py-3 hover:bg-white/10 transition">
              <span className="text-green-400 text-lg">✔</span>
              <span className="text-gray-300 text-sm sm:text-base">
                Treatments starting from{" "}
                <span className="text-white font-semibold">$400</span>
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg px-4 py-3 hover:bg-white/10 transition">
              <span className="text-green-400 text-lg">✔</span>
              <span className="text-gray-300 text-sm sm:text-base">
                Dedicated international patient support
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg px-4 py-3 hover:bg-white/10 transition">
              <span className="text-green-400 text-lg">✔</span>
              <span className="text-gray-300 text-sm sm:text-base">
                Latest advanced dental technology
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg px-4 py-3 hover:bg-white/10 transition">
              <span className="text-green-400 text-lg">✔</span>
              <span className="text-gray-300 text-sm sm:text-base">
                Trusted by patients worldwide 🌍
              </span>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block"></div>

        {/* CTA BUTTONS */}
        <div className="md:p-10 flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-2xl mx-auto lg:mx-0 justify-center lg:justify-start">
          {/* PRIMARY CTA */}
          <Link
            href="/contact-us"
            className="relative flex items-center justify-center gap-2 
    w-full sm:flex-1 min-w-[260px]
    px-6 py-4 md:px-10 md:py-6 
    text-base md:text-lg 
    rounded-full font-semibold text-white overflow-hidden group shadow-2xl hover:shadow-pink-500/40 "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 animate-[pulse_2s_infinite]" />

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

            <span className="relative z-10 flex items-center gap-3 justify-center w-full">
              <Calendar size={22} />
              Get Free Consultation
            </span>
          </Link>
        </div>
        {/* CTA BUTTONS */}
        <div className="md:p-10 flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-2xl mx-auto lg:mx-0 justify-center lg:justify-start ">
          {/* CALL CTA */}
          <a
            href="tel:+919035153096"
            className="flex items-center justify-center gap-2 
    w-full sm:flex-1 min-w-[260px]
    px-6 py-4 md:px-10 md:py-6 
    text-base md:text-lg 
    border border-white/30 text-white font-semibold 
    rounded-full backdrop-blur-sm 
    hover:bg-white hover:text-black 
    transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={22} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
