"use client";

import React from "react";

export default function ResponsiveBasicAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      {/* 목표 CSS 설명 */}
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 목표 CSS:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`/* 1단계: 반응형 텍스트 크기 */
.responsive-title {
  font-size: 1.5rem; /* 24px - 모바일 */
  font-weight: bold;
  text-align: center;
  color: #2563eb;
}

@media (min-width: 768px) {
  .responsive-title {
    font-size: 2.25rem; /* 36px - 태블릿 */
  }
}

@media (min-width: 1024px) {
  .responsive-title {
    font-size: 3.75rem; /* 60px - 데스크탑 */
  }
}

/* 2단계: 반응형 그리드 */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr; /* 모바일: 1열 */
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr); /* 태블릿: 2열 */
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr); /* 데스크탑: 4열 */
  }
}

/* 3단계: 반응형 패딩 */
.responsive-padding {
  padding: 0.5rem; /* 모바일: 8px */
}

@media (min-width: 768px) {
  .responsive-padding {
    padding: 1.5rem; /* 태블릿: 24px */
  }
}

@media (min-width: 1024px) {
  .responsive-padding {
    padding: 3rem; /* 데스크탑: 48px */
  }
}

/* 4단계: 반응형 숨김/표시 */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

.tablet-only {
  display: none;
}

@media (min-width: 768px) {
  .tablet-only {
    display: block;
  }
}

@media (min-width: 1024px) {
  .tablet-only {
    display: none;
  }
}

.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* 5단계: 복합 반응형 레이아웃 */
.responsive-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .responsive-layout {
    flex-direction: row;
  }
}

.main-content {
  width: 100%;
}

@media (min-width: 1024px) {
  .main-content {
    width: 66.666667%; /* 2/3 */
  }
}

.sidebar {
  width: 100%;
}

@media (min-width: 1024px) {
  .sidebar {
    width: 33.333333%; /* 1/3 */
  }
}`}
        </pre>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">1단계: 기본 반응형 텍스트</h3>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-blue-600">반응형 제목</h1>
          <p className="text-center mt-2 text-gray-600">text-2xl md:text-4xl lg:text-6xl</p>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">2단계: 반응형 그리드</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 p-4 rounded text-center">카드 1</div>
            <div className="bg-green-100 p-4 rounded text-center">카드 2</div>
            <div className="bg-yellow-100 p-4 rounded text-center">카드 3</div>
            <div className="bg-red-100 p-4 rounded text-center">카드 4</div>
          </div>
          <p className="text-center mt-2 text-gray-600">grid-cols-1 md:grid-cols-2 lg:grid-cols-4</p>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">3단계: 반응형 패딩</h3>
          <div className="bg-purple-100 p-2 md:p-6 lg:p-12 rounded text-center">
            <p>패딩이 화면 크기에 따라 변합니다</p>
          </div>
          <p className="text-center mt-2 text-gray-600">p-2 md:p-6 lg:p-12</p>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">4단계: 반응형 숨김/표시</h3>
          <div className="flex gap-4">
            <div className="bg-blue-500 text-white p-4 rounded block md:hidden">모바일에만 표시</div>
            <div className="bg-green-500 text-white p-4 rounded hidden md:block lg:hidden">태블릿에만 표시</div>
            <div className="bg-red-500 text-white p-4 rounded hidden lg:block">데스크탑에만 표시</div>
          </div>
          <p className="text-center mt-2 text-gray-600">
            block md:hidden / hidden md:block lg:hidden / hidden lg:block
          </p>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">5단계: 복합 반응형 레이아웃</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 bg-blue-50 p-4 rounded">
              <h4 className="text-lg font-semibold mb-2">메인 콘텐츠</h4>
              <p className="text-sm md:text-base">화면 크기에 따라 레이아웃이 변합니다.</p>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded">
              <h4 className="text-lg font-semibold mb-2">사이드바</h4>
              <p className="text-sm">사이드바 콘텐츠</p>
            </div>
          </div>
          <p className="text-center mt-2 text-gray-600">flex-col lg:flex-row + w-full lg:w-2/3 lg:w-1/3</p>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">📝 사용된 TailwindCSS 클래스들:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">반응형 접두사:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">sm:</code> - 640px 이상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">md:</code> - 768px 이상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">lg:</code> - 1024px 이상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">xl:</code> - 1280px 이상
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">2xl:</code> - 1536px 이상
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">주요 속성:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">grid-cols-[n]</code> - 그리드 열
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">text-[size]</code> - 텍스트 크기
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">p-[size]</code> - 패딩
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">hidden/block</code> - 표시/숨김
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
