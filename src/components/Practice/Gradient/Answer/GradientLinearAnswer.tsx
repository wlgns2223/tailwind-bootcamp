"use client";

import React from "react";

export default function GradientLinearAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      {/* 목표 CSS 설명 */}
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 목표 CSS:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`/* 1단계: 기본 선형 그라디언트 (좌에서 우로) */
.gradient-horizontal-basic {
  background: linear-gradient(to right, #60a5fa, #2563eb); /* from-blue-400 to-blue-600 */
  height: 8rem; /* h-32 */
  border-radius: 0.5rem; /* rounded-lg */
}

/* 2단계: 수직 그라디언트 (위에서 아래로) */
.gradient-vertical-basic {
  background: linear-gradient(to bottom, #c084fc, #9333ea); /* from-purple-400 to-purple-600 */
  height: 8rem;
  border-radius: 0.5rem;
}

/* 3단계: 대각선 그라디언트 (좌상단에서 우하단으로) */
.gradient-diagonal-basic {
  background: linear-gradient(to bottom right, #f472b6, #db2777); /* from-pink-400 to-pink-600 */
  height: 8rem;
  border-radius: 0.5rem;
}

/* 4단계: 3색 그라디언트 */
.gradient-three-colors-basic {
  background: linear-gradient(to right, #f87171, #facc15, #4ade80); /* from-red-400 via-yellow-400 to-green-400 */
  height: 8rem;
  border-radius: 0.5rem;
}

/* 5단계: 방사형 그라디언트 */
.gradient-radial {
  background: radial-gradient(circle, #fbbf24, #f59e0b); /* from-amber-400 to-amber-500 */
  height: 8rem;
  border-radius: 0.5rem;
}

/* 6단계: 복합 그라디언트 */
.gradient-complex {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb); /* 3색 대각선 */
  height: 8rem;
  border-radius: 0.5rem;
}`}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">1단계: 기본 선형 그라디언트</h3>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 rounded-lg"></div>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">2단계: 수직 그라디언트</h3>
          <div className="bg-gradient-to-b from-purple-400 to-purple-600 h-32 rounded-lg"></div>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">3단계: 대각선 그라디언트</h3>
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-32 rounded-lg"></div>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">4단계: 3색 그라디언트</h3>
          <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-32 rounded-lg"></div>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">5단계: 복합 그라디언트</h3>
          <div className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 h-32 rounded-lg shadow-lg"></div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">📝 사용된 TailwindCSS 클래스들:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">그라디언트 방향:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-gradient-to-r</code> - 왼쪽에서 오른쪽
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-gradient-to-l</code> - 오른쪽에서 왼쪽
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-gradient-to-t</code> - 아래에서 위로
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-gradient-to-b</code> - 위에서 아래로
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-gradient-to-br</code> - 왼쪽 위에서 오른쪽 아래
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">색상 정의:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">from-[color]</code> - 시작 색상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">via-[color]</code> - 중간 색상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">to-[color]</code> - 끝 색상
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
