import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed Ramadan",
  description:
    "This my (abohmaid) portfolio developed by Next.js, TypeScript, MUI, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
