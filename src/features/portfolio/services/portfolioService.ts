/**
 * ================================================================
 * [프론트엔드] 포트폴리오 - API 서비스
 * ================================================================
 * 기능 요약:
 *   포트폴리오 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const portfolioService = {
  generate: async (jobPostingId: number) => {
    return api.post("/portfolio/generate", { job_posting_id: jobPostingId, doc_type: "portfolio" });
  },

  adapt: async (documentId: number, templateData?: Record<string, unknown>) => {
    return api.post("/portfolio/adapt", { document_id: documentId, template_data: templateData });
  },

  list: async () => {
    return api.get("/portfolio");
  },

  getById: async (id: number) => {
    return api.get(`/portfolio/${id}`);
  },
};
