"use client";

import React from "react";

export default function EffectsTransformAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 기본 회전
          </h3>
          <div className="bg-blue-500 w-20 h-20 rounded-lg rotate-12 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">rotate-12</p>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 크기 변경
          </h3>
          <div className="bg-green-500 w-20 h-20 rounded-lg scale-125 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">scale-125</p>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 이동
          </h3>
          <div className="bg-purple-500 w-20 h-20 rounded-lg translate-x-4 translate-y-2 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">
            translate-x-4 translate-y-2
          </p>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 기울기
          </h3>
          <div className="bg-red-500 w-20 h-20 rounded-lg skew-x-12 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">skew-x-12</p>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 복합 변형
          </h3>
          <div className="bg-gradient-to-br from-pink-400 to-red-500 w-24 h-24 rounded-lg rotate-12 scale-110 translate-x-2 mx-auto hover:rotate-45 hover:scale-125 transition-transform duration-500"></div>
          <p className="text-center mt-2 text-gray-600">
            rotate-12 scale-110 translate-x-2 + hover effects
          </p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">변형 효과:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  rotate-12
                </code>{" "}
                - 12도 회전
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  scale-125
                </code>{" "}
                - 125% 크기
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  translate-x-4
                </code>{" "}
                - X축 이동
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  translate-y-2
                </code>{" "}
                - Y축 이동
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  skew-x-12
                </code>{" "}
                - X축 기울기
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">호버 및 전환:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:rotate-45
                </code>{" "}
                - 호버 회전
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:scale-125
                </code>{" "}
                - 호버 크기
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-transform
                </code>{" "}
                - 변형 전환
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-500
                </code>{" "}
                - 전환 시간
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
