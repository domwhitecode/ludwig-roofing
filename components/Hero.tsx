import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:py-24 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Philadelphia, PA
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Philadelphia&apos;s Trusted{" "}
            <span className="text-brand">Roofing & Exteriors</span> Contractor
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Roofing, siding, exterior painting, custom metal, and gutters — done right
            the first time. Locally owned, fully insured, and obsessed with quality
            craftsmanship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+12673280819" className="btn-secondary">
              Call 267-328-0819
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <CheckIcon /> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Free Estimates
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Locally Owned
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl bg-white p-10 shadow-xl ring-1 ring-slate-100 sm:p-12">
            <Image
              src="/ludwigs_logo_minimal.svg"
              alt="Ludwig's Roofing & Exteriors logo"
              width={800}
              height={800}
              className="h-auto w-full max-w-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
