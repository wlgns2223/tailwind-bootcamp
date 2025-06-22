import TransitionDemoModule from "../../components/TransitionDemo/TransitionDemoModule";
import TransitionDemo from "../../components/TransitionDemo/TransitionDemo";
import Navigation from "../../components/Navigation";
import LiveCodingDemo from "../../components/LiveCoding/LiveCodingDemo";

export default function TransitionDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">TailwindCSS Transition 강의 데모</h1>
            <p className="text-lg text-gray-600">CSS Module을 TailwindCSS로 번역하는 방법을 학습합니다</p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">아래는 CSS Module로 작성된 원본 컴포넌트입니다.</p>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <TransitionDemoModule.TransitionDemo />
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - 강사 코딩 영역
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 Success Button을 단계별로 구현하는 과정을 보여주는 영역입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 실시간 코딩 결과 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">🎯 실시간 코딩 결과</h3>
                <LiveCodingDemo />
              </div>

              {/* 실시간 코딩 과정 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">💻 실시간 코딩 과정</h3>
                <div className="h-full">
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Success Button 구현 가이드</h4>
                    <ol className="text-sm text-orange-700 space-y-2">
                      <li>
                        1️⃣ 기본 버튼 스타일:{" "}
                        <code className="bg-orange-200 px-1 rounded">px-4 py-2 bg-green-500 text-white rounded</code>
                      </li>
                      <li>
                        2️⃣ Transition 기본 설정:{" "}
                        <code className="bg-orange-200 px-1 rounded">transition-all duration-200</code>
                      </li>
                      <li>
                        3️⃣ Hover 색상 변화: <code className="bg-orange-200 px-1 rounded">hover:bg-green-600</code>
                      </li>
                      <li>
                        4️⃣ Scale 효과: <code className="bg-orange-200 px-1 rounded">hover:scale-105</code>
                      </li>
                      <li>
                        5️⃣ Active 상태: <code className="bg-orange-200 px-1 rounded">active:scale-95</code>
                      </li>
                    </ol>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                    <p className="text-xs text-yellow-700">
                      💡 <strong>강사 팁:</strong> 각 단계별로 클래스를 하나씩 추가하며 실시간으로 변화를 확인해보세요!
                      hover와 active 상태의 차이를 명확히 설명하는 것이 중요합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 번역 가이드 */}
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">📖 CSS → TailwindCSS 번역 가이드</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transition 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Transition 속성 번역</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transition: all 0.3s ease;</div>
                    <div className="font-mono text-sm text-blue-600">→ transition-all duration-300</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transition: colors 0.2s;</div>
                    <div className="font-mono text-sm text-blue-600">→ transition-colors duration-200</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transition: transform 0.15s;</div>
                    <div className="font-mono text-sm text-blue-600">→ transition-transform duration-150</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transform: scale(1.05);</div>
                    <div className="font-mono text-sm text-blue-600">→ hover:scale-105</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">transform: translateY(-4px);</div>
                    <div className="font-mono text-sm text-blue-600">→ hover:-translate-y-1</div>
                  </div>
                </div>
              </div>

              {/* Duration 및 기타 속성 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Duration 및 기타 속성</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">0.15s → duration-150</div>
                    <div className="font-mono text-sm text-red-600 mb-1">0.2s → duration-200</div>
                    <div className="font-mono text-sm text-red-600 mb-1">0.3s → duration-300</div>
                    <div className="font-mono text-sm text-red-600 mb-1">0.5s → duration-500</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">box-shadow: 0 10px 25px rgba(0,0,0,0.1);</div>
                    <div className="font-mono text-sm text-blue-600">→ shadow-xl</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">opacity: 0; → opacity: 1;</div>
                    <div className="font-mono text-sm text-blue-600">→ opacity-0 → opacity-100</div>
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
              <h4 className="font-semibold text-yellow-800 mb-2">💡 번역 팁</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• TailwindCSS는 모바일 퍼스트 접근 방식을 사용합니다</li>
                <li>• transition-all은 모든 속성 변화를 감지합니다</li>
                <li>• hover: 접두사로 마우스 오버 시 효과를 적용합니다</li>
                <li>• duration 값은 밀리초 단위로 설정됩니다</li>
                <li>• 복잡한 애니메이션은 여러 클래스를 조합하여 표현합니다</li>
              </ul>
            </div>
          </section>

          {/* 강의 포인트 */}
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">🎯 강의 포인트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-600">1단계: 기본 Transition</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• transition-all 속성 이해</li>
                  <li>• duration 설정 방법</li>
                  <li>• hover 상태 활용</li>
                  <li>• 색상 변화 효과 적용</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: Transform 효과</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• scale 크기 변화 효과</li>
                  <li>• translate 위치 이동</li>
                  <li>• 그림자 효과 조합</li>
                  <li>• 복합 Transform 처리</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">3단계: 실전 적용</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 카드 컴포넌트 효과</li>
                  <li>• 버튼 인터랙션 디자인</li>
                  <li>• 페이드인 애니메이션</li>
                  <li>• 성능 최적화 고려사항</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>💡 강의 팁:</strong> 학생들이 직접 CSS Module 코드를 보고 TailwindCSS로 번역해보도록 유도하세요.
                실습을 통해 변환 패턴을 체득할 수 있습니다.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
