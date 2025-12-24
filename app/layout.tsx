import { generateViewport } from "@/_lib/metadata";
import { Footer } from "@/_components/navigation/footer/footer";
import { Header } from "@/_components/navigation/header/header";
import "@/_styles/globals.css";

import { Passion_One, PT_Sans, Rye } from "next/font/google";
import RootLayoutClient from "./layout-client";

const PassionOne = Passion_One({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-passion-one",
});

const PTSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt-sans",
});

const RyeFont = Rye({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rye",
});

export const viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PTSans.variable} ${PassionOne.variable} ${RyeFont.variable} antialiased`}
      >
        <RootLayoutClient>
          <Header />
          {children}
          <Footer />
        </RootLayoutClient>
      </body>
    </html>
  );
}
