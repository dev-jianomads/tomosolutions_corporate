import type { ReactNode } from "react";

export function LegalArticle({ children }: { children: ReactNode }) {
  return <article className="max-w-3xl mx-auto">{children}</article>;
}

export function LegalTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
      {children}
    </h1>
  );
}

export function LegalMeta({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-secondary text-sm">{children}</p>;
}

export function LegalLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 text-secondary text-sm leading-relaxed">{children}</p>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14 space-y-4">
      <h2 className="text-xl font-medium text-primary">{title}</h2>
      {children}
    </section>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-medium text-primary pt-2">{children}</h3>;
}

export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p className="text-secondary font-light leading-relaxed">{children}</p>
  );
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-2 text-secondary font-light leading-relaxed">
      {children}
    </ul>
  );
}

export function LegalOl({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal list-outside ml-5 space-y-2 text-secondary font-light leading-relaxed">
      {children}
    </ol>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-primary/20">
            {headers.map((h) => (
              <th
                key={h}
                className="py-3 pr-4 font-medium text-primary align-top"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-primary/10">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3 pr-4 text-secondary font-light leading-relaxed align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
