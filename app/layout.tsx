import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "工具箱",
  description: "本地可用的常用开发工具集合。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
