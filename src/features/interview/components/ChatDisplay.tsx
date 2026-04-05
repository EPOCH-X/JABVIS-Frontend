/**
 * ================================================================
 * [프론트엔드] 모의면접 - 채팅 디스플레이 컴포넌트
 * ================================================================
 * 기능 요약:
 *   면접 질문/답변을 채팅 형태로 표시합니다.
 * ================================================================
 */

"use client";

interface Message {
  role: "interviewer" | "candidate";
  text: string;
}

interface ChatDisplayProps {
  messages?: Message[];
}

export default function ChatDisplay({ messages = [] }: ChatDisplayProps) {
  return (
    <div className="border rounded-lg p-4 h-[400px] overflow-y-auto">
      {messages.length === 0 ? (
        <p className="text-gray-400 text-center mt-8">면접이 시작되면 대화가 여기에 표시됩니다</p>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 ${msg.role === "interviewer" ? "text-left" : "text-right"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg text-sm ${
                msg.role === "interviewer"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-blue-600 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
