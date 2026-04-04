import Link from "next/link";
import Hero from "@/components/home/Hero";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsBar from "@/components/home/StatsBar";
import ProjectsFeatured from "@/components/home/ProjectsFeatured";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <ServicesPreview />
      <StatsBar />
      <ProjectsFeatured />
      <ContactCTA />
    </main>
  );
}
