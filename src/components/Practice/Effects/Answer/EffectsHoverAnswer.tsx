"use client";

import React from "react";

export default function EffectsHoverAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 기본 호버 효과
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            호버 색상 변경
          </button>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 호버 크기 변화
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer border">
            <h4 className="font-semibold">호버 확대 카드</h4>
            <p className="text-gray-600">마우스를 올리면 커집니다.</p>
          </div>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 호버 그림자 변화
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer border">
            <h4 className="font-semibold">호버 그림자 카드</h4>
            <p className="text-gray-600">
              마우스를 올리면 그림자가 강해집니다.
            </p>
          </div>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 복합 호버 효과
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h4 className="font-semibold">복합 호버 카드</h4>
            <p className="text-gray-600">여러 효과가 동시에 적용됩니다.</p>
          </div>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 고급 애니메이션 호버
          </h3>
          <div className="group bg-gradient-to-br from-purple-400 to-blue-500 p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:rotate-2 hover:scale-110 transition-all duration-500 cursor-pointer">
            <h4 className="text-white font-bold group-hover:text-yellow-200 transition-colors">
              고급 애니메이션 카드
            </h4>
            <p className="text-purple-100 group-hover:text-white transition-colors">
              복잡한 호버 애니메이션이 적용됩니다.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">호버 효과:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:bg-blue-700
                </code>{" "}
                - 호버 배경색
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:scale-105
                </code>{" "}
                - 호버 크기 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:shadow-xl
                </code>{" "}
                - 호버 그림자
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  hover:rotate-2
                </code>{" "}
                - 호버 회전
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  group-hover:
                </code>{" "}
                - 그룹 호버
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">전환 효과:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-colors
                </code>{" "}
                - 색상 전환
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-transform
                </code>{" "}
                - 변형 전환
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-shadow
                </code>{" "}
                - 그림자 전환
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  transition-all
                </code>{" "}
                - 모든 전환
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
