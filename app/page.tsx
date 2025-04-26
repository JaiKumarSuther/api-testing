"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HowItWorks/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
