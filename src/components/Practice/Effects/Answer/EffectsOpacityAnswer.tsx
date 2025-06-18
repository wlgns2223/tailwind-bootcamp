"use client";

import React from "react";

export default function EffectsOpacityAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 높은 투명도
          </h3>
          <div className="bg-blue-500 w-20 h-20 rounded-lg opacity-25 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">opacity-25</p>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 중간 투명도
          </h3>
          <div className="bg-green-500 w-20 h-20 rounded-lg opacity-50 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">opacity-50</p>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 낮은 투명도
          </h3>
          <div className="bg-purple-500 w-20 h-20 rounded-lg opacity-75 mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">opacity-75</p>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 호버 투명도 변경
          </h3>
          <div className="bg-red-500 w-20 h-20 rounded-lg opacity-50 hover:opacity-100 transition-opacity cursor-pointer mx-auto"></div>
          <p className="text-center mt-2 text-gray-600">
            opacity-50 hover:opacity-100
          </p>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 복합 투명도 효과
          </h3>
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 w-32 h-32 rounded-lg opacity-30 mx-auto"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 w-24 h-24 rounded-lg opacity-60 mx-auto mt-4 hover:opacity-90 transition-opacity cursor-pointer"></div>
          </div>
          <p className="text-center mt-2 text-gray-600">겹쳐진 투명도 효과</p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">투명도 효과:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  opacity-0
                </code>{" "}
                - 완전 투명
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  opacity-25
                </code>{" "}
                - 25% 불투명
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  opacity-50
                </code>{" "}
                - 50% 불투명
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  opacity-75
                </code>{" "}
                - 75% 불투명
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  opacity-100
                </code>{" "}
                - 완전 불투명
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">호버 및 전환:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:opacity-100
                </code>{" "}
                - 호버 투명도
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-opacity
                </code>{" "}
                - 투명도 전환
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-300
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
