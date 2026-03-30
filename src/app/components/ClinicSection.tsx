"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ClinicSection() {
  const clinics = [
    {
      name: "SK Dental Clinic",
      location: "Chingavanam, Kottayam",
      tag: "Main",
      rating: "4.9 ★",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      map: "https://maps.google.com?q=SK+Dental+Clinic+Kottayam&output=embed",
      link: "https://www.google.com/maps/place/S.K.+Dental+Clinic",
      phone: "+919035153096",
    },
    {
      name: "Perio Center",
      location: "Muttambalam, Kottayam",
      rating: "4.8 ★",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
      map: "https://maps.google.com?q=Perio+Center+Kottayam&output=embed",
      link: "https://maps.google.com?q=Perio+Center+Kottayam",
      phone: "+919035153096",
    },
    {
      name: "Smile Care Dental",
      location: "Kakkanad, Kochi",
      tag: "New",
      rating: "4.9 ★",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      map: "https://maps.google.com?q=Kakkanad+Dental+Clinic&output=embed",
      link: "https://maps.google.com?q=Kakkanad+Dental+Clinic",
      phone: "+919035153096",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative md:pt-24 pb-10 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 " />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-80 right-10 w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="relative text-center mb-14 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-600">
          Visit <span className="text-[#F875AA]">Our Clinics</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Experience premium dental care at our multiple locations across
          Kerala.
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT: CARDS */}
        <div className="space-y-6">
          {clinics.map((clinic, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-500
  ${
    active === index
      ? "border-pink-400 shadow-[0_20px_50px_rgba(248,117,170,0.25)]"
      : "border-pink-100 hover:shadow-xl"
  }`}
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* TAG (LEFT TOP) */}
                {clinic.tag && (
                  <span className="absolute top-3 left-3 text-xs bg-white/90 backdrop-blur px-3 py-1 rounded-full text-pink-600 font-medium shadow">
                    {clinic.tag}
                  </span>
                )}

                {/* ⭐ RATING (RIGHT TOP) */}
                <span className="absolute top-3 right-3 text-xs bg-black/60 backdrop-blur text-yellow-300 px-3 py-1 rounded-full shadow">
                  ⭐ {clinic.rating}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-white space-y-3">
                {/* TITLE */}
                <h3 className="font-semibold text-lg text-gray-800">
                  {clinic.name}
                </h3>

                {/* LOCATION */}
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  📍 {clinic.location}
                </p>

                {/* DIVIDER */}
                <div className="h-[1px] bg-pink-100" />

                {/* ACTIONS */}
                <div className="flex justify-between items-center">
                  {/* DIRECTIONS */}
                  <a
                    href={clinic.link}
                    target="_blank"
                    className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                  >
                    🧭 Directions
                  </a>

                  {/* CALL BUTTON */}
                  <a
                    href={`tel:${clinic.phone}`}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition"
                  >
                    📞 Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: MAP */}

        <div className="block md:sticky md:top-45 h-[500px] rounded-2xl shadow-amber-50 border border-pink-100 bg-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <iframe
                src={clinics[active].map}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="relative text-center my-8">
        <a
          href="/contact-us"
          className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
        >
          Book Your Visit
        </a>
      </div> */}
    </section>
  );
}
