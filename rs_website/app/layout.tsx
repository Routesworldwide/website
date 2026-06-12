import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-Helvetica",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Routes Worldwide | Logistics & Supply Chain",
  description:
    "Professional logistics solutions for global transportation, warehousing, and freight management.",
  icons: {
    icon: [
      {
        url: "/footer-favicon.png?v=2",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/footer-favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 
