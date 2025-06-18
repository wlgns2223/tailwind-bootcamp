"use client";

import { useState } from "react";

export default function TransitionPractice() {
  // 실습을 위한 상태값들
  const [isClicked, setIsClicked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Transition 실습 템플릿
        </h1>

        {/* 실습 1: 기본 Hover 효과 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            실습 1: 기본 Hover 효과 만들기
          </h2>
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-gray-700 mb-2">
              <strong>목표:</strong> 아래 버튼에 hover시 배경색이 부드럽게
              변하도록 만들어보세요.
            </p>
            <p className="text-sm text-gray-600">
              힌트: <code>transition-colors</code>, <code>duration-300</code>,{" "}
              <code>hover:bg-blue-600</code> 클래스를 사용하세요.
            </p>
          </div>

          {/* TODO: 여기에 transition 클래스들을 추가해보세요 */}
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold">
            Hover Me! (실습 대상)
          </button>

          {/* 정답 예시 (주석 처리) */}
          {/* 
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600">
            Hover Me!
          </button>
          */}
        </section>

        {/* 실습 2: Transform 효과 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            실습 2: Transform 효과 만들기
          </h2>
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-gray-700 mb-2">
              <strong>목표:</strong> 카드에 hover시 살짝 위로 올라가고 그림자가
              커지도록 만들어보세요.
            </p>
            <p className="text-sm text-gray-600">
              힌트: <code>transition-all</code>,{" "}
              <code>hover:-translate-y-2</code>, <code>hover:shadow-lg</code>{" "}
              클래스를 사용하세요.
            </p>
          </div>

          {/* TODO: 여기에 transition과 hover 효과를 추가해보세요 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">카드 제목</h3>
              <p className="text-gray-600 mt-2">카드에 마우스를 올려보세요!</p>
            </div>
          </div>

          {/* 정답 예시 (주석 처리) */}
          {/* 
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            ...
          </div>
          */}
        </section>

        {/* 실습 3: 클릭 애니메이션 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            실습 3: 클릭 애니메이션 만들기
          </h2>
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-gray-700 mb-2">
              <strong>목표:</strong> 버튼 클릭시 상태에 따라 크기가 변하도록
              만들어보세요.
            </p>
            <p className="text-sm text-gray-600">
              힌트: <code>useState</code>를 사용하고, 조건부로{" "}
              <code>scale-110</code> 클래스를 적용하세요.
            </p>
          </div>

          {/* TODO: 클릭시 크기가 변하는 애니메이션을 만들어보세요 */}
          <button
            onClick={() => setIsClicked(!isClicked)}
            className={`px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold
              transition-transform duration-200
              /* 여기에 조건부 클래스를 추가하세요 */
            `}
          >
            {isClicked ? "클릭됨! 🎉" : "클릭해보세요!"}
          </button>

          {/* 정답 예시 (주석 처리) */}
          {/* 
          className={`px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold
            transition-transform duration-200
            ${isClicked ? 'scale-110' : 'scale-100'}
          `}
          */}
        </section>

        {/* 실습 4: 복합 애니메이션 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            실습 4: 복합 애니메이션 만들기
          </h2>
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-gray-700 mb-2">
              <strong>목표:</strong> 다음 요소들이 동시에 변하는 애니메이션을
              만들어보세요:
            </p>
            <ul className="text-sm text-gray-600 ml-4">
              <li>• 배경색 변화</li>
              <li>• 회전 효과</li>
              <li>• 크기 변화</li>
              <li>• 그림자 효과</li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => setCurrentStep(currentStep === 1 ? 2 : 1)}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              애니메이션 토글
            </button>

            {/* TODO: 복합 애니메이션 효과를 만들어보세요 */}
            <div
              className={`w-24 h-24 rounded-lg flex items-center justify-center text-2xl
                transition-all duration-500 ease-in-out
                ${
                  currentStep === 1
                    ? "bg-red-500"
                    : "bg-blue-500" /* 여기에 더 많은 스타일을 추가하세요 */
                }
              `}
            >
              🎯
            </div>

            {/* 정답 예시 (주석 처리) */}
            {/* 
            className={`w-24 h-24 rounded-lg flex items-center justify-center text-2xl
              transition-all duration-500 ease-in-out
              ${currentStep === 1 
                ? 'bg-red-500 rotate-0 scale-100 shadow-md' 
                : 'bg-blue-500 rotate-180 scale-125 shadow-xl'
              }
            `}
            */}
          </div>
        </section>

        {/* 실습 5: 자유 실습 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            실습 5: 자유 실습
          </h2>
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-gray-700 mb-2">
              <strong>도전 과제:</strong> 창의적인 transition 효과를
              만들어보세요!
            </p>
            <p className="text-sm text-gray-600">
              예시: 로딩 스피너, 메뉴 슬라이드, 탭 전환, 모달 팝업 등
            </p>
          </div>

          {/* 자유 실습 공간 */}
          <div className="min-h-32 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
            <p className="text-gray-500 text-center">
              여기에 자유롭게 실습해보세요! 🎨
              <br />
              <span className="text-sm">
                HTML 구조와 TailwindCSS 클래스를 자유롭게 추가하세요.
              </span>
            </p>
          </div>
        </section>

        {/* 참고 자료 */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            📚 참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                주요 Transition 클래스
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    transition-all
                  </code>{" "}
                  - 모든 속성
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    transition-colors
                  </code>{" "}
                  - 색상
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    transition-transform
                  </code>{" "}
                  - 변형
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    transition-opacity
                  </code>{" "}
                  - 투명도
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Duration & Easing
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    duration-150/300/500/700
                  </code>
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    ease-linear/in/out/in-out
                  </code>
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    delay-75/150/300/500
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
