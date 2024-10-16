import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Script from "next/script"; // Import Next.js Script component

export const metadata: Metadata = {
  title: "Adopt-a-Pal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {

  return (
    <SessionWrapper>
      <html lang="en">
          <head>
          {/* Add Google Analytics Script */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-C05HL0TPYF`}
            strategy="afterInteractive" // Load after page is interactive
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C05HL0TPYF', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </head>
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
