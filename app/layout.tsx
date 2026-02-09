import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "katex/dist/katex.min.css";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans-kr",
});

export const metadata: Metadata = {
  title: "수학 강의 노트",
  description: "대학 수학 강의 노트 - 해석학, 선형대수, 범주론",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased bg-white text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
