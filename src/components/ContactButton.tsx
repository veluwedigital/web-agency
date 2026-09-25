"use client";

export default function ContactButton() {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2.5 sm:py-0 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-500/20 min-h-11">
      <svg
        className="w-4 h-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
      Kom in contact
    </button>
  );
}