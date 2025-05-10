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
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt size={24} />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-white/90">
                    127 Ivy Road, Norwood,<br />
                    Johannesburg, South Africa, 2192
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-white/90">Traveldentist@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt size={24} />
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p className="text-white/90">+91-0000-000-000</p>
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
    </div>
  );
}
