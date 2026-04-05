/**
 * ================================================================
 * 온보딩 페이지
 * ================================================================
 * 기능 요약:
 *   신규 사용자의 초기 데이터 입력 페이지입니다.
 *   Step 1: 파일 업로드 (이력서, 포트폴리오 등)
 *   Step 2: URL 입력 (GitHub, 블로그, Notion)
 *   Step 3: 프로필 설정 (직무, 경력, 기술스택)
 * ================================================================
 */

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold mb-8">시작하기</h1>
        {/* TODO: FileUploader, UrlInputForm, ProfileSetup 스텝 위저드 */}
      </div>
    </main>
  );
}
