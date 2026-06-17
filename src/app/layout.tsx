import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inshal Chaudhry — Software Engineer · AI Builder",
  description:
    "Interactive profile system for Inshal Chaudhry — Software Engineer, AI Builder, and future founder. Explore missions, collaborations, growth analytics, and evolution timeline.",
  keywords: [
    "Inshal Chaudhry",
    "Software Engineer",
    "AI Builder",
    "Machine Learning",
    "Ontario Tech University",
    "Portfolio",
  ],
  openGraph: {
    title: "Inshal Chaudhry — System Profile",
    description:
      "A premium intelligence-style profile dashboard for a high-achieving software engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
