import Link from "next/link";

export default function ReviewCTA() {
  const reviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL;
  if (!reviewUrl) return null;

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <StarIcon />
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Happy with the work? Let your neighbors know.
          </h2>
          <p className="max-w-xl text-lg text-slate-600">
            A quick Google review helps other Philadelphia homeowners find a
            contractor they can trust. It only takes a minute.
          </p>
          <Link
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <StarIcon small />
            Leave a Google Review
          </Link>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ small = false }: { small?: boolean }) {
  const size = small ? 18 : 40;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={small ? "text-white" : "text-brand"}
      aria-hidden="true"
    >
      <path d="M12 2l2.95 6.36 6.93.64-5.2 4.8 1.55 6.8L12 17.27 5.77 20.6l1.55-6.8-5.2-4.8 6.93-.64L12 2z" />
    </svg>
  );
}
