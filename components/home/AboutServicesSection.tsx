import Image from "next/image";
import Link from "next/link";

function IconScope({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconFlow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 16c3 0 3-5 6-5s3 5 6 5M4 8c3 0 3 5 6 5s3-5 6-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12l9 4.5L21 12M3 16.5 12 21l9-4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    Icon: IconScope,
    title: "Development Advice",
    excerpt: "Early-stage site selection, feasibility studies, and transport strategy.",
    url: "/services",
  },
  {
    Icon: IconFlow,
    title: "Traffic & Transport Planning",
    excerpt: "Detailed traffic modeling, access design, parking, and public transport integration.",
    url: "/services",
  },
  {
    Icon: IconLayers,
    title: "Infrastructure Design",
    excerpt: "Road layouts, junctions, pedestrian zones, and delivery areas.",
    url: "/services",
  },
];

const cardClass =
  "rounded-xl border border-gray-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md";

export default function AboutServicesSection() {
  return (
    <section className="bg-[#F4F6FA] py-16 md:py-24">
      <div className="container-custom">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="flex min-h-0 flex-col">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#2E7DE0]">Who We Are</p>
            <h2 className="mb-3 font-display text-4xl font-extrabold text-gray-900">
              European Transportation Consultancy
            </h2>
            <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-gray-500">
              Expert consultancy from site selection to detailed transport planning.
            </p>
            <div className="prose-custom mb-8">
              <p>
                Since 2002, <strong>ETC Polska</strong> has supported developers, architects, and public institutions with
                expert traffic and transport planning. We have delivered projects across{" "}
                <strong>20+ countries</strong>, specializing in retail, residential, office, logistics, and mixed-use
                developments.
              </p>
            </div>
            <Link href="/about" className="btn btn-secondary mb-10 w-fit">
              Learn more about us
            </Link>
            <figure className="relative mt-auto min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-gray-200/90 shadow-md ring-1 ring-black/[0.04] sm:min-h-[260px] lg:min-h-[300px]">
              <Image
                src="/images/about-highway-night.jpg"
                alt="Night aerial view of a highway interchange with light trails — infrastructure, flow, and junction complexity similar to our transport planning work."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
              {/* Pull toward brand blues (reference: teal/blue graded interchange photography) */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#091D5E]/35 via-transparent to-[#0F2D8A]/25 mix-blend-soft-light"
                aria-hidden
              />
            </figure>
          </div>

          <div className="lg:pl-2">
            <p className="mb-6 text-sm font-bold uppercase tracking-wider text-[#2E7DE0]">Services</p>
            <div className="flex flex-col gap-4">
              {services.map(({ Icon, title, excerpt, url }, i) => (
                <article key={i} className={cardClass}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF2F8] text-[#0F2D8A]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{excerpt}</p>
                  <Link href={url} className="text-sm font-semibold text-[#0F2D8A] hover:underline">
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
