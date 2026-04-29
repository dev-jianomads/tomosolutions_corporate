import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-primary/10 bg-background text-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm font-light">
        <p className="text-secondary">
          © {year} Tomo Solutions Inc. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Legal">
          <Link
            href="/"
            className="text-primary hover:text-secondary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/privacy"
            className="text-primary hover:text-secondary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-primary hover:text-secondary transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
