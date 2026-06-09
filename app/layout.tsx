import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
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
  title: "Thanaphat Poolthrap | Software Engineer Portfolio",

  description:
    "Thanaphat Poolthrap (ธนภัทร พูลทรัพย์) is a Computer Engineering student and aspiring Software Engineer specializing in backend development. Explore projects, technical skills, and experience.",

  keywords: [
    "Thanaphat Poolthrap",
    "ธนภัทร พูลทรัพย์",
    "Software Engineer",
    "Backend Developer",
    "Computer Engineering",
    "Portfolio",
    "FastAPI",
    "Flutter",
    "Python",
    "C#",
    "Web Development",
  ],

  authors: [{ name: "Thanaphat Poolthrap" }],
  creator: "Thanaphat Poolthrap",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Thanaphat Poolthrap | Software Engineer Portfolio",
    description:
      "Computer Engineering student and aspiring Software Engineer specializing in backend development.",
    url: "https://thanaphat-portfolio.vercel.app",
    siteName: "Thanaphat Poolthrap Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thanaphat Poolthrap | Software Engineer Portfolio",
    description: "Computer Engineering student and aspiring Software Engineer.",
  },

  alternates: {
    canonical: "https://thanaphat-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
