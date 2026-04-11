const services = [
  {
    title: "Roofing",
    desc: "Full roof replacement, repairs, leak diagnostics, and inspections for residential and commercial properties throughout Philadelphia.",
    icon: RoofIcon,
  },
  {
    title: "Siding",
    desc: "Vinyl, fiber cement, and wood siding installation that protects your home and boosts curb appeal.",
    icon: SidingIcon,
  },
  {
    title: "Exterior Painting",
    desc: "Long-lasting exterior paint jobs with proper prep work, premium materials, and clean job sites.",
    icon: PaintIcon,
  },
  {
    title: "Custom Metal",
    desc: "Custom metal fabrication, standing seam roofing, flashing, and architectural metalwork built to last.",
    icon: MetalIcon,
  },
  {
    title: "Gutters",
    desc: "Seamless gutter installation, repair, and gutter guard systems that keep water away from your foundation.",
    icon: GutterIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything Your Home&apos;s Exterior Needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From the roof down to the gutters, Ludwig&apos;s handles it all — under one
            licensed, insured, locally owned crew.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.icon />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoofIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SidingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M3 10h18M3 14h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
function PaintIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 7l-9 9-3 3v-3l9-9zM14 4l6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MetalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20l4-16M10 20l4-16M16 20l4-16" strokeLinecap="round" />
    </svg>
  );
}
function GutterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h18v4a2 2 0 01-2 2H5a2 2 0 01-2-2V8zM7 14v6M17 14v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
