/**
 * ================================================================
 * [프론트엔드] 자기소개서 - 글자 수 카운터 컴포넌트
 * ================================================================
 * 기능 요약:
 *   자기소개서 항목별 글자 수를 실시간으로 카운트하고
 *   제한 초과 시 경고를 표시합니다.
 * ================================================================
 */

interface CharCounterProps {
  current: number;
  limit: number;
}

export default function CharCounter({ current, limit }: CharCounterProps) {
  const isOver = current > limit;

  return (
    <span className={`text-sm ${isOver ? "text-red-500 font-bold" : "text-gray-500"}`}>
      {current} / {limit}자
    </span>
  );
}
