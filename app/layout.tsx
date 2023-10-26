import type { Metadata } from "next";
import "./globals.css";
import { Londrina_Solid } from "next/font/google";

const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-londrina-solid",
});

export const metadata: Metadata = {
  title: "I'm Feeling Nounish",
  description: "Discover new and upcoming nounish people, places, and things!",
  themeColor: "#43faa7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={londrinaSolid.variable}>{children}</body>
    </html>
  );
}
