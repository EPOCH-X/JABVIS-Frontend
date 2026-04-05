/**
 * ================================================================
 * [프론트엔드] 대시보드 - 공고 카드 컴포넌트
 * ================================================================
 * 기능 요약:
 *   추천 채용 공고를 카드 형태로 표시합니다.
 *   회사명, 직무, 매칭 점수, 마감일 등을 포함합니다.
 * ================================================================
 */

interface JobCardProps {
  title: string;
  company: string;
  matchScore: number;
  deadline?: string;
}

export default function JobCard({ title, company, matchScore, deadline }: JobCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{company}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-medium text-blue-600">매칭 {matchScore}%</span>
        {deadline && <span className="text-xs text-gray-400">{deadline}</span>}
      </div>
    </div>
  );
}
