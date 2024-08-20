import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NekoCloud",
  description: "NekoCloud - Hospedagems Minecraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <meta name="keywords" content="minecraft, cloud, host, hospedagem, mine, dedicado" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="NekoCloud" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="NekoCloud" />
        <meta
          property="og:description"
          content="NekoCloud - Hospedagems Minecraft"
        />
        <meta
          property="og:image"
          content="/image-meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nekocloud.vercel.app/"
        />
        <meta property="twitter:title" content="NekoCloud" />
        <meta
          property="twitter:description"
          content="NekoCloud - Hospedagems Minecraft"
        />
        <meta
          property="twitter:image"
          content="/image-meta.png"
        />

        {children}
      </body>
    </html>
  );
}