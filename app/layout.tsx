import type { Metadata } from "next";
import { Inter, Arizonia, Alex_Brush, Bad_Script, Playball, Great_Vibes, Sacramento, Allura, Ephesis, Imperial_Script, Poiret_One } from "next/font/google";
import "./globals.css";

const font = Poiret_One({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
