/**
 * ================================================================
 * [프론트엔드] 모의면접 - useInterview 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   면접 세션 시작/종료, 답변 제출, WebSocket 연결 로직을 제공합니다.
 * ================================================================
 */

"use client";

export function useInterview() {
  const startSession = async (jobPostingId?: number) => {
    // TODO: 구현
  };

  const submitAnswer = async (sessionId: number, questionId: number, answer: string) => {
    // TODO: 구현
  };

  const endSession = async (sessionId: number) => {
    // TODO: 구현
  };

  return { startSession, submitAnswer, endSession };
}
