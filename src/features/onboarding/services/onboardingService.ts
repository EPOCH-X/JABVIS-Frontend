/**
 * ================================================================
 * [프론트엔드] 온보딩 - API 서비스
 * ================================================================
 * 기능 요약:
 *   온보딩 관련 API 호출 함수를 정의합니다.
 * ================================================================
 */

import { api } from "@/lib/api";

export const onboardingService = {
  uploadFiles: async (files: FormData) => {
    return api.post("/onboarding/upload", files);
  },

  submitUrls: async (urls: string[]) => {
    return api.post("/onboarding/urls", urls);
  },

  saveProfile: async (profile: Record<string, unknown>) => {
    return api.post("/onboarding/profile", profile);
  },
};
