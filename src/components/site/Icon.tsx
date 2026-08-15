import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

/** Renders a Lucide icon by name so content data can stay free of components. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const icons = Lucide as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Cmp = icons[name] ?? Lucide.Circle;
  return <Cmp aria-hidden="true" {...props} />;
}
