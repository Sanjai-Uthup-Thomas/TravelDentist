"use client";

import Image from "next/image";
import WhatsappIcon from "../../../public/whatsapp.svg";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in after page load
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 500);

    // Shrink after few seconds
    const shrinkTimer = setTimeout(() => {
      setExpanded(false);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(shrinkTimer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919035153096?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20dental%20services"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 z-50 transform transition-all duration-700
      ${visible ? "translate-x-0 opacity-100" : "translate-x-0 opacity-0"}`}
    >
      <div
        className={`relative flex items-center  bg-[#25D366] text-white shadow-2xl
        transition-all duration-500 ease-in-out cursor-pointer
        ${expanded ? "px-5 py-3 rounded-full" : "p-1 rounded-full"}
        hover:p-0`}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-10 animate-ping"></span>

        {/* ICON */}
        <Image
          src={WhatsappIcon}
          alt="WhatsApp"
          width={52}
          height={52}
          className="transition-transform duration-300 hover:scale-110"
        />

        {/* TEXT */}
        <span
          className={`relative z-10 whitespace-nowrap font-medium text-base md:text-base transition-all duration-300
          ${expanded ? "opacity-100 max-w-xs ml-1" : "opacity-0 max-w-0 overflow-hidden"}`}
        >
          Chat with us on WhatsApp
        </span>

        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-bounce">
          1
        </span>
      </div>
    </a>
  );
}
