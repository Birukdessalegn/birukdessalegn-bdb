import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import { siteConfig } from "../content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    // Uses the app router's built-in `src/app/favicon.ico` by default
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://example.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
