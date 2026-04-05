/**
 * ================================================================
 * 이력서 상세/편집 페이지
 * ================================================================
 * 기능 요약:
 *   생성된 이력서를 확인하고 편집하는 페이지입니다.
 *   AI가 생성한 이력서를 미리보기하고 직접 수정할 수 있습니다.
 *   기업 양식에 맞춘 변형 기능도 제공합니다.
 * ================================================================
 */

export default function ResumeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">이력서</h1>
      {/* TODO: ResumeViewer, ResumeEditor, FormInjector 컴포넌트 */}
      <p>이력서 ID: {params.id}</p>
    </main>
  );
}
