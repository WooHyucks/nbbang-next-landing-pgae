import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "엔빵: 정산 스트레스 이제 그만",
  description: "원클릭 송금",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
