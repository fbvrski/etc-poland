import Link from "next/link";
import HeroSiteAssembly from "@/components/home/HeroSiteAssembly";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden text-white">
      {/* No stock photo — gradient + technical grid (infrastructure / planning feel) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d2e] via-[#091D5E] to-[#0c2870]" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#050d2e]/95 via-[#091D5E]/75 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#050d2e]/85 via-transparent to-[#050d2e]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[min(80vw,560px)] w-[min(80vw,560px)] -translate-y-1/2 rounded-full bg-[#2E7DE0]/15 blur-3xl"
        aria-hidden
      />

      <div className="container-custom relative z-10 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7EB6FF]">
              European Transportation Consultancy
            </p>
            <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Expert Transport Consultancy in Central Europe
            </h1>
            <p className="mb-3 text-xl leading-relaxed text-white/90 md:text-2xl">
              20 years. 20+ countries. Hundreds of major projects.
            </p>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Parking layouts, access roads, and junction design — mainly for retail, logistics, and mixed-use
              schemes. Based in <strong className="font-semibold text-white/85">Poland</strong>, supporting
              developers across <strong className="font-semibold text-white/85">Central Europe</strong> and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary btn-lg">
                Explore Our Projects
              </Link>
              <Link href="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>

          <HeroSiteAssembly />
        </div>
      </div>
    </section>
  );
}
