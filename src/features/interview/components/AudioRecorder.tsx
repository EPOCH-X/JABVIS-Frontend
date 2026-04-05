/**
 * ================================================================
 * [프론트엔드] 모의면접 - 오디오 레코더 컴포넌트
 * ================================================================
 * 기능 요약:
 *   브라우저 마이크 접근 → 음성 녹음 → WebSocket 전송을 담당합니다.
 *   녹음 상태 표시, 시작/정지 버튼을 제공합니다.
 * ================================================================
 */

"use client";

export default function AudioRecorder() {
  // TODO: MediaRecorder API + WebSocket 스트리밍
  return (
    <div className="flex items-center gap-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded-full">
        🎤 녹음
      </button>
      <span className="text-sm text-gray-500">음성으로 답변하세요</span>
    </div>
  );
}
