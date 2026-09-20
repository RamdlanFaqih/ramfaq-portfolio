import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ramdlanfaqih.com"),
  title: {
    default: "Ramdlan Faqih — Mobile & Web Engineer",
    template: "%s | Ramdlan Faqih",
  },
  description: "Minimalist portfolio showcasing high-performance mobile and web engineering projects.",
  icons: {
    icon: "/images/ramfaq-rounded.png",
    shortcut: "/images/ramfaq-rounded.png",
    apple: "/images/ramfaq-rounded.png",
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
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
