import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#091D5E]/90 via-[#0F2D8A]/70 to-[#0F2D8A]/40" />
      <div className="container-custom relative z-10 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6 tracking-tight">
            Expert Transport Consultancy in Central Europe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            20 years. 20+ countries. Hundreds of major projects.
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
      </div>
    </section>
  );
}
