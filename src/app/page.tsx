import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TailwindCSS 실습 강의
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CSS Module에서 TailwindCSS로 변환하는 실전 강의와 실습을 통해
            현대적인 웹 스타일링을 마스터하세요
          </p>
        </div>

        {/* 메인 강의 섹션들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Flexbox */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Flexbox Layout
              </h3>
              <p className="text-gray-600 mb-6">
                유연하고 반응형인 레이아웃을 위한 Flexbox 마스터하기
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/flex-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/flex-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">�</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Grid Layout
              </h3>
              <p className="text-gray-600 mb-6">
                복잡한 2차원 레이아웃을 위한 CSS Grid 완전 정복
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/grid-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/grid-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Styling */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Core Styling
              </h3>
              <p className="text-gray-600 mb-6">
                색상, 타이포그래피, 스페이싱 등 기본 스타일링 기법
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/style-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/style-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Responsive Design */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Responsive Design
              </h3>
              <p className="text-gray-600 mb-6">
                모든 디바이스에 대응하는 반응형 웹 디자인 구현
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/responsive-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/responsive-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Effects & Transforms */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Effects & Transforms
              </h3>
              <p className="text-gray-600 mb-6">
                그림자, 변형, 필터 등 시각적 효과로 인상적인 UI 만들기
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/effects-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/effects-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Gradient Design */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Gradient Design
              </h3>
              <p className="text-gray-600 mb-6">
                다양한 그라디언트 효과로 모던하고 세련된 디자인 구현
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/gradient-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/gradient-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>

          {/* Transition & Animation */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Transition & Animation
              </h3>
              <p className="text-gray-600 mb-6">
                부드러운 전환 효과와 애니메이션으로 생동감 있는 UI 만들기
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="/transition-demo"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-600 hover:scale-105"
                >
                  강의 보기
                </a>
                <a
                  href="/transition-practice"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-600 hover:scale-105"
                >
                  실습하기
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 간단한 미리보기 섹션 */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            TailwindCSS 미리보기
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600">
              Hover Effect
            </button>
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold transition-transform duration-200 hover:scale-110">
              Scale Effect
            </button>
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg transition-transform duration-500 hover:rotate-180 flex items-center justify-center text-white font-bold cursor-pointer">
              🎯
            </div>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:-translate-y-1">
              Combined Effect
            </button>
          </div>
          <p className="text-center text-gray-600">
            위 요소들과 상호작용해보세요! 각각 다른 TailwindCSS 효과가 적용되어
            있습니다.
          </p>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            강의 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold mb-2">실전 중심</h3>
              <p className="text-gray-600 text-sm">
                실제 프로젝트에서 사용되는 패턴과 기법을 학습
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">CSS Module 번역</h3>
              <p className="text-gray-600 text-sm">
                기존 CSS Module 코드를 TailwindCSS로 변환하는 방법 학습
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">단계별 실습</h3>
              <p className="text-gray-600 text-sm">
                힌트와 정답이 포함된 체계적인 실습 시스템
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
