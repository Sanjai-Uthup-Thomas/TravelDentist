'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../public/Hero-bg.png';
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion"; // 👉 import motion

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <div className="relative w-full h-[100vh]">
                <Image
                    src={HeroImage}
                    alt="Hero Background"
                    fill
                    className="object-cover" // maintain aspect ratio
                    quality={100}
                    priority
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute z-20 text-white flex flex-col gap-6 bottom-4 w-full"
            >
                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-10 items-center justify-center mt-6"
                >
                    <Link
                        href="/book-online"
                        className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-5 px-6 rounded-3xl transition-all duration-300"
                    >
                        <Calendar size={20} />
                        Request Appointment
                    </Link>

                    <a
                        href="tel:+919999999999"
                        className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-5 px-12 rounded-3xl transition-all duration-300"
                    >
                        <Phone size={20} />
                        +91 9999999999
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
