import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen min-w-full bg-gray-100 text-black">
        {children}
      </main>
      <Footer />
    </div>
  );
}
