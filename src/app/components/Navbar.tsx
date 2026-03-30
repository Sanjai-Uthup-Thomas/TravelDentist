"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/TravelDentist_logosvg.svg";
import T from "../../../public/T.svg";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  // Scroll logic to detect when user moves down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-pink-50/70 shadow-lg transition-all duration-300 ease-in-out"
          : "bg-pink-50/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto md:px-2 flex items-center justify-between relative ">
        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src={logo}
            alt="Logo"
            width={scrolled ? 100 : 120}
            className="transition-all duration-500 hover:scale-105 md:w-[150px]"
          />
        </Link>

        {/* CENTER LOGO */}
        <motion.div
          animate={{
            scale: scrolled ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 md:top-0"
        >
          <Image
            src={T}
            alt="Center Logo"
            width={110} // 👈 smaller for mobile
            className="md:w-[160px]"
          />
        </motion.div>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* MENU */}
          {/* MENU BUTTON */}
          <button
            onClick={() => setModalOpen(true)}
            className="relative px-7 py-3 md:px-8 md:py-3.5 
  rounded-full text-[#F875AA] 
  border-2 border-pink-300 
  text-base md:text-lg font-semibold
  overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            {/* <span className="absolute inset-0 bg-pink-50/70 opacity-0 group-hover:opacity-100 transition" /> */}
            <span className="relative z-10">Menu</span>
          </button>

          {/* BOOK BUTTON */}
          <Link
            href="/contact-us"
            className="relative px-8 py-3 md:px-10 md:py-3.5 
  rounded-full text-white font-semibold 
  text-base md:text-lg
  overflow-hidden group shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 group-hover:scale-110 transition duration-300" />
            <span className="relative z-10">Book Online</span>
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setModalOpen(true)}
          className="md:hidden text-[#F875AA] mr-4"
        >
          <Menu size={40} />
        </button>
      </div>

      {/* MOBILE / SIDE MENU */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-10 z-40 h-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
            />

            {/* Side Modal */}
            <motion.div
              className="fixed top-0 left-0 w-3/4 max-w-xs h-800 bg-white shadow-lg z-50 p-4 flex flex-col space-y-2"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleModal}
                  className="text-[#F875AA] hover:text-pink-600 transition-colors"
                >
                  <X size={30} />
                </button>
              </div>

              {/* Main Links */}
              <Link
                href="/"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-[#F875AA] rounded-md transition-all duration-200"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={toggleServices}
                  className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-[#F875AA] rounded-md w-full text-left transition-all duration-200 flex justify-between items-center"
                >
                  Services
                  {servicesOpen ? (
                    <ChevronUp size={24} className="text-[#F875AA]" />
                  ) : (
                    <ChevronDown size={24} className="text-[#F875AA]" />
                  )}
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 flex flex-col space-y-1 overflow-hidden"
                    >
                      {/* Service Sub-links */}
                      <Link
                        href="/gum-disease-treatment"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Gum Disease Treatment
                      </Link>
                      <Link
                        href="/dental-implants"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Dental Implants
                      </Link>
                      <Link
                        href="/full-mouth-rehabilitation"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Full Mouth Rehabilitation
                      </Link>
                      <Link
                        href="/laser-dentistry"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Laser Dentistry
                      </Link>{" "}
                      <Link
                        href="/gummy-smile-correction"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Gummy smile correction
                      </Link>
                      <Link
                        href="/dental-tourism"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-[#F875AA] rounded-md transition-all duration-200"
                      >
                        Dental Tourism
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about-us"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-[#F875AA] rounded-md transition-all duration-200"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-[#F875AA] rounded-md transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/contact-us"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-[#F875AA] rounded-md transition-all duration-200 md:hidden"
              >
                Book Online
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
