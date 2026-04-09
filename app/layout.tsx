import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dudex Template Site",
  description: "Generated from Dudex-Projects template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
