/**
 * ================================================================
 * [공통] TypeScript 타입 - 면접
 * ================================================================
 */

export interface InterviewSession {
  id: number;
  status: "in_progress" | "completed";
  totalQuestions: number;
  overallScore?: number;
  feedbackSummary?: string;
  createdAt: string;
  questions: InterviewQuestion[];
}

export interface InterviewQuestion {
  id: number;
  questionOrder: number;
  questionText: string;
  answerText?: string;
  score?: number;
  feedback?: string;
}

export interface InterviewStartRequest {
  jobPostingId?: number;
}

export interface InterviewAnswerRequest {
  sessionId: number;
  questionId: number;
  answerText: string;
}
