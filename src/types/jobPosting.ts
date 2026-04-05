/**
 * ================================================================
 * [공통] TypeScript 타입 - 채용 공고
 * ================================================================
 */

export interface JobPosting {
  id: number;
  source: string;
  title: string;
  company: string;
  location?: string;
  jobType?: string;
  experienceRequired?: string;
  techStack?: string[];
  url?: string;
  deadline?: string;
}

export interface MatchResult {
  id: number;
  jobPostingId: number;
  matchScore: number;
  matchedKeywords?: string[];
  status: "new" | "viewed" | "applied" | "dismissed";
  matchedAt: string;
}
