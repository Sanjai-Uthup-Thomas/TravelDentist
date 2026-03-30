"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
type CardProps = {
  index: number;
  imageSrc: StaticImageData;
  title: string;
  description: string[];
  link: string;
  alt: string;
};
const Card = ({
  index,
  imageSrc,
  title,
  description,
  link,
  alt,
}: CardProps) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="relative max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-[0_30px_40px_rgba(0,0,0,0.2)] group"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* DARK GRADIENT (DYNAMIC SIDE) */}
        <div
          className={`absolute inset-0 ${
            isEvenIndex
              ? "bg-gradient-to-r from-black/90 via-black/60 to-black/50"
              : "bg-gradient-to-l from-black/90 via-black/60 to-black/50"
          }`}
        />

        {/* CONTENT */}
        <div
          className={`relative z-10 p-8 md:p-16 max-w-xl text-white space-y-6 ${
            isEvenIndex ? "ml-0 md:ml-10" : "ml-auto md:mr-10 text-right"
          }`}
        >
          {/* SMALL LABEL */}
          {/* <p className="text-xs md:text-sm tracking-widest uppercase text-pink-300">
            Premium Dental Care
          </p> */}

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">{title}</span>
          </h2>

          {/* ACCENT LINE */}
          <div
            className={`w-16 h-[3px] bg-gradient-to-r from-[#F875AA] to-pink-400 rounded-full ${
              isEvenIndex ? "" : "ml-auto"
            }`}
          />

          {/* DESCRIPTION */}
          <div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed font-light">
            {description.map((text: string, idx: number) => (
              <p
                key={idx}
                className={`max-w-lg ${
                  isEvenIndex ? "text-left" : "ml-auto text-right"
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`flex flex-wrap gap-4 pt-4 ${
              isEvenIndex ? "" : "justify-end"
            }`}
          >
            <Link
              href={link}
              className="relative px-6 py-3 rounded-full font-semibold overflow-hidden group bg-white text-black hover:scale-105 transition"
            >
              <span className="relative z-10">Learn More</span>
            </Link>

            <a
              href="tel:+919035153096"
              className="border border-white/30 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
