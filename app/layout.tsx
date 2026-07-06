import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SiwiDeeMC - Portfolio & Branding",
  description: "MC Portfolio, Music, and Creative Branding Website",
  keywords: ["MC", "Music", "Portfolio", "Creative", "Branding"],
  authors: [{ name: "SiwiDeeMC" }],
  openGraph: {
    title: "SiwiDeeMC - Portfolio & Branding",
    description: "MC Portfolio, Music, and Creative Branding Website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-light">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
