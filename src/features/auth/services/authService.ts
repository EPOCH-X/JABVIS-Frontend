/**
 * ================================================================
 * [프론트엔드] 인증 - API 서비스
 * ================================================================
 * 기능 요약:
 *   인증 관련 API 호출 함수를 정의합니다.
 *   (로그인, 회원가입, 토큰 갱신)
 * ================================================================
 */

import { api } from "@/lib/api";

export const authService = {
  login: async (email: string, password: string) => {
    // TODO: API 호출 구현
    return api.post("/auth/login", { email, password });
  },

  register: async (email: string, password: string, name: string) => {
    // TODO: API 호출 구현
    return api.post("/auth/register", { email, password, name });
  },
};
