import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { outfit } from "./fonts";
import { inter } from "./fonts";



export const metadata: Metadata = {
  title: "Krypto: Buy and Sell NFTs",
  description: "Sample Krypto App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
