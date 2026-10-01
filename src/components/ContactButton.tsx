import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    >
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
      Kom in contact
    </Link>
  );
}