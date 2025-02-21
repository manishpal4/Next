import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const f1 = localFont({
  src: [
    {
      path: "./font/f1.ttf", // Relative path from layout.tsx
      weight: "400",
    },
  ],
  variable: "--font-f1",
  display: "swap",
});

const f2 = localFont({
  src: [
    {
      path: "./font/f2.ttf", // Relative path from layout.tsx
      weight: "400",
    },
  ],
  variable: "--font-f2",
  display: "swap",
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mani",
  description: "Portfolio of Mani which shows the work of manish who is Graphic Designer, Web Developer, Video Editor and Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/1.ico" type="image/x-icon" />
      </head>
      <body
        className={`${f1.variable} ${f2.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
>       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
