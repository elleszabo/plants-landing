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
  title: "theai.garden — Stop Killing Your Plants",
  description:
    "Upload a photo. Get a care plan in 10 seconds. Personalized plant care powered by AI.",
  openGraph: {
    title: "theai.garden — Stop Killing Your Plants",
    description: "Upload a photo. Get a care plan in 10 seconds.",
    url: "https://theai.garden",
    siteName: "theai.garden",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
