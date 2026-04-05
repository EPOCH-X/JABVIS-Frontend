/**
 * ================================================================
 * [공통] 레이아웃 - 사이드바 컴포넌트
 * ================================================================
 * 기능 요약:
 *   좌측 네비게이션 사이드바입니다.
 *   대시보드, 이력서, 자소서, 포트폴리오, 면접 메뉴를 포함합니다.
 * ================================================================
 */

export default function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <nav className="space-y-2">
        {/* TODO: Link 컴포넌트로 메뉴 렌더링 */}
        <p className="text-sm text-gray-500 px-2 py-1">대시보드</p>
        <p className="text-sm text-gray-500 px-2 py-1">이력서</p>
        <p className="text-sm text-gray-500 px-2 py-1">자기소개서</p>
        <p className="text-sm text-gray-500 px-2 py-1">포트폴리오</p>
        <p className="text-sm text-gray-500 px-2 py-1">모의면접</p>
      </nav>
    </aside>
  );
}
