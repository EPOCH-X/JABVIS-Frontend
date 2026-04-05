/**
 * ================================================================
 * [공통] TypeScript 타입 - 생성 서류
 * ================================================================
 */

export type DocumentType = "resume" | "cover_letter" | "portfolio";
export type DocumentStatus = "draft" | "reviewed" | "finalized";

export interface Document {
  id: number;
  docType: DocumentType;
  status: DocumentStatus;
  content?: Record<string, unknown>;
  matchScore?: number;
  version: number;
  createdAt: string;
}

export interface DocumentGenerateRequest {
  jobPostingId: number;
  docType: DocumentType;
}

export interface DocumentAdaptRequest {
  documentId: number;
  templateData?: Record<string, unknown>;
}
