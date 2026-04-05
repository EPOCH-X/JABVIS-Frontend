/**
 * ================================================================
 * [공통] 전역 상태 - UI 스토어
 * ================================================================
 * 기능 요약:
 *   사이드바 열림/닫힘, 다크모드, 로딩 상태 등 UI 전역 상태를 관리합니다.
 * ================================================================
 */

import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
