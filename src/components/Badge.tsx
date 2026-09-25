export default function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-950/40 px-4 py-1.5 shadow-[0_0_15px_-3px_rgba(59,130,246,0.4)]">
      <svg
        className="w-4 h-4 text-blue-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
      <span className="text-sm text-blue-100">{text}</span>
    </div>
  );
}