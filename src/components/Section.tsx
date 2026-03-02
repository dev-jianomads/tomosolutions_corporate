import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export function Section({
  children,
  variant = "dark",
  className = "",
}: SectionProps) {
  const baseClasses = "py-24 md:py-32";
  const variantClasses =
    variant === "dark"
      ? "bg-background text-primary"
      : "bg-light-bg text-light-text";

  return (
    <section className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
