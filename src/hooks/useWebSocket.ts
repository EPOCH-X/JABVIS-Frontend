/**
 * ================================================================
 * [공통] 커스텀 훅 - useWebSocket
 * ================================================================
 * 기능 요약:
 *   WebSocket 연결 관리 훅입니다.
 *   모의면접 실시간 통신에 사용됩니다.
 * ================================================================
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function useWebSocket(url: string) {
  const wsRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    const ws = new WebSocket(url);
    ws.onopen = () => setIsConnected(true);
    ws.onclose = () => setIsConnected(false);
    wsRef.current = ws;
  };

  const disconnect = () => {
    wsRef.current?.close();
  };

  const send = (data: string | ArrayBuffer) => {
    wsRef.current?.send(data);
  };

  useEffect(() => {
    return () => {
      wsRef.current?.close();
    };
  }, []);

  return { connect, disconnect, send, isConnected, ws: wsRef };
}
