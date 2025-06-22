"use client";

import { useState } from "react";

export default function AnimationKeyframePractice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">
        📝 실습: 키프레임을 활용한 고급 모달 애니메이션 ( TailwindCSS 스타일로 정의)
      </h3>

      <p className="text-gray-700 mb-4">CSS @keyframes를 활용하여 더욱 다이나믹한 모달 애니메이션을 구현해보세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-indigo-500">
        <h4 className="font-semibold text-indigo-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 모달 등장: 위에서 떨어지면서 바운스 효과</li>
          <li>• 배경 오버레이: 서서히 나타나는 효과</li>
          <li>• 모달 내용: 순차적으로 페이드인 되는 요소들</li>
          <li>• 닫기 애니메이션: 아래로 사라지면서 스케일 축소</li>
          <li>• 커스텀 키프레임 정의 및 활용</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 키프레임 애니메이션을 구현해보세요:</h4>

        {/* 커스텀 CSS 스타일 - 학습자가 키프레임을 정의할 영역 */}
        <style jsx>{`
          /* 여기에 @keyframes를 정의하세요 */

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

          .modal-bounce-in {
            animation: modalBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .modal-slide-out {
            animation: modalSlideOut 0.4s ease-in-out;
          }

          .content-fade-in-up {
            animation: contentFadeInUp 0.5s ease-out;
          }

          .content-fade-in-up-delay {
            animation: contentFadeInUp 0.5s ease-out 0.2s both;
          }
        `}</style>

        {/* 모달 트리거 버튼 */}
        <div className="text-center mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            🎭 키프레임 모달 열기
          </button>
        </div>

        {/* 모달 컨테이너 */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 배경 오버레이 - 여기에 페이드인 애니메이션 클래스를 추가하세요 */}
            <div
              className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* 모달 컨텐츠 - 여기에 키프레임 애니메이션 클래스를 추가하세요 */}
            <div className="relative bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl">
              {/* 닫기 버튼 */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 text-3xl transition-all duration-300"
              >
                ×
              </button>

              {/* 모달 내용 - 여기에 순차적 애니메이션 클래스를 추가하세요 */}
              <div className="text-center">
                <div className="text-7xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800">키프레임 마스터!</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  CSS @keyframes를 활용한 고급 애니메이션을 성공적으로 구현했습니다!
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    🚀 완료!
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
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

      {/* 키프레임 가이드 */}
      <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-4">
        <h4 className="font-semibold text-purple-800 mb-2">🎯 키프레임 구현 가이드:</h4>
        <div className="text-sm text-purple-700 space-y-2">
          <div>
            <strong>1. 모달 등장 애니메이션:</strong>
            <br />
            <code className="bg-purple-200 px-1 rounded">modal-bounce-in</code> 클래스를 모달 컨테이너에 추가
          </div>
          <div>
            <strong>2. 배경 오버레이:</strong>
            <br />
            <code className="bg-purple-200 px-1 rounded">animate-fadeIn</code> 또는 커스텀 페이드 클래스 추가
          </div>
          <div>
            <strong>3. 내용 순차 애니메이션:</strong>
            <br />
            <code className="bg-purple-200 px-1 rounded">content-fade-in-up</code>와{" "}
            <code className="bg-purple-200 px-1 rounded">content-fade-in-up-delay</code> 클래스 활용
          </div>
          <div>
            <strong>💫 추가 도전:</strong> 각 요소에 다른 delay 값을 적용해 순차적 등장 효과 만들기
          </div>
        </div>
      </div>
    </div>
  );
}
