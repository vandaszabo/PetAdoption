import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Adopt-a-Pal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
