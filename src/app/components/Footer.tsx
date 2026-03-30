// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../../public/TravelDentist_logosvg.svg";
// import WhatsAppButton from "./Whatsapp";
// import T from "../../../public/T.svg";
// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-pink-50 to-white text-gray-700 mt-16 border-t border-pink-100">
//       {/* TOP CTA STRIP */}
//       <div className="bg-pink-500 text-white text-center py-6 px-4">
//         <h3 className="text-xl md:text-2xl font-semibold">
//           Start Your Smile Journey Today 😁
//         </h3>
//         <p className="text-sm mt-1">
//           Book your consultation & save up to 70% on treatments
//         </p>
//         <Link
//           href="/contact-us"
//           className="inline-block mt-3 bg-white text-pink-500 px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
//         >
//           Book Now
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* LOGO + DESC */}
//           <div className=" grid grid-cols-2 md:grid-cols-1 gap-10space-y-4">
//             <Image src={logo} alt="Logo" width={110} />

//             <Image
//               src={T}
//               alt="Center Logo"
//               width={110}
//             />
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h4 className="font-semibold text-[#F875AA] mb-3">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about-us">About</Link>
//               </li>
//               <li>
//                 <Link href="/contact-us">Contact</Link>
//               </li>
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h4 className="font-semibold text-[#F875AA] mb-3">Treatments</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/dental-implants">Dental Implants</Link>
//               </li>
//               <li>
//                 <Link href="/laser-dentistry">Laser Dentistry</Link>
//               </li>
//               <li>
//                 <Link href="/gummy-smile-correction">Gummy Smile</Link>
//               </li>
//               <li>
//                 <Link href="/full-mouth-rehabilitation">Full Mouth Rehab</Link>
//               </li>
//               <li>
//                 <Link href="/dental-tourism">Dental Tourism</Link>
//               </li>
//             </ul>
//           </div>

//           {/* LOCATIONS + CONTACT */}
//           <div>
//             <h4 className="font-semibold text-[#F875AA] mb-3">Our Clinics</h4>

//             <div className="space-y-3 text-sm">
//               {/* Clinic 1 */}
//               <div>
//                 <p className="font-medium">SK Dental Clinic</p>
//                 <p>Chingavanam, Kottayam</p>
//               </div>

//               {/* Clinic 2 */}
//               <div>
//                 <p className="font-medium">Perio Center</p>
//                 <p>Muttambalam, Kottayam</p>
//               </div>

//               {/* Clinic 3 (DUMMY) */}
//               <div>
//                 <p className="font-medium">Smile Care Dental</p>
//                 <p>Kakkanad, Kochi</p>
//               </div>
//             </div>

//             {/* CONTACT */}
//             <div className="mt-4 text-sm space-y-1">
//               <p>📞 +91-9035153096</p>
//               <p>✉️ traveldentist.in@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="border-t border-pink-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>
//             © {new Date().getFullYear()} Travel Dentist. All rights reserved.
//           </p>

//           <div className="flex gap-4 mt-2 md:mt-0">
//             <Link href="/privacy-policy">Privacy Policy</Link>
//             <Link href="/terms-service">Terms of Service</Link>
//           </div>
//         </div>
//       </div>

//       <WhatsAppButton />
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/TravelDentist_logosvg.svg";

import T from "../../../public/T.svg";
import WhatsAppButton from "./Whatsapp";

const Footer = () => {
  return (
    <footer className="relative pt-5 text-gray-700">
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50 -z-10" />

      {/* TOP CTA */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Transform Your Smile with Expert Care 😁
        </h2>
        <p className="text-gray-500 mt-2">
          Trusted by patients worldwide. Save up to 70% on dental treatments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Free Consultation
          </Link>

          <a
            href="tel:+919035153096"
            className="border border-pink-400 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-pink-100 rounded-2xl shadow-lg py-4 px-6 flex flex-col sm:flex-row justify-around items-center gap-4 text-sm text-gray-600">
        <span>⭐ 1000+ Happy Patients</span>
        <span>🌍 International Patients</span>
        <span>🦷 Advanced Technology</span>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO */}
        <div className=" grid grid-cols-2 md:grid-cols-1 gap-10space-y-4">
          <Image src={logo} alt="Logo" width={110} />

          <Image src={T} alt="Center Logo" width={110} />
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold text-[#F875AA] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-[#F875AA] mb-3">Treatments</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/dental-implants">Dental Implants</Link>
            </li>
            <li>
              <Link href="/laser-dentistry">Laser Dentistry</Link>
            </li>
            <li>
              <Link href="/gummy-smile-correction">Gummy Smile</Link>
            </li>
            <li>
              <Link href="/full-mouth-rehabilitation">Full Mouth Rehab</Link>
            </li>
            <li>
              <Link href="/dental-tourism">Dental Tourism</Link>
            </li>
          </ul>
        </div>

{/* LOCATIONS */}
<div>
  <h4 className="font-semibold text-[#F875AA] mb-4 text-lg">
    Our Clinics
  </h4>

  <div className="space-y-3 text-sm text-gray-600">

    <div className="hover:text-[#F875AA] transition">
      <p className="font-medium text-gray-800">SK Dental Clinic</p>
      <p>Chingavanam, Kottayam</p>
    </div>

    <div className="hover:text-[#F875AA] transition">
      <p className="font-medium text-gray-800">Perio Center</p>
      <p>Muttambalam, Kottayam</p>
    </div>

    <div className="hover:text-[#F875AA] transition">
      <p className="font-medium text-gray-800">Smile Care Dental</p>
      <p>Kakkanad, Kochi</p>
    </div>

  </div>

  {/* CONTACT */}
  <div className="mt-6 text-sm text-gray-600 space-y-1">
    <p className="hover:text-[#F875AA] transition">
      📞 +91-9035153096
    </p>
    <p className="hover:text-[#F875AA] transition">
      ✉️ traveldentist.in@gmail.com
    </p>
  </div>
</div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-pink-100 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Travel Dentist. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-service">Terms</Link>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
