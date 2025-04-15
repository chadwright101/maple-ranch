import "@/_styles/globals.css";

import { Passion_One, PT_Sans } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
