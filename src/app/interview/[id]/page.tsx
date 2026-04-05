/**
 * ================================================================
 * 모의면접 인터페이스 페이지
 * ================================================================
 * 기능 요약:
 *   실시간 음성/텍스트 모의면접을 진행하는 페이지입니다.
 *   WebSocket으로 AI 면접관과 실시간 대화하며,
 *   종료 후 피드백 리포트를 확인합니다.
 * ================================================================
 */

export default function InterviewPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">모의면접</h1>
      {/* TODO: InterviewRoom, AudioRecorder, ChatDisplay, FeedbackReport */}
      <p>면접 세션 ID: {params.id}</p>
    </main>
  );
}
