import Link from "next/link";

export default function StatsBar() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "20+", label: "Countries Served" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Major Retail Schemes" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071338] py-16 pb-24 text-white md:py-20 md:pb-28">
      {/* Subtle grid + accent — ties to technical / infrastructure feel */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-1/2 z-0 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 rounded-full bg-[#2E7DE0]/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-0 z-0 h-64 w-64 rounded-full bg-[#0F2D8A]/40 blur-3xl" aria-hidden />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#2E7DE0]" aria-hidden />
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Scale you can rely on
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Two decades of transport planning and development advice — delivered across borders and project types.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm md:px-5 md:py-9"
            >
              <div className="mb-2 font-display text-4xl font-extrabold tabular-nums tracking-tight text-white md:text-5xl">
                {stat.number}
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-white/65 md:text-sm md:normal-case md:tracking-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl border-t border-white/10 pt-12 text-center md:mt-14 md:pt-14">
          <p className="mb-6 text-sm text-white/75">
            See selected schemes, studies, and retail-led developments we have supported.
          </p>
          <Link
            href="/projects"
            className="btn btn-lg inline-flex border-2 border-white/80 bg-white/[0.08] px-8 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#0F2D8A]"
          >
            Check projects
          </Link>
        </div>
      </div>

      {/* Ease into footer blue — avoids a hard cut from grid to solid */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-b from-transparent via-[#0F2D8A]/35 to-[#0F2D8A] md:h-44"
        aria-hidden
      />
    </section>
  );
}
