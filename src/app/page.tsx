"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GUM_DISEASE_TREATMENT from "../../public/GUM-DISEASE-TREATMENT.jpg";
import dentalImplants from "../../public/dentalImplants.webp";
import GummySmileCorrection from "../../public/gummy-smile-correction.webp";
import keralaTourism from "../../public/keralaTourism.png";
import Laser from "../../public/laser.png";
import FMR from "../../public/FMR.webp";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ClinicSection from "./components/ClinicSection";
import CinematicSection from "./components/CinematicSection";
import DifferenceSection from "./components/DifferenceSection";

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
      imageSrc: GummySmileCorrection,
      title: "GUMMY SMILE CORRECTION",
      description: [
        "Gummy smile correction is a cosmetic dental procedure that improves smiles by reducing visible gum tissue.",
      ],
      link: "/gummy-smile-correction",
      alt: "Gummy Smile Correction",
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
      <DifferenceSection />
      {/* about */}
      <CinematicSection />
      {/* <div className="h-[200px] flex items-center justify-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F875AA] tracking-wide">
          SERVICES
        </h1>
      </div> */}
      <div className="relative py-20 flex items-center justify-center overflow-hidden">
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50" />

        {/* GLOW ELEMENTS */}
        <div className="absolute top-10 left-1/4 w-60 h-60 bg-pink-200 opacity-30 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-pink-300 opacity-20 blur-3xl rounded-full" />

        {/* CONTENT */}
        <div className="relative text-center">
          {/* SMALL LABEL */}
          <p className="text-sm tracking-widest text-pink-400 uppercase mb-3">
            What We Offer
          </p>

          {/* MAIN TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-600">
            Our <span className="text-[#F875AA]">Services</span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Advanced dental treatments designed for comfort, precision, and
            long-lasting results.
          </p>

          {/* DIVIDER */}
          <div className="w-16 h-[3px] bg-[#F875AA] mx-auto mt-6 rounded-full" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-pink-50 via-white to-pink-50">
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
      </div>
      {/* <div>
        <div className="h-[200px] flex items-center justify-center bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F875AA] tracking-wide">
            TESTIMONIALS
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              Amazing service! The doctors and staff were very friendly and professional.
            </p>
            <p className="mt-4 text-sm text-gray-500">— Aisha Mathew</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              Painless experience and great care. Highly recommend this dental clinic!
            </p>
            <p className="mt-4 text-sm text-gray-500">— Rahul Nair</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-sm"
          >
            <p className="text-center text-pink-600 hover:text-[#F875AA] transition">
              State-of-the-art technology and warm hospitality. Truly the best!
            </p>
            <p className="mt-4 text-sm text-gray-500">— Sneha George</p>
          </motion.div>
        </div>

      </div> */}
      <ClinicSection />
      <Footer />
    </div>
  );
}
