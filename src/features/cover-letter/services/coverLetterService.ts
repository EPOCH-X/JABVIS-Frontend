/**
 * ================================================================
 * [프론트엔드] 자기소개서 - API 서비스
 * ================================================================
 * 기능 요약:
 *   자기소개서 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const coverLetterService = {
  generate: async (jobPostingId: number) => {
    return api.post("/cover-letter/generate", { job_posting_id: jobPostingId, doc_type: "cover_letter" });
  },

  adapt: async (documentId: number, templateData?: Record<string, unknown>) => {
    return api.post("/cover-letter/adapt", { document_id: documentId, template_data: templateData });
  },

  list: async () => {
    return api.get("/cover-letter");
  },

  getById: async (id: number) => {
    return api.get(`/cover-letter/${id}`);
  },
};
