"use client";

import { useState } from "react";

export default function TransitionDemo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          TailwindCSS Transition 강의
        </h1>

        {/* 기본 Transition 개념 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            1. 기본 Transition
          </h2>
          <p className="mb-6 text-gray-600">
            Transition은 CSS 속성이 변경될 때 부드러운 애니메이션 효과를
            만들어줍니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Duration 예제 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">
                Duration (지속시간)
              </h3>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150">
                  duration-150 (150ms)
                </button>
                <button className="block w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300">
                  duration-300 (300ms)
                </button>
                <button className="block w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-700">
                  duration-700 (700ms)
                </button>
              </div>
            </div>

            {/* Easing 예제 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">
                Easing (이징)
              </h3>
              <div className="space-y-2">
                <button className="block w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 ease-linear">
                  ease-linear
                </button>
                <button className="block w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300 ease-in">
                  ease-in
                </button>
                <button className="block w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300 ease-out">
                  ease-out
                </button>
                <button className="block w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors duration-300 ease-in-out">
                  ease-in-out
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Transitions */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            2. Transform Transitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scale */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Scale (크기 변화)
              </h3>
              <button
                onClick={() => setIsScaled(!isScaled)}
                className={`w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white font-semibold
                  transition-transform duration-300 ease-in-out
                  ${isScaled ? "scale-125" : "scale-100"}
                  hover:scale-110 active:scale-95`}
              >
                Click me
              </button>
              <p className="mt-2 text-sm text-gray-600">
                클릭해서 크기 변화 확인
              </p>
            </div>

            {/* Rotate */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Rotate (회전)
              </h3>
              <button
                onClick={() => setIsRotated(!isRotated)}
                className={`w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white font-semibold
                  transition-transform duration-500 ease-in-out
                  ${isRotated ? "rotate-180" : "rotate-0"}
                  hover:rotate-12`}
              >
                🔄
              </button>
              <p className="mt-2 text-sm text-gray-600">클릭해서 회전 확인</p>
            </div>

            {/* Translate */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Translate (이동)
              </h3>
              <div className="h-24 flex items-center justify-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full text-white font-semibold
                    transition-transform duration-300 ease-in-out
                    ${isExpanded ? "translate-x-8" : "translate-x-0"}
                    hover:translate-y-1`}
                >
                  →
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">클릭해서 이동 확인</p>
            </div>
          </div>
        </section>

        {/* 고급 Transition 효과 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            3. 고급 Transition 효과
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 색상 변화 + Transform 조합 */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                복합 효과
              </h3>
              <button
                onClick={() => setIsColorChanged(!isColorChanged)}
                className={`px-6 py-3 rounded-lg font-semibold text-white
                  transition-all duration-500 ease-in-out
                  ${
                    isColorChanged
                      ? "bg-gradient-to-r from-pink-500 to-red-500 scale-110 shadow-lg"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 scale-100 shadow-md"
                  }
                  hover:shadow-xl hover:scale-105`}
              >
                Magic Button ✨
              </button>
              <p className="mt-2 text-sm text-gray-600">
                색상, 크기, 그림자 동시 변화
              </p>
            </div>

            {/* Opacity 변화 */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Opacity (투명도)
              </h3>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="px-4 py-2 bg-gray-700 text-white rounded mb-4"
              >
                Toggle Visibility
              </button>
              <div
                className={`w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg
                  transition-opacity duration-500 ease-in-out
                  ${isVisible ? "opacity-100" : "opacity-20"}`}
              >
                <div className="flex items-center justify-center h-full text-white font-bold">
                  👀
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실전 예제 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            4. 실전 UI 예제
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 카드 hover 효과 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Hover Card</h4>
                <p className="text-sm text-gray-600 mt-1">
                  마우스를 올려보세요!
                </p>
              </div>
            </div>

            {/* 버튼 로딩 효과 */}
            <div className="flex flex-col space-y-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded transition-all duration-200 hover:bg-green-600 hover:scale-105 active:scale-95">
                Success Button
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded transition-all duration-200 hover:bg-red-600 hover:shadow-lg">
                Danger Button
              </button>
            </div>

            {/* 아이콘 회전 효과 */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl transition-transform duration-300 hover:rotate-180">
                ⚙️
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl transition-transform duration-300 hover:scale-125">
                💚
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-pink-500 hover:rounded-none">
                🎨
              </div>
            </div>
          </div>
        </section>

        {/* 팁 섹션 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            💡 Transition 활용 팁
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                transition-all
              </code>
              을 사용하면 모든 속성에 transition이 적용됩니다.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              성능을 위해{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                transform
              </code>
              과{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                opacity
              </code>{" "}
              속성을 우선 사용하세요.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                will-change-transform
              </code>
              을 사용하면 복잡한 애니메이션의 성능을 향상시킬 수 있습니다.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              접근성을 위해{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                motion-reduce:transition-none
              </code>
              을 고려하세요.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
