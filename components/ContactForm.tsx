"use client";

import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/schema";

const empty: ContactInput = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  website: "",
};

type Status = { kind: "idle" } | { kind: "loading" } | { kind: "ok" } | { kind: "error"; msg: string };

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function update<K extends keyof ContactInput>(key: K, v: ContactInput[K]) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setStatus({ kind: "error", msg: parsed.error.issues[0]?.message ?? "Invalid input" });
      return;
    }
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus({ kind: "error", msg: json.error || "Something went wrong. Please try again." });
        return;
      }
      setStatus({ kind: "ok" });
      setValues(empty);
    } catch {
      setStatus({ kind: "error", msg: "Network error. Please try again." });
    }
  }

  if (status.kind === "ok") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-green-900">Thanks — we got it!</h3>
        <p className="mt-2 text-green-800">
          We&apos;ll be in touch within one business day. For anything urgent, call{" "}
          <a href="tel:+12673280819" className="font-semibold underline">
            267-328-0819
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-sm font-semibold text-green-900 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Phone" required>
          <input
            type="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Address" required>
          <input
            type="text"
            required
            autoComplete="street-address"
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Message (optional)">
        <textarea
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls}
          placeholder="Tell us about your project — type of work, timeline, anything else we should know."
        />
      </Field>

      {status.kind === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {status.msg}
        </div>
      )}

      <button type="submit" disabled={status.kind === "loading"} className="btn-primary w-full sm:w-auto">
        {status.kind === "loading" ? "Sending…" : "Request a Free Quote"}
      </button>
      <p className="text-xs text-slate-500">
        We respect your privacy. Your info is only used to respond to your request.
      </p>
    </form>
  );
}

const inputCls =
  "block w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 min-h-11";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-900">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
