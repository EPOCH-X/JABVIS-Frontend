# JABVIS Frontend

> Next.js 14 웹 프론트엔드 — 팀장 담당

## 빠른 시작

```bash
npm install
cp .env.example .env.local
npm run dev    # http://localhost:3000
```

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| State | Zustand |
| Data Fetching | React Query (TanStack Query) |
| Realtime | WebSocket (모의면접) |

---

## 폴더별 역할

### 페이지 (App Router)

| 경로 | 페이지 | 연동 API |
|------|--------|----------|
| `src/app/` | 루트 레이아웃 + 홈 | - |
| `src/app/auth/login/` | 로그인 | POST /api/v1/auth/login |
| `src/app/auth/register/` | 회원가입 | POST /api/v1/auth/register |
| `src/app/onboarding/` | 온보딩 (파일업로드/URL/프로필) | POST /api/v1/onboarding/* |
| `src/app/dashboard/` | 대시보드 (추천공고/초안) | GET /api/v1/dashboard |
| `src/app/resume/` | 이력서 뷰어/에디터 | /api/v1/resume/* |
| `src/app/cover-letter/` | 자소서 뷰어/에디터 | /api/v1/cover-letter/* |
| `src/app/portfolio/` | 포트폴리오 빌더 | /api/v1/portfolio/* |
| `src/app/interview/` | 모의면접실 | WebSocket /api/v1/interview/* |

### Feature 모듈 (7개)

| 폴더 | 구성 | 설명 |
|------|------|------|
| `src/features/auth/` | components + hooks + services | 로그인/회원가입 폼 + 인증 로직 |
| `src/features/onboarding/` | components + hooks + services | 파일 업로더 + URL 입력 + 프로필 설정 |
| `src/features/dashboard/` | components + hooks + services | 추천 공고 카드 + 초안 미리보기 + 점수 바 |
| `src/features/resume/` | components + hooks + services | 이력서 에디터/뷰어 + 양식 주입 |
| `src/features/cover-letter/` | components + hooks + services | 자소서 에디터/뷰어 + 글자수 카운터 |
| `src/features/portfolio/` | components + hooks + services | 포트폴리오 빌더 + 모듈 선택 + 레이아웃 |
| `src/features/interview/` | components + hooks + services | 면접실 + 채팅 + 오디오 레코더 + 피드백 |

### 공통

| 폴더 | 역할 |
|------|------|
| `src/components/` | 공통 UI (레이아웃, 헤더, 사이드바 등) |
| `src/hooks/` | 공통 커스텀 훅 |
| `src/lib/` | API 클라이언트 (axios/fetch 래퍼) + 유틸 |
| `src/stores/` | Zustand 전역 상태 |
| `src/types/` | TypeScript 타입 정의 |

---

## 주의사항

- API 명세는 `docs/API명세서.csv` 참고
- `src/components/`는 공통 모듈 — 변경 시 전체 영향 확인
- 각 feature는 독립적 — `components/`, `hooks/`, `services/` 3개 폴더 구조 유지
- 백엔드 미완성 시 Mock 데이터로 개발 가능 (`src/lib/` 에서 처리)

---

## 브랜치 목록 (Jira 복붙용)

> Jira → **Create branch** → Branch name 필드에 아래 이름을 그대로 복붙하세요.

### develop 브랜치 (Branch from: `main`)

```
EPOCH-11-JABVIS-Frontend-develop
```

### 기능 브랜치 (Branch from: `develop`)

| 기능 | Branch name |
|------|-------------|
| F-F1 프론트엔드 | `EPOCH-27-frontend` |
