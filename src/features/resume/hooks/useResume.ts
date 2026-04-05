/**
 * ================================================================
 * [프론트엔드] 이력서 - useResume 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   이력서 생성, 조회, 수정, 변형 로직을 제공합니다.
 * ================================================================
 */

"use client";

export function useResume() {
  const generate = async (jobPostingId: number) => {
    // TODO: 구현
  };

  const adapt = async (documentId: number, templateData?: Record<string, unknown>) => {
    // TODO: 구현
  };

  return { generate, adapt };
}
