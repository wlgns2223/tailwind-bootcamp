"use client";

import React from "react";

export default function TransitionDurationAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 빠른 전환
          </h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-150">
            빠른 전환 (150ms)
          </button>
          <p className="text-center mt-2 text-gray-600">duration-150</p>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 기본 전환
          </h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">
            기본 전환 (300ms)
          </button>
          <p className="text-center mt-2 text-gray-600">duration-300</p>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 느린 전환
          </h3>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-500">
            느린 전환 (500ms)
          </button>
          <p className="text-center mt-2 text-gray-600">duration-500</p>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 매우 느린 전환
          </h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-1000">
            매우 느린 전환 (1000ms)
          </button>
          <p className="text-center mt-2 text-gray-600">duration-1000</p>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 복합 전환 시간
          </h3>
          <div className="bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-lg hover:from-pink-600 hover:to-red-700 hover:scale-110 transition-all duration-700 shadow-md hover:shadow-xl cursor-pointer">
            <h4 className="text-white font-bold">복합 전환 효과</h4>
            <p className="text-pink-100">색상과 크기가 함께 변합니다</p>
          </div>
          <p className="text-center mt-2 text-gray-600">
            transition-all duration-700
          </p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">전환 시간:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-75
                </code>{" "}
                - 75ms
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-150
                </code>{" "}
                - 150ms
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-300
                </code>{" "}
                - 300ms
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-500
                </code>{" "}
                - 500ms
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  duration-1000
                </code>{" "}
                - 1000ms
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">전환 속성:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-all
                </code>{" "}
                - 모든 속성
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-colors
                </code>{" "}
                - 색상만
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-transform
                </code>{" "}
                - 변형만
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-shadow
                </code>{" "}
                - 그림자만
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
