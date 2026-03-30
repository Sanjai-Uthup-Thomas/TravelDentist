"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import QualityIcon from "../../../public/Quality.svg";
import ComfortIcon from "../../../public/Comfort.svg";
import TechnologyIcon from "../../../public/Technology.svg";
export default function DifferenceSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:mt-5">
      {/* Center Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-60 bg-white flex items-center justify-center"
      >
        <h1 className="text-[#F875AA] text-2xl font-bold text-center">
          THE TRAVEL DENTIST DIFFERENCE
        </h1>
      </motion.div>

      {/* Quality */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-60 bg-[#F875AA] rounded-t-3xl md:rounded-t-none md:rounded-l-3xl flex flex-col items-center justify-center"
      >
        <Image src={QualityIcon} alt="Quality Icon" width={48} height={48} />
        <h1 className="text-white text-2xl font-bold text-center mt-2">
          QUALITY
        </h1>
        <h3 className="text-white text-center">
          Expert clinicians, guided by science
        </h3>
      </motion.div>

      {/* Comfort */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-60 bg-[#F875AA] flex flex-col items-center justify-center"
      >
        <Image src={ComfortIcon} alt="Comfort Icon" width={48} height={48} />
        <h1 className="text-white text-2xl font-bold text-center mt-2">
          COMFORT
        </h1>
        <h3 className="text-white text-center">
          Relaxing care in a calm environment
        </h3>
      </motion.div>

      {/* Technology */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="h-60 bg-[#F875AA] flex flex-col items-center justify-center"
      >
        <Image
          src={TechnologyIcon}
          alt="Technology Icon"
          width={48}
          height={48}
        />
        <h1 className="text-white text-2xl font-bold text-center mt-2">
          TECHNOLOGY
        </h1>
        <h3 className="text-white text-center">
          The latest tools for a modern experience
        </h3>
      </motion.div>
    </div>
  );
}
