import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ETC Polska",
  description: "Learn about ETC Polska's 20+ years of transport consultancy experience across Europe, Middle East, and beyond.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-display font-extrabold mb-4">About</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            20+ years of transport and traffic planning for developers and the public sector.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose-custom space-y-6">
            <p className="text-lg">
              <strong>ETC Polska</strong> (European Transportation Consultancy) is a Warsaw-based consultancy specializing in traffic and transport planning for development projects. The company has operated since <strong>2002</strong> and has delivered work in <strong>20+ countries</strong>, mainly in Central Europe, the Middle East, and the Russian Federation.
            </p>
            <p>
              Clients include <strong>developers, architects, and public institutions</strong>. We support retail, residential, office, logistics, mixed-use, public transport, and infrastructure schemes — from early advice through to detailed planning inputs.
            </p>
            <p>
              Our team brings deep expertise in traffic modeling, access design, parking strategy, public transport integration, and infrastructure planning. We understand the commercial drivers of development and design solutions that meet planning requirements while supporting project viability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { num: "2002", label: "Established" },
              { num: "20+", label: "Countries" },
              { num: "500+", label: "Projects" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#EEF2F8] rounded-xl p-6 text-center">
                <div className="text-4xl font-display font-extrabold text-[#0F2D8A] mb-2">{stat.num}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
