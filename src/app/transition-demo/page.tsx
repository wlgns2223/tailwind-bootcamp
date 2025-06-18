import TransitionDemoModule from "../../components/TransitionDemo/TransitionDemoModule";
import Navigation from "../../components/Navigation";

export default function TransitionDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Transition 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              강사용 설명 및 데모 컴포넌트입니다
            </p>
          </div>

          {/* 기본 Transition 강의 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              📚 기본 Transition 강의
            </h2>
            <p className="text-gray-600 mb-6">
              기본적인 Transition 효과를 학습합니다. 좌측은 인터랙티브 예제,
              우측은 설명과 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transition 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 인터랙티브 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <TransitionDemoModule.TransitionDemo />
                </div>
              </div>

              {/* Transition 설명 및 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  💻 코드 및 설명
                </h3>
                <div className="h-full">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      핵심 개념
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• transition-colors: 색상 변화</li>
                      <li>• transition-transform: 크기/위치 변화</li>
                      <li>• duration-300: 0.3초 지속시간</li>
                      <li>• hover: 마우스 오버 상태</li>
                    </ul>
                  </div>
                  <pre className="text-xs bg-gray-800 text-blue-400 p-4 rounded overflow-x-auto">
                    {`<!-- 색상 변화 -->
<button className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                   transition-colors duration-300 
                   hover:bg-blue-600">
  Hover me
</button>

<!-- 크기 변화 -->
<div className="w-20 h-20 bg-purple-500 rounded-lg 
                transition-transform duration-200 
                hover:scale-110">
</div>

<!-- 복합 효과 -->
<button className="px-6 py-3 bg-green-500 text-white rounded-lg 
                   transition-all duration-300 
                   hover:bg-green-600 hover:scale-105 hover:shadow-lg">
  All Effects
</button>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 고급 애니메이션 예제 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-purple-500 pb-2">
              🚀 고급 애니메이션 예제
            </h2>
            <p className="text-gray-600 mb-6">
              복잡한 애니메이션과 키프레임을 학습합니다. 좌측은 고급 예제,
              우측은 설명과 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 고급 애니메이션 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                  🎨 고급 애니메이션
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <TransitionDemoModule.AdvancedTransitionDemo />
                </div>
              </div>

              {/* 고급 코드 및 설명 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                  💻 고급 코드 및 설명
                </h3>
                <div className="h-full">
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      고급 기법
                    </h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• animate-pulse: 깜빡임 효과</li>
                      <li>• animate-bounce: 바운스 효과</li>
                      <li>• animate-spin: 회전 애니메이션</li>
                      <li>• group-hover: 그룹 호버 효과</li>
                    </ul>
                  </div>
                  <pre className="text-xs bg-gray-800 text-purple-400 p-4 rounded overflow-x-auto">
                    {`<!-- 키프레임 애니메이션 -->
<div className="animate-pulse bg-blue-500 w-16 h-16 rounded">
</div>

<div className="animate-bounce bg-red-500 w-16 h-16 rounded">
</div>

<div className="animate-spin bg-green-500 w-16 h-16 rounded">
</div>

<!-- 그룹 애니메이션 -->
<div className="group p-4 border rounded-lg hover:bg-gray-50">
  <h3 className="group-hover:text-blue-600 transition-colors">
    Title
  </h3>
  <p className="group-hover:text-gray-600 transition-colors">
    Description
  </p>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 강의 가이드 */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 강의 진행 가이드
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  1단계: 기본 개념
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Transition의 기본 원리</li>
                  <li>• Duration과 Easing 함수</li>
                  <li>• 색상 변화 데모</li>
                  <li>• Hover 상태 활용</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-600">
                  2단계: Transform
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Scale 크기 변화</li>
                  <li>• Rotate 회전 효과</li>
                  <li>• Translate 이동 효과</li>
                  <li>• 복합 Transform</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">
                  3단계: 실전 활용
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 카드 hover 효과</li>
                  <li>• 버튼 인터랙션</li>
                  <li>• 로딩 애니메이션</li>
                  <li>• 모달 팝업</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>💡 팁:</strong> 학생들이 실습할 때는 먼저 간단한 hover
                효과부터 시작하여 점진적으로 복잡한 애니메이션으로 발전시키세요.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
