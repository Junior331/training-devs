import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const fonte = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your event started here",
  description: "Application of fullstack events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonte.className}`}>{children}</body>
    </html>
  );
}
