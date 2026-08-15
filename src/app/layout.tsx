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
  metadataBase: new URL("https://birukdessalegn.dev"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: "https://birukdessalegn.dev",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/IMG_9748 (Edited).JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/IMG_9748 (Edited).JPG"],
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
