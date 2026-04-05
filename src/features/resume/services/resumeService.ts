/**
 * ================================================================
 * [프론트엔드] 이력서 - API 서비스
 * ================================================================
 * 기능 요약:
 *   이력서 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const resumeService = {
  generate: async (jobPostingId: number) => {
    return api.post("/resume/generate", { job_posting_id: jobPostingId, doc_type: "resume" });
  },

  adapt: async (documentId: number, templateData?: Record<string, unknown>) => {
    return api.post("/resume/adapt", { document_id: documentId, template_data: templateData });
  },

  list: async () => {
    return api.get("/resume");
  },

  getById: async (id: number) => {
    return api.get(`/resume/${id}`);
  },
};
