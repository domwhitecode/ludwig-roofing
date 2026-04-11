const points = [
  {
    title: "Locally Owned & Operated",
    desc: "Born and raised in Philadelphia. We know the rowhomes, the weather, and what your roof has to put up with.",
  },
  {
    title: "Licensed & Fully Insured",
    desc: "Every job is backed by full liability and workers' comp insurance — your property and our crew are protected.",
  },
  {
    title: "Free, No-Pressure Estimates",
    desc: "We show up, take a look, and give you a clear written estimate. No high-pressure sales tactics, ever.",
  },
  {
    title: "Quality Craftsmanship",
    desc: "We use premium materials, do clean prep work, and treat every home like it's our own. The details matter.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Philadelphia Homeowners Choose Ludwig&apos;s
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;re a small, focused crew that takes pride in every job we sign.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
