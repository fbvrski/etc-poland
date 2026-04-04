export default function StatsBar() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "20+", label: "Countries Served" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Major Retail Schemes" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
