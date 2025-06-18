"use client";

import React from "react";

export default function GradientLinearAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 기본 선형 그라디언트
          </h3>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 rounded-lg"></div>
          <p className="text-center mt-2 text-gray-600">
            bg-gradient-to-r from-blue-400 to-blue-600
          </p>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 수직 그라디언트
          </h3>
          <div className="bg-gradient-to-b from-purple-400 to-purple-600 h-32 rounded-lg"></div>
          <p className="text-center mt-2 text-gray-600">
            bg-gradient-to-b from-purple-400 to-purple-600
          </p>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 대각선 그라디언트
          </h3>
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-32 rounded-lg"></div>
          <p className="text-center mt-2 text-gray-600">
            bg-gradient-to-br from-pink-400 to-pink-600
          </p>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 3색 그라디언트
          </h3>
          <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-32 rounded-lg"></div>
          <p className="text-center mt-2 text-gray-600">
            from-red-400 via-yellow-400 to-green-400
          </p>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 복합 그라디언트
          </h3>
          <div className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 h-32 rounded-lg shadow-lg"></div>
          <p className="text-center mt-2 text-gray-600">
            bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400
          </p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">
              그라디언트 방향:
            </h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  bg-gradient-to-r
                </code>{" "}
                - 왼쪽에서 오른쪽
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  bg-gradient-to-l
                </code>{" "}
                - 오른쪽에서 왼쪽
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  bg-gradient-to-t
                </code>{" "}
                - 아래에서 위로
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  bg-gradient-to-b
                </code>{" "}
                - 위에서 아래로
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  bg-gradient-to-br
                </code>{" "}
                - 왼쪽 위에서 오른쪽 아래
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">색상 정의:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  from-[color]
                </code>{" "}
                - 시작 색상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  via-[color]
                </code>{" "}
                - 중간 색상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  to-[color]
                </code>{" "}
                - 끝 색상
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
