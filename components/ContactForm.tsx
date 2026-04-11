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
type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function update<K extends keyof ContactInput>(key: K, v: ContactInput[K]) {
    setValues((prev) => ({ ...prev, [key]: v }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validateField(key: keyof ContactInput) {
    const value = values[key] ?? "";
    if (value.trim() === "") return;
    const result = contactSchema.shape[key].safeParse(value);
    if (!result.success) {
      const msg = result.error.issues[0]?.message ?? "Invalid input";
      setFieldErrors((prev) => ({ ...prev, [key]: msg }));
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const errs: FieldErrors = {};
      (Object.keys(flat) as Array<keyof ContactInput>).forEach((k) => {
        const msg = flat[k]?.[0];
        if (msg) errs[k] = msg;
      });
      setFieldErrors(errs);
      setStatus({ kind: "idle" });
      return;
    }
    setFieldErrors({});
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
        <Field label="Name" required error={fieldErrors.name} htmlFor="contact-name">
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className={inputCls(!!fieldErrors.name)}
          />
        </Field>
        <Field label="Email" required error={fieldErrors.email} htmlFor="contact-email">
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => validateField("email")}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            className={inputCls(!!fieldErrors.email)}
          />
        </Field>
        <Field label="Phone" required error={fieldErrors.phone} htmlFor="contact-phone">
          <input
            id="contact-phone"
            type="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => validateField("phone")}
            aria-invalid={fieldErrors.phone ? true : undefined}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            className={inputCls(!!fieldErrors.phone)}
          />
        </Field>
        <Field label="Address" required error={fieldErrors.address} htmlFor="contact-address">
          <input
            id="contact-address"
            type="text"
            required
            autoComplete="street-address"
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            aria-invalid={fieldErrors.address ? true : undefined}
            aria-describedby={fieldErrors.address ? "contact-address-error" : undefined}
            className={inputCls(!!fieldErrors.address)}
          />
        </Field>
      </div>

      <Field label="Message (optional)" error={fieldErrors.message} htmlFor="contact-message">
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls(!!fieldErrors.message)}
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

function inputCls(hasError: boolean) {
  return [
    "block w-full rounded-lg border bg-white px-3 py-3 text-base text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-2 min-h-11",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/30"
      : "border-slate-300 focus:border-brand focus:ring-brand/30",
  ].join(" ");
}

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-slate-900">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      {children}
      {error && (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
