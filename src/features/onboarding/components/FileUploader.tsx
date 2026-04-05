/**
 * ================================================================
 * [프론트엔드] 온보딩 - 파일 업로더 컴포넌트
 * ================================================================
 * 기능 요약:
 *   이력서, 포트폴리오 등 파일을 드래그앤드롭 또는 클릭으로 업로드합니다.
 *   PDF, DOCX, HWP, PPTX, XLSX 형식을 지원합니다.
 * ================================================================
 */

"use client";

export default function FileUploader() {
  // TODO: 파일 드래그앤드롭 + 업로드 로직
  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center">
      <p className="text-gray-500">파일을 여기에 드래그하거나 클릭하여 업로드하세요</p>
      <p className="text-sm text-gray-400 mt-2">PDF, DOCX, HWP, PPTX, XLSX (최대 10MB)</p>
    </div>
  );
}
