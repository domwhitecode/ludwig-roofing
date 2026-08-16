import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const reviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL;
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Ludwig&apos;s Roofing & Exteriors</h3>
          <p className="mt-2 text-sm text-slate-600">
            Philadelphia&apos;s trusted contractor for roofing, siding, exterior painting,
            custom metal, and gutters.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="tel:+12673280819" className="hover:text-brand">
                267-328-0819
              </a>
            </li>
            <li>
              <a href="mailto:Eludwig1126@gmail.com" className="hover:text-brand">
                Eludwig1126@gmail.com
              </a>
            </li>
            <li>Serving Philadelphia, PA</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Site</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand">
                Request a Quote
              </Link>
            </li>
            {reviewUrl && (
              <li>
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Leave a Google Review ★
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page py-4 text-center text-xs text-slate-500">
          © {year} Ludwig&apos;s Roofing & Exteriors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
