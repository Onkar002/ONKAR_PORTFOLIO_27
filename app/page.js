"use client";

import { useEffect, useState } from "react";

import Loder from "./components/Loder";

import Hero from "./components/Hero";
import BeliefSection from "./components/BeliefSection";
import ProfessionalStatistics from "./components/ProfessionalStatistics";
import IdentitySequence from "./components/IdentitySequence";
import InfiniteTextSection from "./components/InfiniteTextSection";
import StickyCard from "./components/StickyCard";
import EcoayatemMarqee from "./components/EcoayatemMarqee";
import PinCards from "./components/PinCards";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import CertificationHero from "./components/CertificationHero";


import MyWorkflow from "./components/MyWorkflow";
import CTASection from "./components/CTASection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loder />;
  }

  return (
    <main className="flex flex-col bg-zinc-50 dark:bg-black">
      <Hero />
      <BeliefSection />
      <ProfessionalStatistics />
      {/* <IdentitySequence /> */}
      <InfiniteTextSection />
      <StickyCard />
      <PinCards />
      <EcoayatemMarqee/>
      <Projects />
      <ExperienceSection />
      <CertificationHero />
     
      <MyWorkflow/>
      <CTASection />
    </main>
  );
}