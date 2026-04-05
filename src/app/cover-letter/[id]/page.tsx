/**
 * ================================================================
 * 자기소개서 상세/편집 페이지
 * ================================================================
 * 기능 요약:
 *   생성된 자기소개서를 확인하고 편집하는 페이지입니다.
 *   글자 수 카운터, STAR 기법 하이라이트, 기업 양식 변형 기능을 제공합니다.
 * ================================================================
 */

export default function CoverLetterDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">자기소개서</h1>
      {/* TODO: CoverLetterViewer, CoverLetterEditor, CharCounter, FormInjector */}
      <p>자기소개서 ID: {params.id}</p>
    </main>
  );
}
