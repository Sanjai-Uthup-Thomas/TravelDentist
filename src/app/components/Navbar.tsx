'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../public/TravelDentist_logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-pink-50/70 shadow-lg h-30 md:h-55">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-25 md:h-50 relative">
        {/* Logo */}
        <div className="flex-shrink-0 mt-5">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={210}
              height={210}
              className="object-contain w-[120px] md:w-[210px] hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Center link */}
        <div className="hidden md:flex absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-3">
          <button
            onClick={toggleModal}
            className="text-pink-400 font-bold text-2xl bg-white border-2 border-pink-300 rounded-full px-6 py-2 shadow-lg hover:bg-pink-100 hover:text-pink-500 hover:scale-105 transition-all duration-300"
          >
            Menu
          </button>
        </div>

        {/* Right link */}
        <div className="hidden md:flex absolute right-0 bottom-0 transform -translate-x-1/2 mb-3">
          <Link
            href="/book-online"
            className="text-pink-400 font-bold text-2xl bg-white border-2 border-pink-300 rounded-full px-6 py-2 shadow-lg hover:bg-pink-100 hover:text-pink-500 hover:scale-105 transition-all duration-300"
          >
            Book Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleModal} className="text-pink-400 focus:outline-none">
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-10 z-40 h-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: .5 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
            />

            {/* Side Modal */}
            <motion.div
              className="fixed top-0 left-0 w-3/4 max-w-xs h-800 bg-white shadow-lg z-50 p-4 flex flex-col space-y-2"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-4">
                <button onClick={toggleModal} className="text-pink-400 hover:text-pink-600 transition-colors">
                  <X size={30} />
                </button>
              </div>

              {/* Main Links */}
              <Link
                href="/"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-md transition-all duration-200"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={toggleServices}
                  className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-md w-full text-left transition-all duration-200 flex justify-between items-center"
                >
                  Services
                  {servicesOpen ? (
                    <ChevronUp size={24} className="text-pink-400" />
                  ) : (
                    <ChevronDown size={24} className="text-pink-400" />
                  )}
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 flex flex-col space-y-1 overflow-hidden"
                    >
                      {/* Service Sub-links */}
                      <Link
                        href="/services/gum-disease"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-pink-400 rounded-md transition-all duration-200"
                      >
                        Gum Disease Treatment
                      </Link>
                      <Link
                        href="/services/dental-implants"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-pink-400 rounded-md transition-all duration-200"
                      >
                        Dental Implants
                      </Link>
                      <Link
                        href="/services/full-mouth-rehabilitation"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-pink-400 rounded-md transition-all duration-200"
                      >
                        Full Mouth Rehabilitation
                      </Link>
                      <Link
                        href="/services/full-mouth-rehabilitation"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-pink-400 rounded-md transition-all duration-200"
                      >
                        Laser Dentistry
                      </Link>                      <Link
                        href="/services/full-mouth-rehabilitation"
                        onClick={toggleModal}
                        className="py-2 px-3 text-md text-gray-600 hover:bg-pink-50 hover:text-pink-400 rounded-md transition-all duration-200"
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
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-md transition-all duration-200"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-md transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/book-online"
                onClick={toggleModal}
                className="py-2 px-4 text-lg font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-500 rounded-md transition-all duration-200 md:hidden"
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
