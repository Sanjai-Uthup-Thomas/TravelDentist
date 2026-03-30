"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [visibleCount, setVisibleCount] = useState(5);

  const categories = ["All", "Cost", "Treatment", "Travel", "Safety"];

  const faqs = [
    {
      category: "Cost",
      question: "How much can I save with dental treatment in India?",
      answer:
        "You can save up to 60–70% compared to the US, UK, Europe, and Middle East while receiving world-class treatment.",
    },
    {
      category: "Treatment",
      question: "Is the quality comparable to international standards?",
      answer:
        "Yes. We use advanced technology, certified materials, and experienced dentists trained internationally.",
    },
    {
      category: "Travel",
      question: "Do you help with travel and accommodation?",
      answer:
        "Yes, we assist international patients with travel planning, accommodation guidance, and appointment scheduling.",
    },
    {
      category: "Treatment",
      question: "How long will treatment take?",
      answer:
        "Treatment duration depends on the procedure. Some treatments can be completed within a few days, while others may require multiple visits.",
    },
    {
      category: "Safety",
      question: "Is the treatment safe and pain-free?",
      answer:
        "We follow strict sterilization protocols and use modern pain-free techniques to ensure maximum comfort.",
    },

    // 🔥 NEW QUESTIONS START HERE

    {
      category: "Treatment",
      question: "What treatments do you specialize in?",
      answer:
        "We specialize in dental implants, full-mouth rehabilitation, cosmetic dentistry, laser treatments, and advanced gum care.",
    },
    {
      category: "Cost",
      question: "Are there any hidden charges?",
      answer:
        "No. We provide transparent pricing with a detailed treatment plan before starting, so you know exactly what to expect.",
    },
    {
      category: "Travel",
      question: "How do I plan my visit for dental treatment?",
      answer:
        "Simply contact us online. We will guide you through consultation, treatment planning, travel, and scheduling.",
    },
    {
      category: "Travel",
      question: "How many days should I stay in India for treatment?",
      answer:
        "It depends on the procedure. Basic treatments may take 3–5 days, while complex procedures like implants may require longer stays or follow-up visits.",
    },
    {
      category: "Safety",
      question: "Do you follow international sterilization standards?",
      answer:
        "Yes, we strictly follow global sterilization and hygiene protocols to ensure patient safety at every step.",
    },
    {
      category: "Treatment",
      question: "Will I need follow-up visits?",
      answer:
        "Some treatments may require follow-ups. We provide a clear timeline and remote support when possible.",
    },
    {
      category: "Cost",
      question: "Do you provide a free consultation?",
      answer:
        "Yes, we offer an initial consultation to understand your needs and provide a customized treatment plan.",
    },
    {
      category: "Travel",
      question: "Is Kochi a safe place for international patients?",
      answer:
        "Yes, Kochi is one of the safest and most tourist-friendly cities in India, with excellent healthcare and hospitality services.",
    },
    {
      category: "Treatment",
      question: "What materials do you use for implants and procedures?",
      answer:
        "We use high-quality, internationally approved materials to ensure durability, safety, and long-term success.",
    },
    {
      category: "Safety",
      question: "What if I have complications after returning home?",
      answer:
        "We provide post-treatment guidance and remote support to ensure your recovery is smooth, even after you return home.",
    },
    {
      category: "Treatment",
      question: "Can I combine treatment with a vacation?",
      answer:
        "Absolutely. Many patients combine their dental treatment with a relaxing trip in Kerala, known for its natural beauty and tourism.",
    },
  ];

  // FILTER
  const filteredFaqs = faqs.filter((faq) => {
    return (
      (category === "All" || faq.category === category) &&
      faq.question.toLowerCase().includes(search.toLowerCase())
    );
  });

  // RESET WHEN SEARCH / CATEGORY CHANGES
  useEffect(() => {
    setVisibleCount(5);
    setActive(null);
  }, [search, category]);

  const visibleFaqs = filteredFaqs.slice(0, visibleCount);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative md:py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* HEADER */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-600">
          Frequently  <span className="text-[#F875AA]">Asked Questions</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Find answers instantly or explore topics below.
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto px-6 mb-6">
        <input
          type="text"
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/70 backdrop-blur text-gray-600"
        />
      </div>

      {/* CATEGORY */}
      <div className="flex justify-center flex-wrap gap-3 mb-10 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${
              category === cat
                ? "bg-[#F875AA] text-white shadow"
                : "bg-white border border-pink-100 text-gray-600 hover:bg-pink-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     {/* FAQ LIST */}
<div className="max-w-3xl mx-auto px-6 space-y-4">
  {visibleFaqs.length === 0 && (
    <p className="text-center text-gray-500">No results found.</p>
  )}

  {visibleFaqs.map((faq, index) => {
    const isOpen = active === index;

    return (
      <div
        key={index}
        className="rounded-2xl   overflow-hidden transition-all duration-300"
      >
        {/* QUESTION */}
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center gap-4 p-5 md:p-6 text-left"
        >
          <span className="font-medium text-gray-900 text-base md:text-lg leading-snug">
            {faq.question}
          </span>

          {/* ROTATING ICON */}
          <ChevronDown
            className={`text-[#F875AA] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={22}
          />
        </button>

        {/* ANSWER */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  })}
</div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < filteredFaqs.length && (
        <div className="flex justify-center mt-10">
          <span
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="text-gray-600 text-sm md:text-base font-medium cursor-pointer hover:text-[#F875AA] transition"
          >
            Show more FAQs →
          </span>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-12 px-6">
        <p className="text-gray-600 mb-4">
          {`Still have questions? We're here to help.`}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact-us"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow hover:scale-105 transition"
          >
            Book Consultation
          </a>

          <a
            href="https://wa.me/919035153096"
            target="_blank"
            className="px-6 py-3 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
