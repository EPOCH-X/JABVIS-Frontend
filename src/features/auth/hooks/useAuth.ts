/**
 * ================================================================
 * [프론트엔드] 인증 - useAuth 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   로그인, 로그아웃, 회원가입, 토큰 관리 로직을 제공합니다.
 * ================================================================
 */

"use client";

export function useAuth() {
  // TODO: Zustand authStore + API 연동
  const login = async (email: string, password: string) => {
    // TODO: 구현
  };

  const register = async (email: string, password: string, name: string) => {
    // TODO: 구현
  };

  const logout = () => {
    // TODO: 구현
  };

  return { login, register, logout };
}
