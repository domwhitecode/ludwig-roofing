import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import PhotoCarousel from "@/components/PhotoCarousel";
import ReviewCTA from "@/components/ReviewCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PhotoCarousel />
      <WhyUs />
      <ReviewCTA />

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Proudly Serving Philadelphia & Surrounding Areas
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Ludwig&apos;s Roofing & Exteriors serves homeowners across Philadelphia,
              including Center City, Fishtown, Northern Liberties, South Philly,
              Manayunk, Roxborough, the Northeast, and the surrounding suburbs in
              Bucks, Montgomery, and Delaware Counties. If you&apos;re in the area,
              we&apos;d love to take a look at your project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand">
        <div className="container-page py-14 md:py-16">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready for a free estimate?
              </h2>
              <p className="mt-2 text-lg text-blue-100">
                Tell us about your project and we&apos;ll be in touch within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition hover:bg-slate-100"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+12673280819"
                className="inline-flex min-h-11 min-w-[12rem] items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
