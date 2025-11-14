import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Ahmed Youssry - Full Stack Developer",
  description: "Full Stack Developer with 2 years of experience building web applications from planning to deployment. Specialized in Clean Architecture, scalable systems, and modern web technologies.",
  openGraph: {
    title: "Ahmed Youssry - Full Stack Developer",
    description: "Full Stack Developer with 2 years of experience building web applications from planning to deployment. Specialized in Clean Architecture, scalable systems, and modern web technologies.",
    url: "https://ahmed-youssry.site/", // Replace with your actual domain when deployed
    siteName: "Ahmed Youssry Portfolio",
    images: [
      {
        url: 'https://ahmed-youssry.site/Capture.PNG', // Your image path in public folder
        width: 1200,
        height: 630,
        alt: 'Ahmed Youssry - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ahmed Youssry - Full Stack Developer",
    description: "Full Stack Developer with 2 years of experience building web applications from planning to deployment.",
    images: ['/Capture.PNG'], // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9JGYFDM0MX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9JGYFDM0MX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
