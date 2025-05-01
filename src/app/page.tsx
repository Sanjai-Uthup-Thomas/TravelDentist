'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { motion } from "framer-motion"; // 👈 import motion
import QualityIcon from '../../public/Quality.svg';
import ComfortIcon from '../../public/Comfort.svg';
import TechnologyIcon from '../../public/Technology.svg';
import Image1 from '../../public/Image1.jpg';
import GUM_DISEASE_TREATMENT from '../../public/GUM-DISEASE-TREATMENT.jpg';
import dentalImplants from '../../public/dentalImplants.webp';
import keralaTourism from '../../public/keralaTourism.png';
import Laser from '../../public/laser.png';
import FMR from '../../public/FMR.webp';
import Footer from "./components/Footer";
import Card from "./components/Card";


export default function Home() {
  const sections = [
    {
      imageSrc: GUM_DISEASE_TREATMENT,
      title: "GUM DISEASE TREATMENT",
      description: [
        "What is periodontal / gum disease?",
        "Who is a periodontist?",
        "What is LASER periodontal therapy?",
        "Procedures, making us your one-stop destination for all gum health and tooth replacement needs.",
      ],
      link: "/gum-disease-treatment",
      alt: "Gum disease treatment illustration",
    },
    {
      imageSrc: dentalImplants,
      title: "DENTAL IMPLANTS",
      description: [
        "What are dental implants?",
        "Who is a candidate for implants?",
        "What is the implant procedure like?",
        "Permanent solution that looks, feels, and functions like natural teeth.",
      ],
      link: "/dental-implants",
      alt: "Dental implants",
    },
    {
      imageSrc: FMR,
      title: "FULL MOUTH REHABILITATION",
      description: [
        "Full mouth rehabilitation involves various dental treatments to fix multiple issues, thereby restoring the overall aesthetics and function of your teeth.",
      ],
      link: "/full-mouth-rehabilitation",
      alt: "Full mouth rehabilitation",
    },
    {
      imageSrc: Laser,
      title: "LASER DENTISTRY",
      description: [
        "Laser dentistry uses focused light beams to treat dental issues with less pain, bleeding, and faster healing.",
      ],
      link: "/laser-dentistry",
      alt: "Laser dentistry",
    },
    {
      imageSrc: keralaTourism,
      title: "DENTAL TOURISM",
      description: [
        "With the healthcare costs increasing rapidly in developed countries, dental treatment has become a costly affair.",
      ],
      link: "/dental-tourism",
      alt: "Dental tourism",
    },
  ];
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* Animated Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

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
          <h1 className="text-white text-2xl font-bold text-center mt-2">QUALITY</h1>
          <h3 className="text-white text-center">Expert clinicians, guided by science</h3>
        </motion.div>

        {/* Comfort */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-60 bg-[#F875AA] flex flex-col items-center justify-center"
        >
          <Image src={ComfortIcon} alt="Comfort Icon" width={48} height={48} />
          <h1 className="text-white text-2xl font-bold text-center mt-2">COMFORT</h1>
          <h3 className="text-white text-center">Relaxing care in a calm environment</h3>
        </motion.div>

        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-60 bg-[#F875AA] flex flex-col items-center justify-center"
        >
          <Image src={TechnologyIcon} alt="Technology Icon" width={48} height={48} />
          <h1 className="text-white text-2xl font-bold text-center mt-2">TECHNOLOGY</h1>
          <h3 className="text-white text-center">The latest tools for a modern experience</h3>
        </motion.div>

      </div>
      <div className="min-h-[500px] bg-[#F875AA] mt-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-20 overflow-hidden">

        {/* Left Box - Animated Image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[500px] pt-10">
            <Image
              src={Image1}
              alt="Comfort Icon"
              width={500}
              height={500}
              className="rounded-4xl object-contain w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right Box - Animated Text */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Travel Dentist: Your Gateway to Confident Smiles
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Travel Dentist is a unique dental platform dedicated to restoring smiles and boosting confidence.
            Our mission is to preserve natural teeth whenever possible and provide top-tier solutions like dental implants to replace missing teeth.
            We specialize in patient-focused, full-mouth rehabilitation procedures, making us your one-stop destination for all gum health and tooth replacement needs.
          </p>
        </motion.div>
      </div>
      <div className="h-[200px] flex items-center justify-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F875AA] tracking-wide">
          SERVICES
        </h1>
      </div>
      <>
        {sections.map((section, index) => (
          <Card
            key={index}
            index={index}
            imageSrc={section.imageSrc}
            title={section.title}
            description={section.description}
            link={section.link}
            alt={section.alt}
          />
        ))}
      </>
      <div>
        <div className="h-[200px] flex items-center justify-center bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F875AA] tracking-wide">
            TESTIMONIALS
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Person 1"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              "Amazing service! The doctors and staff were very friendly and professional."
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Person 2"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              "Painless experience and great care. Highly recommend this dental clinic!"
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <Image
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Person 3"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              "State-of-the-art technology and warm hospitality. Truly the best!"
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
