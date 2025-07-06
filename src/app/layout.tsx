import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggleButton from "@/modal/ThemeToggleButton";
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
  title: "Kim Jinjae",
  description: "Kim Jinjae's CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            const stored = localStorage.getItem('theme');
            const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const mode = stored || (system ? 'dark' : 'light');
            if (mode === 'dark') {
              document.documentElement.classList.add('dark');
            }
          })();
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ThemeToggleButton />
      </body>
    </html>
  );
}