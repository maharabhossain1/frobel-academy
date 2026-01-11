"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import CurrentModules from "@/components/current-modules";
import CoCurricularActivities from "@/components/co-curricular-activities";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import AcademicCurriculumSection from "@/components/Academiccurriculum";
import NewsAndCSR from "@/components/NewsAndCSR";
import WhyFrobel from "@/components/features";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyFrobel />
      <AcademicCurriculumSection />
      <CurrentModules />
      <NewsAndCSR />

      {/* <CoCurricularActivities /> */}
      {/* <CTA /> */}
      <GetInTouch />
      <Footer />
    </div>
  );
}
