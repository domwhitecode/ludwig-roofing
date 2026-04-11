"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/ludwigs_logo.svg"
            alt="Ludwig's Roofing & Exteriors — Philadelphia roofing contractor"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-lg font-bold text-slate-900">
            Ludwig&apos;s <span className="text-brand">Roofing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-brand">
            Home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-brand">
            Contact
          </Link>
          <a href="tel:+12673280819" className="btn-primary px-4 py-2 text-sm">
            267-328-0819
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-slate-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            <Link
              href="/"
              className="rounded-md px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <a href="tel:+12673280819" className="btn-primary mt-2">
              Call 267-328-0819
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
