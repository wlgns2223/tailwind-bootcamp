"use client";

import { useState, useEffect } from "react";

export default function AnimationModalAnswer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 애니메이션 시작
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      // 모달이 닫힐 때 애니메이션 리셋
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* 모달 트리거 버튼 */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-violet-500 text-white rounded-lg font-semibold hover:bg-violet-600 hover:scale-105 transition-all duration-200"
        >
          🚀 모달 열기 (정답)
        </button>
      </div>

      {/* 모달 컨테이너 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 - 부드러운 페이드인 효과 */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isAnimating ? "opacity-50" : "opacity-0"
            }`}
            onClick={handleClose}
          ></div>

          {/* 모달 컨텐츠 - 스케일과 투명도 애니메이션 */}
          <div
            className={`relative bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl transition-all duration-300 transform ${
              isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
            }`}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 text-2xl transition-all duration-200"
            >
              ×
            </button>

            {/* 모달 내용 */}
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">완벽합니다!</h3>
              <p className="text-gray-600 mb-6">TailwindCSS로 아름다운 모달 애니메이션을 성공적으로 구현했습니다!</p>
              <div className="space-y-2">
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-2 bg-violet-500 text-white rounded-lg font-semibold hover:bg-violet-600 hover:shadow-lg transition-all duration-200"
                >
                  확인
                </button>
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
