/**
 * ================================================================
 * [공통] 전역 상태 - 인증 스토어
 * ================================================================
 * 기능 요약:
 *   Zustand로 인증 상태 (로그인 여부, 사용자 정보, 토큰)를 관리합니다.
 * ================================================================
 */

import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { id: number; email: string; name: string } | null;
  setUser: (user: AuthState["user"]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
    }
    set({ user: null, isAuthenticated: false });
  },
}));
