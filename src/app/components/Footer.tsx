import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/TravelDentist_logo.png';

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-pink-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Clinic Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={210}
                height={210}
                className="object-contain w-[100px] h-auto md:w-[210px]"
              />
            </Link>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-[#F875AA]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#F875AA] transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#F875AA] transition">About Us</Link></li>
              {/* <li><Link href="/services" className="hover:text-[#F875AA] transition">Services</Link></li> */}
              <li><Link href="/contact-us" className="hover:text-[#F875AA] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-pink-600">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/gum-disease-treatment" className="hover:text-[#F875AA] transition">Gum Disease Treatment</Link></li>
              <li><Link href="/dental-implants" className="hover:text-[#F875AA] transition">Dental Implants</Link></li>
              <li><Link href="/full-mouth-rehabilitation" className="hover:text-[#F875AA] transition">Full mouth rehabilitation</Link></li>
              <li><Link href="/laser-dentistry" className="hover:text-[#F875AA] transition">Laser Dentistry</Link></li>
              <li><Link href="/dental-tourism" className="hover:text-[#F875AA] transition">Dental Tourism</Link></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Clinic Locations in two columns */}
            <div>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Our Locations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                {/* Location 1 */}
                <div>
                  <p className="font-medium">SK Dental Clinic</p>
                  <p>Salem Church Building</p>
                  <p>Chingavanam, Kottayam</p>
                </div>

                {/* Location 2 */}
                <div>
                  <p className="font-medium">Perio Center</p>
                  <p>Muttambalam P.O.</p>
                  <p>Kottayam</p>
                </div>
              </div>
            </div>

            {/* Shared Contact Details */}
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-medium">Phone:</span> +91-9035153096</p>
              <p><span className="font-medium">Email:</span> traveldentist.in@gmail.com</p>
            </div>

            {/* Button */}
            <Link
              href="/contact-us"
              className="bg-[#F875AA] hover:bg-[#F875AA]/90 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Book Appointment
            </Link>
          </div>


        </div>

        {/* Copyright */}
        <div className="border-t border-pink-200 mt-8 pt-6 text-center text-sm text-pink-600">
          <p>© {new Date().getFullYear()} Travel Dentist. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-[#F875AA] transition">Privacy Policy</Link>
            <Link href="/terms-service" className="hover:text-[#F875AA] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;