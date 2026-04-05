/**
 * ================================================================
 * [프론트엔드] 인증 - 회원가입 폼 컴포넌트
 * ================================================================
 * 기능 요약:
 *   이메일/비밀번호/이름 입력 폼을 렌더링하고
 *   회원가입 API를 호출합니다.
 * ================================================================
 */

"use client";

export default function RegisterForm() {
  // TODO: useAuth 훅과 연동하여 회원가입 로직 구현
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">이름</label>
        <input id="name" type="text" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">이메일</label>
        <input id="email" type="email" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-1">비밀번호</label>
        <input id="password" type="password" className="w-full border rounded px-3 py-2" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        회원가입
      </button>
    </form>
  );
}
