"use client";

import { useState } from "react";

export default function TransitionEffectsPractice() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          복합 Transition 효과 만들기:
        </h4>
        <div className="flex gap-4">
          <div className="">색상 + 크기</div>
          <div className="">회전 + 그림자</div>
          <div className="">위치 + 투명도</div>
        </div>
      </div>

      <div className="space-y-8">
        {/* 실습 1: 기본 Hover 효과 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            실습 1: 기본 Hover 효과
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            hover시 배경색이 부드럽게 변하도록 만들어보세요.
          </p>
          {/* TODO: 여기에 transition 클래스들을 추가해보세요 */}
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold">
            Hover Me! (실습 대상)
          </button>
        </div>

        {/* 실습 2: Transform 효과 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            실습 2: Transform 효과
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            카드에 hover시 살짝 위로 올라가고 그림자가 커지도록 만들어보세요.
          </p>
          {/* TODO: 여기에 transition과 hover 효과를 추가해보세요 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">카드 제목</h3>
              <p className="text-gray-600 text-sm mt-1">
                카드에 마우스를 올려보세요!
              </p>
            </div>
          </div>
        </div>

        {/* 실습 3: 클릭 애니메이션 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <h4 className="text-md font-semibold mb-3 text-gray-600">
            실습 3: 클릭 애니메이션
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            버튼 클릭시 상태에 따라 크기가 변하도록 만들어보세요.
          </p>
          {/* TODO: 클릭시 크기가 변하는 애니메이션을 만들어보세요 */}
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold"
          >
            {isClicked ? "클릭됨!" : "클릭해보세요"}
          </button>
        </div>
      </div>
    </div>
  );
}
