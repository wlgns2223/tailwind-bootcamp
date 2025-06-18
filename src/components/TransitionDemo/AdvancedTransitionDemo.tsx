"use client";

import { useState, useEffect } from "react";
import styles from "./TransitionDemo.module.css";

export default function AdvancedTransitionDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // 프로그레스 바 애니메이션
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsLoading(false);
            setNotification("완료되었습니다! ✅");
            setTimeout(() => setNotification(""), 3000);
            return 0;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const tabs = ["홈", "소개", "서비스", "연락처"];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          고급 Transition & Animation 예제
        </h1>

        {/* 알림 메시지 */}
        {notification && (
          <div
            className={`fixed top-4 right-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg z-50
            transition-all duration-300 transform
            ${
              notification
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {notification}
          </div>
        )}

        {/* 로딩 및 프로그레스 섹션 */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            로딩 & 프로그레스 애니메이션
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 프로그레스 바 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">
                프로그레스 바
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setProgress(0);
                }}
                disabled={isLoading}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg transition-all duration-200 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "로딩 중..." : "시작하기"}
              </button>
            </div>

            {/* 스피너 애니메이션 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">로딩 스피너</h3>
              <div className="flex items-center justify-center space-x-4">
                <div
                  className={`w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full ${styles.spinner}`}
                ></div>
                <div
                  className={`w-6 h-6 bg-blue-500 rounded-full ${styles.pulseAnimation}`}
                ></div>
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-6 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 탭 네비게이션 */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            탭 네비게이션 애니메이션
          </h2>

          <div className="relative">
            {/* 탭 헤더 */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(index)}
                  className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${
                      selectedTab === index
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  {tab}
                  {selectedTab === index && (
                    <div
                      className="absolute inset-0 bg-white rounded-md shadow-sm transition-all duration-300"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* 탭 컨텐츠 */}
            <div className="mt-6 p-6 bg-gray-50 rounded-lg min-h-32">
              <div
                className={`transition-all duration-300 transform ${
                  selectedTab >= 0
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {tabs[selectedTab]} 컨텐츠
                </h3>
                <p className="text-gray-600 mt-2">
                  {selectedTab === 0 && "홈페이지에 오신 것을 환영합니다! 🏠"}
                  {selectedTab === 1 &&
                    "우리는 혁신적인 솔루션을 제공하는 회사입니다. 💼"}
                  {selectedTab === 2 &&
                    "다양한 서비스를 통해 고객의 성공을 지원합니다. 🚀"}
                  {selectedTab === 3 &&
                    "언제든지 연락주세요. 친절하게 상담해드립니다. 📞"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 카드 갤러리 */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            인터랙티브 카드 갤러리
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 3D 플립 카드 */}
            <div className={`${styles.flipContainer} h-48`}>
              <div
                className={`${styles.flipCard} relative w-full h-full cursor-pointer`}
                onClick={(e) =>
                  e.currentTarget.classList.toggle(styles.flipped)
                }
              >
                <div
                  className={`${styles.flipCardFront} bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl p-6 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="font-semibold">3D 플립 카드</h3>
                    <p className="text-sm opacity-90">클릭해보세요!</p>
                  </div>
                </div>
                <div
                  className={`${styles.flipCardBack} bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl p-6 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">✨</div>
                    <h3 className="font-semibold">뒷면입니다!</h3>
                    <p className="text-sm opacity-90">CSS 3D Transform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 그라디언트 애니메이션 카드 */}
            <div
              className={`${styles.gradientShift} rounded-xl p-6 text-white h-48 flex items-center justify-center transition-transform duration-300 hover:scale-105`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🌈</div>
                <h3 className="font-semibold">그라디언트 애니메이션</h3>
                <p className="text-sm opacity-90">자동으로 색상이 변해요!</p>
              </div>
            </div>

            {/* 글로우 효과 카드 */}
            <div
              className={`${styles.glowEffect} bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white h-48 flex items-center justify-center cursor-pointer`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">💎</div>
                <h3 className="font-semibold">글로우 효과</h3>
                <p className="text-sm opacity-90">마우스를 올려보세요!</p>
              </div>
            </div>
          </div>
        </section>

        {/* 모달 데모 */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            모달 애니메이션
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            모달 열기 🚀
          </button>

          {/* 모달 */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* 배경 오버레이 */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={() => setIsModalOpen(false)}
              />

              {/* 모달 컨텐츠 */}
              <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    성공!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    아름다운 모달 애니메이션이 완성되었습니다.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg transition-colors duration-200 hover:bg-gray-600"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 실전 마이크로 인터랙션 */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            마이크로 인터랙션 예제
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 좋아요 버튼 */}
            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-4">좋아요 버튼</h3>
              <button className="group px-4 py-2 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-active:scale-75">
                  ❤️
                </span>
              </button>
            </div>

            {/* 알림 벨 */}
            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-4">알림 벨</h3>
              <button className="group px-4 py-2 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg">
                <span className="text-2xl transition-transform duration-300 group-hover:animate-bounce">
                  🔔
                </span>
              </button>
            </div>

            {/* 설정 아이콘 */}
            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-4">설정</h3>
              <button className="group px-4 py-2 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg">
                <span className="text-2xl transition-transform duration-500 group-hover:rotate-180">
                  ⚙️
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
