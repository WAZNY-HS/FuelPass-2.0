import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuel Pass | T2T Group C Proposal",
  description: "A T2T Group C proposal prototype with simulated fuel transactions. No official endorsement.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
