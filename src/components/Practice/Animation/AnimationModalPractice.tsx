"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function AnimationModalPractice() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [animationTimer, setAnimationTimer] = useState<NodeJS.Timeout>();
  const [openerTimer, setOpenerTimer] = useState<NodeJS.Timeout>();
  const ANIMATION_TIME = 10;

  useEffect(() => {
    if (isOpen) {
      const animationTimeout = setTimeout(() => setIsAnimated(true), ANIMATION_TIME);
      setAnimationTimer(animationTimeout);
    } else {
      setIsAnimated(false);
      clearTimeout(animationTimer);
      clearTimeout(openerTimer);
    }

    return () => {
      if (animationTimer) {
        clearTimeout(animationTimer);
      }

      if (openerTimer) {
        clearTimeout(openerTimer);
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimated(false);
    const openTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
    setOpenerTimer(openTimeout);
  };

  return (
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-violet-700">📝 실습: 모달 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-violet-500">
        <h4 className="font-semibold text-violet-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 모달 버튼 클릭 시 자연스럽게 모달 창이 열림</li>
          <li>• 배경 오버레이: 투명도 애니메이션 (0 → 0.5)</li>
          <li>• 모달 컨테이너: 크기와 투명도 애니메이션 (작게 시작 → 정상 크기)</li>
          <li>• 닫기 버튼으로 모달을 닫을 수 있음</li>
          <li>• 부드러운 전환 효과 (300ms)</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 여기에 애니메이션 클래스를 추가해보세요:</h4>

        {/* 모달 트리거 버튼 */}
        <div className="text-center mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-violet-500 text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
          >
            🚀 모달 열기
          </button>
        </div>

        {/* 모달 컨테이너 */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 배경 오버레이 - 여기에 투명도 애니메이션을 추가하세요 */}
            <div
              className={clsx("absolute inset-0 bg-black opacity-0 transition duration-1000", {
                "opacity-50": isAnimated,
              })}
              onClick={handleClose}
            ></div>

            {/* 모달 컨텐츠 - 여기에 스케일과 투명도 애니메이션을 추가하세요 */}
            <div
              className={clsx(
                "relative bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl transition duration-1000 scale-75 opacity-0 ",
                {
                  "scale-100 opacity-100": isAnimated,
                }
              )}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              >
                ×
              </button>

              {/* 모달 내용 */}
              <div className="text-center">
                <div className="text-6xl mb-4">�</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">실습 중입니다!</h3>
                <p className="text-gray-600 mb-6">
                  이 모달에 애니메이션을 추가해보세요. 목표 결과와 비교해보며 완성해보세요!
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-violet-500 text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 추가 설명 */}
      <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">💡 구현 가이드:</h4>
        <div className="text-sm text-blue-700 space-y-2">
          <div>
            <strong>1. 배경 오버레이 애니메이션:</strong>
            <br />
            <code className="bg-blue-200 px-1 rounded">transition-opacity duration-300</code> 추가
          </div>
          <div>
            <strong>2. 모달 등장 애니메이션:</strong>
            <br />
            <code className="bg-blue-200 px-1 rounded">transition-all duration-300 transform</code> 추가
          </div>
          <div>
            <strong>3. 애니메이션 효과:</strong>
            <br />
            모달이 작게 시작하여 자연스럽게 확대되는 효과를 만들어보세요
          </div>
          <div>
            <strong>💫 추가 도전:</strong> 모달 내부 아이콘에{" "}
            <code className="bg-blue-200 px-1 rounded">animate-pulse</code> 효과 추가해보기
          </div>
        </div>
      </div>
    </div>
  );
}
