import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TOMO — Capital is scarce. Execution can't be.",
  description:
    "TOMO closes the execution gaps that quietly cost you momentum — across email, calendar, assistants, and internal threads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
