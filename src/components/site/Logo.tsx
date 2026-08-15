import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6.5A8 8 0 1 0 20 17.5" />
        <circle cx="19.5" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
