"use client";

import React from "react";

export default function ResponsiveLayoutAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 gap-6">
        {/* 반응형 네비게이션 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            반응형 네비게이션
          </h3>
          <nav className="bg-blue-600 text-white p-4 rounded">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl font-bold mb-2 md:mb-0">로고</div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <a href="#" className="hover:text-blue-200">
                  홈
                </a>
                <a href="#" className="hover:text-blue-200">
                  서비스
                </a>
                <a href="#" className="hover:text-blue-200">
                  연락처
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* 반응형 카드 레이아웃 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            반응형 카드 레이아웃
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-gradient-to-br from-purple-400 to-pink-400 text-white p-6 rounded-lg shadow-md"
              >
                <h4 className="font-bold text-lg mb-2">카드 {num}</h4>
                <p className="text-sm">반응형 카드 콘텐츠</p>
              </div>
            ))}
          </div>
        </div>

        {/* 반응형 사이드바 레이아웃 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            반응형 사이드바 레이아웃
          </h3>
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded">
              <h4 className="font-semibold mb-4">사이드바</h4>
              <nav className="space-y-2">
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
                  메뉴 1
                </a>
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
                  메뉴 2
                </a>
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
                  메뉴 3
                </a>
              </nav>
            </aside>
            <main className="flex-1 bg-gray-50 p-6 rounded">
              <h4 className="text-xl font-semibold mb-4">메인 콘텐츠</h4>
              <p className="text-gray-700 mb-4">
                이 레이아웃은 모바일에서는 세로로, 데스크탑에서는 가로로
                배치됩니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">콘텐츠 블록 1</div>
                <div className="bg-white p-4 rounded shadow">콘텐츠 블록 2</div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">
              레이아웃 클래스:
            </h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  flex-col md:flex-row
                </code>{" "}
                - 방향 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  w-full lg:w-1/4
                </code>{" "}
                - 너비 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  grid-cols-1 sm:grid-cols-2
                </code>{" "}
                - 그리드 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  space-y-2 md:space-y-0
                </code>{" "}
                - 간격 변경
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">간격 및 크기:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  mb-2 md:mb-0
                </code>{" "}
                - 마진 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  p-4 md:p-6
                </code>{" "}
                - 패딩 변경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  text-sm md:text-base
                </code>{" "}
                - 텍스트 크기
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  gap-4 lg:gap-6
                </code>{" "}
                - 그리드 간격
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
