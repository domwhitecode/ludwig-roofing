import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request a Free Roofing Quote",
  description:
    "Request a free estimate from Ludwig's Roofing & Exteriors in Philadelphia. Roofing, siding, painting, gutters, and custom metal. Call 267-328-0819 or fill out our form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Request a Free Quote
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Tell us a little about your project and we&apos;ll get back to you within
            one business day.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Prefer to call?</h2>
              <p className="mt-1 text-sm text-slate-600">
                We&apos;re happy to chat through your project over the phone.
              </p>
              <a href="tel:+12673280819" className="btn-primary mt-4 w-full">
                267-328-0819
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Email</h2>
              <a
                href="mailto:Eludwig1126@gmail.com"
                className="mt-1 block break-all text-sm text-brand hover:underline"
              >
                Eludwig1126@gmail.com
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Hours</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Service Area</h2>
              <p className="mt-1 text-sm text-slate-600">
                Philadelphia and surrounding Bucks, Montgomery, and Delaware Counties.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
