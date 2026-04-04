import Hero from "@/components/home/Hero";
import AboutServicesSection from "@/components/home/AboutServicesSection";
import StatsBar from "@/components/home/StatsBar";
import ProjectsFeatured from "@/components/home/ProjectsFeatured";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutServicesSection />
      <StatsBar />
      <ProjectsFeatured />
    </main>
  );
}
