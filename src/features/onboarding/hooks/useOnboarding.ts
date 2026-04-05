/**
 * ================================================================
 * [프론트엔드] 온보딩 - useOnboarding 커스텀 훅
 * ================================================================
 * 기능 요약:
 *   온보딩 스텝 관리, 파일 업로드, URL 제출, 프로필 저장 로직을 제공합니다.
 * ================================================================
 */

"use client";

import { useState } from "react";

export function useOnboarding() {
  const [step, setStep] = useState(1);

  const uploadFiles = async (files: File[]) => {
    // TODO: 구현
  };

  const submitUrls = async (urls: string[]) => {
    // TODO: 구현
  };

  const saveProfile = async (profile: Record<string, unknown>) => {
    // TODO: 구현
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return { step, nextStep, prevStep, uploadFiles, submitUrls, saveProfile };
}
