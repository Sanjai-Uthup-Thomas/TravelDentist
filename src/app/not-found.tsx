"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* 🌸 Soft Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#F875AA]/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-[#F875AA]/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      {/* 🦷 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full text-center"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/TravelDentist_logo.jpg"
            alt="Travel Dentist"
            width={120}
            height={60}
          />
        </div>

        {/* 404 */}
        <h1
          className={`${playfair.className} text-7xl font-bold text-[#F875AA]`}
        >
          404
        </h1>

        <h2
          className={`${playfair.className} text-2xl mt-3 font-semibold text-gray-800`}
        >
          Oops! Page not found 😅
        </h2>
     <p className="text-gray-500 mt-2 text-lg leading-relaxed">
  Looks like this page went for a dental check-up 🦷  
  Let’s bring you back to your perfect smile!
</p>

        {/* CTA BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#F875AA] hover:bg-pink-500 text-white px-6 py-3 rounded-xl shadow-md transition font-semibold tracking-wide"
          >
            Go Home
          </Link>

          <a
            href="https://wa.me/919035153096"
            target="_blank"
            className="border border-[#F875AA] text-[#F875AA] hover:bg-[#F875AA] hover:text-white px-6 py-3 rounded-xl transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* 🦷 SERVICES QUICK LINKS (CONVERSION BOOST) */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full"
      >
        {[
          { title: "Dental Implants", link: "/dental-implants" },
          { title: "Laser Dentistry", link: "/laser-dentistry" },
          { title: "Smile Correction", link: "/gummy-smile-correction" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="p-4 border rounded-xl text-center hover:shadow-lg hover:border-[#F875AA] transition"
          >
            <p className="font-semibold text-gray-700">{item.title}</p>
          </Link>
        ))}
      </motion.div>

      {/* 📞 EXTRA CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-center"
      >
        <p className="text-gray-500">Need immediate help?</p>

        <a
          href="tel:+919035153096"
          className="text-[#F875AA] font-semibold text-lg hover:underline"
        >
          Call Now 📞
        </a>
      </motion.div>
    </div>
  );
}
