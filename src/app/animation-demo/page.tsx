import AnimationDemoModule from "../../components/AnimationDemo/AnimationDemoModule";
import AnimationDemo from "../../components/AnimationDemo/AnimationDemoTailwind";
import Navigation from "../../components/Navigation";
import LiveCodingDemoAnimation from "../../components/LiveCoding/LiveCodingDemoAnimation";

export default function AnimationDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">TailwindCSS Animation 강의 데모</h1>
            <p className="text-lg text-gray-600">CSS Module을 TailwindCSS로 번역하는 방법을 학습합니다</p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              아래는 CSS Module로 작성된 원본 애니메이션 컴포넌트입니다. 좌측은 결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">🎨 CSS Module 예제</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <AnimationDemoModule.AnimationDemo />
                </div>
              </div>

              {/* CSS Module 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">💻 CSS Module 코드</h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-green-400 p-4 rounded overflow-x-auto h-full">
                    {`.container {
  width: 100%;
  padding: 1rem;
  background-color: #f9fafb; /* gray-50 */
  border-radius: 0.5rem;
}

.card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  font-weight: 500;
}

.spin {
  background-color: #ef4444; /* red-500 */
  animation: spin 2s linear infinite;
}

.pulse {
  background-color: #3b82f6; /* blue-500 */
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.bounce {
  background-color: #22c55e; /* green-500 */
  animation: bounce 1s infinite;
}

.ping {
  background-color: #8b5cf6; /* purple-500 */
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  50% { opacity: .5; }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - 강사 코딩 영역
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 CSS Module을 TailwindCSS로 번역하는 과정을 보여주는 영역입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 실시간 코딩 결과 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">🎯 실시간 코딩 결과</h3>
                <LiveCodingDemoAnimation />
              </div>

              {/* 실시간 코딩 과정 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">💻 실시간 코딩 과정</h3>
                <div className="h-full">
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Animation 강의 진행 순서</h4>
                    <ol className="text-sm text-orange-700 space-y-2">
                      <li>1️⃣ 기본 컨테이너 및 레이아웃 클래스 작성</li>
                      <li>
                        2️⃣ Spin 애니메이션: <code className="bg-orange-200 px-1 rounded">animate-spin</code>
                      </li>
                      <li>
                        3️⃣ Pulse 애니메이션: <code className="bg-orange-200 px-1 rounded">animate-pulse</code>
                      </li>
                      <li>
                        4️⃣ Bounce 애니메이션: <code className="bg-orange-200 px-1 rounded">animate-bounce</code>
                      </li>
                      <li>5️⃣ Ping 효과 및 Hover 애니메이션</li>
                      <li>6️⃣ 최종 결과 확인 및 성능 최적화</li>
                    </ol>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                    <p className="text-xs text-yellow-700">
                      💡 <strong>강사 팁:</strong> 각 애니메이션의 특성을 이해하고 적절한 사용 사례를 함께 설명해주세요!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TailwindCSS 번역본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              ✨ TailwindCSS 번역본
            </h2>
            <p className="text-gray-600 mb-6">
              CSS Module을 TailwindCSS 클래스로 번역한 결과입니다. 좌측은 결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">🎨 TailwindCSS 예제</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <AnimationDemo />
                </div>
              </div>

              {/* TailwindCSS 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">💻 TailwindCSS 코드</h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-blue-400 p-4 rounded overflow-x-auto h-full">
                    {`<div className="w-full p-4 bg-gray-50 rounded-lg">
  <h2 className="text-xl font-semibold mb-6 text-gray-700">
    Animation Examples
  </h2>
  
  {/* 기본 애니메이션 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div className="p-6 rounded-lg text-center text-white bg-red-500 animate-spin font-medium">
      Spinning Card
    </div>
    <div className="p-6 rounded-lg text-center text-white bg-blue-500 animate-pulse font-medium">
      Pulsing Card
    </div>
    <div className="p-6 rounded-lg text-center text-white bg-green-500 animate-bounce font-medium">
      Bouncing Card
    </div>
  </div>
  
  {/* 고급 애니메이션 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-6 rounded-lg text-center text-white bg-purple-500 animate-ping font-medium">
      Ping Effect
    </div>
    <div className="p-6 rounded-lg text-center text-white bg-yellow-500 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 cursor-pointer font-medium">
      Hover Animation
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 번역 가이드 */}
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">📖 CSS → TailwindCSS 애니메이션 번역 가이드</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 기본 애니메이션 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">기본 애니메이션 번역</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">animation: spin 2s linear infinite;</div>
                    <div className="font-mono text-sm text-blue-600">→ animate-spin</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">animation: pulse 2s infinite;</div>
                    <div className="font-mono text-sm text-blue-600">→ animate-pulse</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">animation: bounce 1s infinite;</div>
                    <div className="font-mono text-sm text-blue-600">→ animate-bounce</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">animation: ping 1s infinite;</div>
                    <div className="font-mono text-sm text-blue-600">→ animate-ping</div>
                  </div>
                </div>
              </div>

              {/* Transition 및 Transform 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Transition & Transform 번역</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transition: all 0.3s ease;</div>
                    <div className="font-mono text-sm text-blue-600">→ transition-all duration-300</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transform: scale(1.1);</div>
                    <div className="font-mono text-sm text-blue-600">→ hover:scale-110</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transform: rotate(45deg);</div>
                    <div className="font-mono text-sm text-blue-600">→ rotate-45</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transform: translateX(100%);</div>
                    <div className="font-mono text-sm text-blue-600">→ translate-x-full</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">cursor: pointer;</div>
                    <div className="font-mono text-sm text-blue-600">→ cursor-pointer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 번역 팁 */}
            <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 애니메이션 번역 팁</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• TailwindCSS는 기본 애니메이션을 utility 클래스로 제공합니다</li>
                <li>• hover: 접두사로 인터랙션 애니메이션을 적용할 수 있습니다</li>
                <li>• duration-300, duration-500 등으로 애니메이션 지속 시간을 조절합니다</li>
                <li>• 복잡한 커스텀 애니메이션은 @keyframes를 직접 정의해야 합니다</li>
                <li>• 성능을 위해 transform과 opacity 속성을 우선 사용하세요</li>
              </ul>
            </div>
          </section>

          {/* 강의 포인트 */}
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">🎯 애니메이션 강의 포인트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-600">1단계: 기본 애니메이션</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• animate-spin (로딩 스피너)</li>
                  <li>• animate-pulse (로딩 상태)</li>
                  <li>• animate-bounce (주목 유도)</li>
                  <li>• animate-ping (알림 효과)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: 인터랙션 애니메이션</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• hover:scale-110 (버튼 효과)</li>
                  <li>• hover:rotate-12 (카드 효과)</li>
                  <li>• transition-all (부드러운 전환)</li>
                  <li>• duration-300 (적절한 타이밍)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">3단계: 실전 활용</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 로딩 인디케이터 구현</li>
                  <li>• 버튼 호버 효과 디자인</li>
                  <li>• 카드 인터랙션 애니메이션</li>
                  <li>• 성능 최적화 고려사항</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>💡 강의 팁:</strong> 애니메이션은 사용자 경험을 향상시키는 도구입니다. 과도하지 않게 사용하고,
                접근성을 고려하여 prefers-reduced-motion을 존중하도록 안내하세요.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
