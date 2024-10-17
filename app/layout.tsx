import '@/app/ui/globals.css';
import type { Metadata } from "next";
import { brawler } from "./ui/fonts";
import NavBar from "./ui/Navbar/NavBar";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Mariela Badillo Personal Portfolio",
  description: "Personal Portfolio for Mariela Badillo",
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
    shortcut: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'bg-ghostWhite'}>
      <body className={`${brawler.className} flex flex-col h-screen`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
