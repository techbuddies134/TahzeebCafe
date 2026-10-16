import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahzeeb Cafe — Daska",
  description: "Daska's boldest BBQ & fast food experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}