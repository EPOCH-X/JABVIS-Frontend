/**
 * ================================================================
 * 랜딩 페이지
 * ================================================================
 * 기능 요약:
 *   JABVIS 서비스 소개 및 로그인/회원가입으로의 진입점입니다.
 * ================================================================
 */

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">JABVIS (잡있으)</h1>
      <p className="mt-4 text-lg text-gray-600">
        All-in-One AI 취업 지원 에이전트
      </p>
      {/* TODO: CTA 버튼 (로그인/시작하기) */}
    </main>
  );
}
