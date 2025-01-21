import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
export const metadata = {
  title: 'MsCorpres',
  description: 'MsCorpres',
  other: {
    'google-site-verification': 'KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="KKOvYSdxhIKXdM5mcrwSqgylO-ZYk3OsBaAKfF59F0s" />
      </Head>
      <body className={` antialiased relative`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
