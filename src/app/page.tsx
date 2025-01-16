"use client";
import ClientReviewsSection from "@/components/sections/ClientReviewsSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <Services />
      <ClientReviewsSection />
    </>
  );
}
