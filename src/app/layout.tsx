import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Stop Killing Your Plants — stopkillingplants.xyz",
  description:
    "Upload a photo. Get a care plan in 10 seconds. Personalized plant care powered by AI.",
  openGraph: {
    title: "Stop Killing Your Plants",
    description: "Upload a photo. Get a care plan in 10 seconds.",
    url: "https://stopkillingplants.xyz",
    siteName: "stopkillingplants.xyz",
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
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased bg-[#060606] text-[#ededed]`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
