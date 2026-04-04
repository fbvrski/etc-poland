import Link from "next/link";

export default function AboutIntro() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "20+", label: "Countries" },
    { number: "500+", label: "Projects Delivered" },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#2E7DE0] mb-3">Who We Are</p>
            <h2 className="text-4xl font-display font-extrabold mb-6">
              European Transportation Consultancy
            </h2>
            <div className="prose-custom space-y-4 mb-8">
              <p>
                Since 2002, <strong>ETC Polska</strong> has supported developers, architects, and public institutions with expert traffic and transport planning. We have delivered projects across <strong>20+ countries</strong>, specializing in retail, residential, office, logistics, and mixed-use developments.
              </p>
              <p>
                Our team provides strategic advice from early site selection through to detailed planning and infrastructure design.
              </p>
            </div>
            <Link href="/about" className="btn btn-secondary">
              Learn more about us
            </Link>
          </div>

          <div className="grid gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-display font-extrabold text-[#0F2D8A] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
