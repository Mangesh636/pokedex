import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "A Application created to fetch and display pokemon data and filter them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("text-base font-normal bg-white", rubik.className)}>
        {children}
      </body>
    </html>
  );
}
