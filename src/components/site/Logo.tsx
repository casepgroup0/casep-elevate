import { cn } from "@/lib/utils";
import logoIcon from "@/assets/casep-icon.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoIcon}
      alt=""
      aria-hidden="true"
      width={251}
      height={251}
      className={cn("inline-block object-contain", className)}
    />
  );
}
