"use client";

import { useState } from "react";

export default function TransitionEffectsAnswer() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 예시 - 트랜지션 효과
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50 space-y-8">
        {/* 정답 1: 기본 Hover 효과 */}
        <div className="border border-green-200 rounded-lg p-4 bg-white">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            정답 1: 기본 Hover 효과
          </h4>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600">
            Hover Me! (정답)
          </button>
        </div>

        {/* 정답 2: Transform 효과 */}
        <div className="border border-green-200 rounded-lg p-4 bg-white">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            정답 2: Transform 효과
          </h4>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">카드 제목</h3>
              <p className="text-gray-600 text-sm mt-1">
                카드에 마우스를 올려보세요!
              </p>
            </div>
          </div>
        </div>

        {/* 정답 3: 클릭 애니메이션 */}
        <div className="border border-green-200 rounded-lg p-4 bg-white">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            정답 3: 클릭 애니메이션
          </h4>
          <button
            onClick={() => setIsClicked(!isClicked)}
            className={`px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold transition-transform duration-200 ${
              isClicked ? "scale-110" : "scale-100"
            }`}
          >
            {isClicked ? "클릭됨!" : "클릭해보세요"}
          </button>
        </div>
      </div>
    </div>
  );
}
