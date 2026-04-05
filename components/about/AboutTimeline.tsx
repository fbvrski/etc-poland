const careerTimeline = [
  {
    period: "2000 – 2002",
    title: "NOW Architectural Bureau",
    role: "Architect's assistant",
    description:
      "Design support for shopping and logistics centres, residential developments, and a university library.",
  },
  {
    period: "2002",
    title: "ETC Polska founded",
    role: "European Transportation Consultancy",
    description:
      "Polish-registered consultancy operating under Polish law and taxation; focus on transport planning for development.",
  },
  {
    period: "2002 – 2003",
    title: "DWP Polska",
    role: "Junior engineer",
    description: "Assisting in the design of shopping centres.",
  },
  {
    period: "2003 – present",
    title: "ETC Polska",
    role: "Chief Executive & Technology Officer",
    description:
      "Overall technical and financial control. Work spans shopping, logistics and office centres, office assessments, residential schemes, transportation hubs, and BREEAM Green Travel Plans — projects across Europe and further afield.",
  },
];

export default function AboutTimeline() {
  return (
    <>
      <section className="section section-muted">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-gray-900">Team & approach</h2>
          <div className="prose-custom space-y-4">
            <p>
              Together with our sister company, we employ <strong>17 people</strong>, of whom{" "}
              <strong>15 are in technical roles</strong>. We do not aim to be the largest firm in the field, but to be
              recognised among the <strong>best in the segments where we operate</strong>. Growth in headcount is kept
              deliberate so that <strong>service quality stays high and keeps improving</strong>.
            </p>
            <p>
              <strong>ETC Polska</strong> is a Polish registered company. Staff are Polish nationals or of Polish origin;
              many have been with ETC for years. Where projects are intermittent, the same individuals may not always be
              available throughout, but we align continuity with project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-10 font-display text-3xl font-extrabold text-gray-900">Leadership</h2>

          <div className="space-y-10">
            <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 bg-gradient-to-r from-[#EEF2F8] to-white px-8 py-6 md:px-10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E7DE0]">Chief Executive & CTO</p>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-gray-900">Darek Laniewski</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Overall control of financial and technical aspects; experience on projects across Europe and beyond for
                  over 20 years.
                </p>
              </div>
              <div className="grid gap-8 px-8 py-8 md:grid-cols-[1fr,auto] md:items-start md:px-10">
                <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-gray-500">Qualifications</dt>
                    <dd className="mt-1 font-medium text-gray-900">
                      Master of Architecture · Civil Engineer · IT Engineer
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Based</dt>
                    <dd className="mt-1 font-medium text-gray-900">Poland</dd>
                  </div>
                </dl>
                <div className="flex flex-col gap-2 text-sm text-gray-700 md:text-right">
                  <a href="tel:+48228240353" className="font-medium text-[#0F2D8A] hover:underline">
                    +48 22 824 03 53
                  </a>
                  <a href="tel:+48698835178" className="font-medium text-[#0F2D8A] hover:underline">
                    +48 698 835 178
                  </a>
                  <a href="mailto:dlaniewski@etcpolska.com" className="font-medium text-[#2E7DE0] hover:underline">
                    dlaniewski@etcpolska.com
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-[#F8FAFC] px-8 py-6 md:px-10">
              <h3 className="font-display text-lg font-bold text-gray-900">Magda Kruszewska</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Supports administrative and financial matters alongside the CEO. <strong>English and Russian</strong>{" "}
                speaker.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section border-t border-gray-200 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-2 font-display text-3xl font-extrabold text-gray-900">Experience timeline</h2>
          <p className="mb-12 max-w-2xl text-sm text-gray-600">
            Key milestones for Darek Laniewski and the growth of ETC Polska.
          </p>

          <div className="relative">
            <div
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#2E7DE0]/50 via-gray-200 to-gray-200 md:left-[11px]"
              aria-hidden
            />

            <ol className="relative space-y-0">
              {careerTimeline.map((item) => (
                <li key={item.period + item.title} className="relative pb-12 pl-10 last:pb-0 md:pl-14">
                  <span
                    className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-[3px] border-white bg-[#2E7DE0] shadow-sm ring-1 ring-[#2E7DE0]/30 md:left-1 md:top-2 md:h-5 md:w-5"
                    aria-hidden
                  />
                  <div className="rounded-xl border border-gray-100 bg-[#F8FAFC]/80 px-5 py-5 shadow-sm backdrop-blur-sm md:px-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2E7DE0]">{item.period}</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-700">{item.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
