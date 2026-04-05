/**
 * ================================================================
 * [프론트엔드] 모의면접 - API 서비스
 * ================================================================
 * 기능 요약:
 *   모의면접 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const interviewService = {
  start: async (jobPostingId?: number) => {
    return api.post("/interview/start", { job_posting_id: jobPostingId });
  },

  submitAnswer: async (sessionId: number, questionId: number, answerText: string) => {
    return api.post("/interview/answer", {
      session_id: sessionId,
      question_id: questionId,
      answer_text: answerText,
    });
  },

  endSession: async (sessionId: number) => {
    return api.post(`/interview/${sessionId}/end`);
  },

  getSession: async (sessionId: number) => {
    return api.get(`/interview/${sessionId}`);
  },
};
