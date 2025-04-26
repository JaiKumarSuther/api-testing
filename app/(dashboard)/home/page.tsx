'use client';
import Footer from "@/components/Footer";
import GiveFeedback from "@/components/GiveFeedback";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, [mount]);

  if(!mount) {
    return;
  }
  return (
    <div>
      {
        showFeedbackForm && (
          <GiveFeedback onClose={() => setShowFeedbackForm(false)}/>
        )
      }
      <HeroSection/>
      <HowItWorks/>
      <Testimonials/>
    </div>
  );
}
