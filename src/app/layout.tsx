import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://traveldentist.in"),

  title: {
    default: "Travel Dentist | Dental Tourism in Kerala, India",
    template: "%s | Travel Dentist India",
  },

  description:
    "Travel Dentist offers affordable dental treatments in Kerala, India for international patients. Clinics in Kottayam, Kanzhikuzhi and Chingavanam.",

  keywords: [
    "travel dentist",
    "travel dentist india",
    "travel dentist kerala",
    "dentist in kottayam",
    "dental clinic kottayam",
    "dentist kanzhikuzhi",
    "dentist chingavanam",
    "dental tourism india",
    "dentist in india for foreigners",
    "affordable dental implants india",
    "cosmetic dentistry kerala",
    "best dental clinic india",
    "dental care for nri patients india",
  ],

  authors: [{ name: "Travel Dentist" }],
  creator: "Travel Dentist",
  publisher: "Travel Dentist",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://traveldentist.in",
    languages: {
      "en-IN": "https://traveldentist.in",
      "en-US": "https://traveldentist.in",
      "en-GB": "https://traveldentist.in",
    },
  },

  // 🌍 GEO + LOCAL SEO
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kottayam",
    "geo.position": "9.5916;76.5222",
    ICBM: "9.5916, 76.5222",
  },

  openGraph: {
    title: "Dental Tourism in Kerala, India | Travel Dentist",
    description:
      "Affordable dental care in Kerala for international patients with modern treatments.",
    url: "https://traveldentist.in",
    siteName: "Travel Dentist",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/TravelDentist_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Travel Dentist Kerala India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Dentist Kerala India",
    description:
      "Affordable dental tourism in Kerala for international patients.",
    images: ["/TravelDentist_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* 🧬 STRUCTURED DATA (VERY IMPORTANT) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Travel Dentist",
              url: "https://traveldentist.in",
              telephone: "+91-9035153096",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kottayam",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              areaServed: [
                "India",
                "United States",
                "United Kingdom",
                "Canada",
                "Australia",
                "United Arab Emirates",
                "Saudi Arabia",
                "Qatar",
                "Oman",
                "Kuwait",
                "Bahrain",
                "Germany",
                "France",
                "Italy",
                "Netherlands",
                "Singapore",
                "Malaysia",
                "South Africa",
              ],
              // sameAs: [
              //   "https://www.facebook.com/",
              //   "https://www.instagram.com/",
              // ],
            }),
          }}
        />
      </body>
    </html>
  );
}