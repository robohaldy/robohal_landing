import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "RoboHal — Automation Workflows",
  description:
    "Intelligent automation workflows for real estate lead generation, humanoid robot intelligence, and more — powered by N8n.",
  keywords: ["automation", "n8n", "real estate", "lead generation", "robotics", "workflows"],
  openGraph: {
    title: "RoboHal — Intelligent Automation Workflows",
    description: "Purpose-built automation tools that surface high-value opportunities for your business.",
    url: "https://robohal.com",
    siteName: "RoboHal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboHal — Intelligent Automation Workflows",
    description: "Purpose-built automation tools that surface high-value opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
