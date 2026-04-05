/**
 * ================================================================
 * [프론트엔드] 자기소개서 - useCoverLetter 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   자기소개서 생성, 조회, 수정, 변형 로직을 제공합니다.
 * ================================================================
 */

"use client";

export function useCoverLetter() {
  const generate = async (jobPostingId: number) => {
    // TODO: 구현
  };

  const adapt = async (documentId: number, templateData?: Record<string, unknown>) => {
    // TODO: 구현
  };

  return { generate, adapt };
}
