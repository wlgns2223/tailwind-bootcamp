"use client";

import { useState } from "react";

export default function AnimationKeyframeAnswer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* 커스텀 키프레임 CSS */}
      <style jsx>{`
        @keyframes modalBounceIn {
          0% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(10px) scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes modalSlideOut {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes overlayFadeIn {
          0% {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          100% {
            opacity: 1;
            backdrop-filter: blur(4px);
          }
        }

        @keyframes contentFadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes iconBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-10px) scale(1.1);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
        }

        .modal-bounce-in {
          animation: modalBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .modal-slide-out {
          animation: modalSlideOut 0.4s ease-in-out;
        }

        .overlay-fade-in {
          animation: overlayFadeIn 0.3s ease-out;
        }

        .content-fade-in-up {
          animation: contentFadeInUp 0.5s ease-out;
        }

        .content-fade-in-up-delay-1 {
          animation: contentFadeInUp 0.5s ease-out 0.1s both;
        }

        .content-fade-in-up-delay-2 {
          animation: contentFadeInUp 0.5s ease-out 0.2s both;
        }

        .content-fade-in-up-delay-3 {
          animation: contentFadeInUp 0.5s ease-out 0.3s both;
        }

        .icon-bounce {
          animation: iconBounce 2s infinite;
        }
      `}</style>

      {/* 모달 트리거 버튼 */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          🎭 키프레임 모달 (정답)
        </button>
      </div>

      {/* 모달 컨테이너 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 - 키프레임 애니메이션 */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 overlay-fade-in"
            style={{ backdropFilter: "blur(4px)" }}
            onClick={handleClose}
          ></div>

          {/* 모달 컨텐츠 - 키프레임 애니메이션 적용 */}
          <div
            className={`relative bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ${
              isClosing ? "modal-slide-out" : "modal-bounce-in"
            }`}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:rotate-90 text-3xl transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            {/* 모달 내용 - 순차적 키프레임 애니메이션 */}
            <div className="text-center">
              <div className="text-7xl mb-4 content-fade-in-up icon-bounce">🎉</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-800 content-fade-in-up-delay-1">키프레임 마스터!</h3>
              <p className="text-gray-600 mb-6 text-lg content-fade-in-up-delay-2">
                CSS @keyframes를 활용한 고급 애니메이션을 완벽하게 구현했습니다!
              </p>

              {/* 기능 설명 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 content-fade-in-up-delay-2">
                <div className="text-sm text-gray-700 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <span>✨</span>
                    <span>바운스 인 애니메이션</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🌊</span>
                    <span>순차적 콘텐츠 등장</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🎯</span>
                    <span>커스텀 이징 함수</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 content-fade-in-up-delay-3">
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  🚀 완벽해요!
                </button>
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
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
