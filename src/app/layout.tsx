import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/app.scss";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooter from "@/layouts/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrasage",
  description: "Terrasage Investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <head>
        <link
          rel="icon"
          href="/favicon/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
