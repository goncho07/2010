// src/config/env.ts
export function resolveEnv() {
  const viteEnv =
    typeof import.meta !== 'undefined' && (import.meta as any).env
      ? (import.meta as any).env
      : {};

  const runtimeEnv =
    typeof window !== 'undefined' && (window as any).__ENV__
      ? (window as any).__ENV__
      : {};

  return {
    API_BASE_URL:
      viteEnv.VITE_API_BASE_URL ??
      runtimeEnv.VITE_API_BASE_URL ??
      'http://localhost:8080/api',
  };
}
