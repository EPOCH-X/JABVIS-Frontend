/**
 * ================================================================
 * 포트폴리오 빌더 페이지
 * ================================================================
 * 기능 요약:
 *   포트폴리오 모듈을 선택/배치하고 레이아웃을 미리보는 페이지입니다.
 *   기업 양식에 맞춘 변형 기능도 제공합니다.
 * ================================================================
 */

export default function PortfolioDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">포트폴리오</h1>
      {/* TODO: PortfolioBuilder, ModuleSelector, LayoutPreview, FormInjector */}
      <p>포트폴리오 ID: {params.id}</p>
    </main>
  );
}
