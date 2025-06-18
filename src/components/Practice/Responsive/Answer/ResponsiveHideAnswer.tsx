"use client";

import React from "react";

export default function ResponsiveHideAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 gap-6">
        {/* 모바일만 표시 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            모바일에만 표시
          </h3>
          <div className="bg-blue-500 text-white p-4 rounded text-center block md:hidden">
            이 요소는 모바일에서만 보입니다
          </div>
          <div className="hidden md:block bg-gray-200 p-4 rounded text-center text-gray-600">
            데스크톱에서는 이 메시지가 표시됩니다
          </div>
          <p className="text-center mt-2 text-gray-600">block md:hidden</p>
        </div>

        {/* 태블릿만 표시 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            태블릿에만 표시
          </h3>
          <div className="bg-green-500 text-white p-4 rounded text-center hidden md:block lg:hidden">
            이 요소는 태블릿에서만 보입니다
          </div>
          <div className="block md:hidden lg:block bg-gray-200 p-4 rounded text-center text-gray-600">
            모바일과 데스크톱에서는 이 메시지가 표시됩니다
          </div>
          <p className="text-center mt-2 text-gray-600">
            hidden md:block lg:hidden
          </p>
        </div>

        {/* 데스크톱만 표시 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            데스크톱에만 표시
          </h3>
          <div className="bg-purple-500 text-white p-4 rounded text-center hidden lg:block">
            이 요소는 데스크톱에서만 보입니다
          </div>
          <div className="block lg:hidden bg-gray-200 p-4 rounded text-center text-gray-600">
            모바일과 태블릿에서는 이 메시지가 표시됩니다
          </div>
          <p className="text-center mt-2 text-gray-600">hidden lg:block</p>
        </div>

        {/* 복합 숨김/표시 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            복합 숨김/표시
          </h3>
          <div className="flex gap-4">
            <div className="flex-1 bg-red-400 text-white p-4 rounded text-center sm:hidden">
              아주 작은 화면만
            </div>
            <div className="flex-1 bg-blue-400 text-white p-4 rounded text-center hidden sm:block md:hidden">
              sm 사이즈만
            </div>
            <div className="flex-1 bg-green-400 text-white p-4 rounded text-center hidden md:block lg:hidden">
              md 사이즈만
            </div>
            <div className="flex-1 bg-purple-400 text-white p-4 rounded text-center hidden lg:block">
              lg 이상만
            </div>
          </div>
          <p className="text-center mt-2 text-gray-600">
            sm:hidden / hidden sm:block md:hidden / hidden md:block lg:hidden /
            hidden lg:block
          </p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">표시 클래스:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">block</code> -
                블록으로 표시
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  inline-block
                </code>{" "}
                - 인라인 블록으로 표시
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">flex</code> -
                플렉스로 표시
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">grid</code> -
                그리드로 표시
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">숨김 클래스:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">hidden</code> -
                완전 숨김
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  md:hidden
                </code>{" "}
                - md 이상에서 숨김
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  lg:hidden
                </code>{" "}
                - lg 이상에서 숨김
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  xl:hidden
                </code>{" "}
                - xl 이상에서 숨김
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
