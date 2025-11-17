"use client";

import { Footer } from "@/_components/navigation/footer/footer";
import { Header } from "@/_components/navigation/header/header";
import "@/_styles/globals.css";

import { Passion_One, PT_Sans } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PTSans.variable} ${PassionOne.variable} antialiased`}>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
          }}
        >
          <Header />
          {children}
          <Footer />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
