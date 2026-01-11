"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CurrentModules from "@/components/current-modules";
import ProposedModules from "@/components/proposed-modules";
import CoCurricularActivities from "@/components/co-curricular-activities";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import AcademicCurriculumSection from "@/components/Academiccurriculum";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <AcademicCurriculumSection />
      <CurrentModules />
      {/* <ProposedModules /> */}
      <CoCurricularActivities />
      {/* <CTA /> */}
      {/* <Footer /> */}
    </div>
  );
}
