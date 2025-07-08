import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExecutiveAid - Virtual Assistant Services",
  description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
  keywords: "virtual assistant, executive support, business assistance, remote work, productivity",
  authors: [{ name: "ExecutiveAid" }],
  openGraph: {
    title: "ExecutiveAid - Virtual Assistant Services",
    description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-mono`}>
        {children}
      </body>
    </html>
  );
}
