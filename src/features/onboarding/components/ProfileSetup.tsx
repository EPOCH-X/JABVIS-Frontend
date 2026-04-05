/**
 * ================================================================
 * [프론트엔드] 온보딩 - 프로필 설정 컴포넌트
 * ================================================================
 * 기능 요약:
 *   희망 직무, 경력 연수, 기술 스택, 학력 정보를 입력받습니다.
 * ================================================================
 */

"use client";

export default function ProfileSetup() {
  // TODO: 프로필 입력 로직
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">희망 직무</label>
        <input type="text" placeholder="예: 프론트엔드 개발자" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">경력 (년)</label>
        <input type="number" min="0" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">기술 스택</label>
        <input type="text" placeholder="예: React, TypeScript, Python" className="w-full border rounded px-3 py-2" />
      </div>
    </div>
  );
}
