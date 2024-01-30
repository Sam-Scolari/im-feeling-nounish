import type { Metadata } from "next";
import "./globals.css";
import { Londrina_Solid } from "next/font/google";
import { createHash } from "crypto";

const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-londrina-solid",
});

export const metadata: Metadata = {
  title: "I'm Feeling Nounish",
  description: "Discover new and upcoming nounish people, places, and things!",
  themeColor: "#43faa7",
  openGraph: {
    title: "I'm Feeling Nounish",
    description:
      "Discover new and upcoming nounish people, places, and things!",
    images: ["https://nouns.ooo/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const link = "https://nouns.gg";

  return (
    <html lang="en">
      <head>
        {/* <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://nouns.ooo/og.png" />
        <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
        <meta property="fc:frame:post_url" content="https://nouns.ooo/frame" /> */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content={`https://nouns.ooo/frame-images/${createHash("sha256")
            .update(link)
            .digest("hex")}.png`}
        />
        <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
        <meta property="fc:frame:button:2" content="Explore ➜" />
        {/* <meta property="fc:frame:button:2:action" content="post_redirect" /> */}
      </head>
      <body className={londrinaSolid.variable}>{children}</body>
    </html>
  );
}
