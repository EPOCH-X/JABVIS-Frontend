/**
 * ================================================================
 * [프론트엔드] 온보딩 - URL 입력 폼 컴포넌트
 * ================================================================
 * 기능 요약:
 *   GitHub, 블로그, Notion 등 URL을 입력받습니다.
 * ================================================================
 */

"use client";

export default function UrlInputForm() {
  // TODO: URL 입력 + 유효성 검사 로직
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">GitHub URL</label>
        <input type="url" placeholder="https://github.com/username" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">블로그 URL</label>
        <input type="url" placeholder="https://blog.example.com" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Notion URL</label>
        <input type="url" placeholder="https://notion.so/..." className="w-full border rounded px-3 py-2" />
      </div>
    </div>
  );
}
