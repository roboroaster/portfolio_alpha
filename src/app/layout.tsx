import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachit Kalia | Portfolio",
  description: "Systems Engineer & Full Stack Developer",
};

import { cn } from "@/lib/utils";
import { Background } from "@/components/Background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground",
          inter.variable,
          outfit.variable
        )}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
