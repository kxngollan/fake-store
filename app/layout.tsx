import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const des =
  "A simple fake e-commerce store built with Next.js and Tailwind CSS";

export const metadata: Metadata = {
  title: {
    default: "Fake Store",
    template: "%s | Fake Store",
  },
  icons: {
    icon: "/fake-store.png",
  },
  description: des,
  openGraph: {
    title: "Fake Store",
    description: des,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Fake Store",
    images: [
      {
        url: "/og/fake-store.png",
        width: 630,
        height: 630,
        alt: "Fake store",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <>
                <header>
                  <Navbar />
                </header>
                {children}
                <footer className="border-t border-dashed py-6">
                  <div className="container mx-auto text-sm text-muted-foreground text-center">
                    © {new Date().getFullYear()} Fake Store. All rights
                    reserved.
                  </div>
                </footer>
              </>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </Suspense>
  );
}
