import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import connectToDatabase from "@/lib/dbConnect";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Blog",
  description: "The Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </SessionProvider>
  );
}
