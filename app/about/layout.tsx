import type { Metadata } from "next";
import AboutPage from "./page";

export const metadata: Metadata = {
  title: "Ahmed Ramadan | About",
  description:
    "Here you can find information about me, my skills, and my experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AboutPage />;
}
