/**
 * ================================================================
 * [공통] 유틸리티 함수
 * ================================================================
 * 기능 요약:
 *   공통으로 사용되는 유틸리티 함수를 정의합니다.
 *   cn (className 합치기), formatDate 등을 포함합니다.
 * ================================================================
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind 클래스 병합 유틸 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 날짜 포맷 (YYYY.MM.DD) */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}
