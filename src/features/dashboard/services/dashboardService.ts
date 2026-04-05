/**
 * ================================================================
 * [프론트엔드] 대시보드 - API 서비스
 * ================================================================
 * 기능 요약:
 *   대시보드 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const dashboardService = {
  getSummary: async () => {
    return api.get("/dashboard/summary");
  },

  getRecentDrafts: async () => {
    return api.get("/dashboard/recent-drafts");
  },

  getMatchStats: async () => {
    return api.get("/dashboard/match-stats");
  },
};
