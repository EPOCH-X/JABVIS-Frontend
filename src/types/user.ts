/**
 * ================================================================
 * [공통] TypeScript 타입 - 사용자
 * ================================================================
 */

export interface User {
  id: number;
  email: string;
  name: string;
  targetJob?: string;
  experienceYears?: number;
  techStack?: string[];
  education?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}
