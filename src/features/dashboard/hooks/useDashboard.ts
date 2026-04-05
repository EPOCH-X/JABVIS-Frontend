/**
 * ================================================================
 * [프론트엔드] 대시보드 - useDashboard 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   대시보드 데이터 (추천 공고, 초안, 통계) 조회 로직을 제공합니다.
 * ================================================================
 */

"use client";

export function useDashboard() {
  // TODO: React Query + dashboardService 연동
  const fetchSummary = async () => {
    // TODO: 구현
  };

  const fetchRecentDrafts = async () => {
    // TODO: 구현
  };

  const fetchMatchStats = async () => {
    // TODO: 구현
  };

  return { fetchSummary, fetchRecentDrafts, fetchMatchStats };
}
