'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
// ✅ Dynamically import Lottie only on the client
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import loaderAnimation from '../../../public/loader.json';
import dynamic from 'next/dynamic';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^\+?\d+$/, 'Invalid phone number'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const res = await fetch('/api/contactUs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success('Message sent successfully!', { id: toastId });
        reset();
      } else {
        toast.error('Failed to send message.', { id: toastId });
      }
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong.', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div className="flex items-center justify-center h-screen bg-white">
      <Lottie animationData={loaderAnimation} loop={true} className="w-52 h-52" />
    </div>
  ) : (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Toaster position="top-center" />
      <div className="h-30 md:h-70" />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#F875AA]">CONTACT US</h1>
      </div>

      {/* Contact Section */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="bg-[#F875AA] text-white rounded-2xl p-8 flex-1 shadow-md">
            <div className="space-y-8 text-lg">
              {/* Addresses */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt size={24} />
                <div>
                  <h3 className="font-bold">Our Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-white/90 text-sm mt-2">
                    {/* Location 1 */}
                    <div>
                      <p className="font-semibold">SK Dental Clinic</p>
                      <p>Salem Church Building</p>
                      <p>Chingavanam, Kottayam</p>
                    </div>

                    {/* Location 2 */}
                    <div>
                      <p className="font-semibold">Perio Center</p>
                      <p>Muttambalam P.O.</p>
                      <p>Kottayam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-white/90">traveldentist.in@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt size={24} />
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p className="text-white/90">+91-9035153096</p>
                </div>
              </div>
            </div>
          </div>


          {/* Contact Form */}
          <div className="bg-[#F875AA] text-white rounded-2xl p-8 flex-1 shadow-md relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Let&apos;s Connect</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register('name')}
                  placeholder="Name"
                  className="w-full rounded-md px-4 py-2 bg-white text-gray-800 placeholder-[#F875AA] shadow focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.name && <p className="text-white text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email')}
                  placeholder="Email"
                  type="email"
                  className="w-full rounded-md px-4 py-2 bg-white text-gray-800 placeholder-[#F875AA] shadow focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.email && <p className="text-white text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone')}
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full rounded-md px-4 py-2 bg-white text-gray-800 placeholder-[#F875AA] shadow focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.phone && <p className="text-white text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-md px-4 py-2 bg-white text-gray-800 placeholder-[#F875AA] shadow focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.message && <p className="text-white text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-[#F875AA] font-bold py-2 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
            {/* WhatsApp Floating Button */}
            <a
        href="https://wa.me/919035153096" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="bg-[#25D366] hover:bg-green-500 rounded-full p-3 shadow-lg transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.81 11.81 0 0 0-8.42-3.48c-6.56 0-11.9 5.34-11.9 11.9a11.8 11.8 0 0 0 1.64 6.08L.01 24l5.26-1.39a11.8 11.8 0 0 0 6.83 2.1c6.56 0 11.9-5.34 11.9-11.9a11.84 11.84 0 0 0-3.48-8.43zm-8.42 20.18a10.27 10.27 0 0 1-5.54-1.61l-.4-.24-3.11.83.83-3.04-.26-.44a10.33 10.33 0 0 1-1.62-5.57c0-5.7 4.64-10.33 10.33-10.33a10.27 10.27 0 0 1 7.32 3.03 10.27 10.27 0 0 1 3.03 7.32c0 5.7-4.64 10.33-10.33 10.33zm5.97-7.75c-.26-.13-1.53-.75-1.77-.83-.24-.09-.42-.13-.6.13s-.69.83-.85 1-.31.2-.57.07a8.42 8.42 0 0 1-2.49-1.54 9.2 9.2 0 0 1-1.71-2.12c-.18-.31-.02-.48.14-.61.14-.13.31-.35.48-.52.17-.17.22-.3.35-.52.13-.22.07-.4 0-.52-.07-.13-.61-1.48-.84-2.03-.22-.52-.43-.45-.6-.45-.17 0-.35 0-.52 0s-.48.07-.73.35c-.26.26-1 1-1 2.43s1.02 2.82 1.17 3.02c.13.17 2.01 3.06 4.87 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.53-.63 1.74-1.25.21-.61.21-1.13.15-1.25-.07-.13-.24-.2-.5-.33z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
