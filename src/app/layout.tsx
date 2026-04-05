/**
 * ================================================================
 * 루트 레이아웃 (Root Layout)
 * ================================================================
 * 기능 요약:
 *   모든 페이지에 적용되는 루트 레이아웃입니다.
 *   글로벌 스타일, 헤더, 사이드바, 프로바이더를 설정합니다.
 * ================================================================
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JABVIS - AI 취업 지원 에이전트",
  description: "All-in-One AI 취업 지원 에이전트 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* TODO: QueryClientProvider, Zustand Provider 등 래핑 */}
        {children}
      </body>
    </html>
  );
}
