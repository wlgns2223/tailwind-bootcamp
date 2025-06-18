import ResponsiveDemoModule from "../../components/ResponsiveDemo/ResponsiveDemoModule";
import ResponsiveDemo from "../../components/ResponsiveDemo/ResponsiveDemo";
import Navigation from "../../components/Navigation";
import ResponsiveLiveCodingGuide from "../../components/LiveCoding/ResponsiveLiveCodingGuide";

export default function ResponsiveDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Responsive 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              반응형 디자인을 TailwindCSS로 구현하는 방법을 학습합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              반응형 디자인을 위한 CSS Module 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ResponsiveDemoModule />
                </div>
              </div>

              {/* CSS Module 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  💻 CSS Module 코드
                </h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-green-400 p-4 rounded overflow-x-auto h-full">
                    {`.container {
  width: 100%;
  padding: 1rem;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.item {
  padding: 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
}

.responsive {
  font-size: 1rem;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .responsive {
    font-size: 1.25rem;
    padding: 1rem;
  }
}

@media (min-width: 1024px) {
  .responsive {
    font-size: 1.5rem;
    padding: 1.5rem;
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
              👨‍💻 실시간 강의 - 반응형 번역 연습
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 반응형 CSS를 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <ResponsiveLiveCodingGuide />
          </section>

          {/* TailwindCSS 번역본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              ✨ TailwindCSS 번역본
            </h2>
            <p className="text-gray-600 mb-6">
              반응형 디자인을 TailwindCSS 클래스로 번역한 결과입니다. 좌측은
              결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 TailwindCSS 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ResponsiveDemo />
                </div>
              </div>

              {/* TailwindCSS 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  💻 TailwindCSS 코드
                </h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-blue-400 p-4 rounded overflow-x-auto h-full">
                    {`<section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    Responsive Demo (Tailwind CSS)
  </h2>

  {/* Responsive Grid */}
  <h3 className="text-lg font-medium mb-2">
    Responsive Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 1
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 2
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 3
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 4
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 5
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
      Item 6
    </div>
  </div>

  {/* Responsive Text */}
  <h3 className="text-lg font-medium mb-2">Responsive Text Size</h3>
  <div className="text-base md:text-xl lg:text-2xl p-4 bg-purple-200 dark:bg-purple-800 rounded mb-4">
    This text grows: text-base → text-xl → text-2xl
  </div>

  {/* Responsive Navigation */}
  <h3 className="text-lg font-medium mb-2">Responsive Navigation</h3>
  <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 p-4 bg-blue-200 dark:bg-blue-800 rounded mb-4">
    <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded text-center">
      Home
    </a>
    <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded text-center">
      About
    </a>
    <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded text-center">
      Services
    </a>
    <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded text-center">
      Contact
    </a>
  </nav>

  {/* Conditional Display */}
  <h3 className="text-lg font-medium mb-2">Conditional Display</h3>
  <div className="block lg:hidden">
    📱 Mobile & Tablet Only (block lg:hidden)
  </div>
  <div className="hidden lg:block">
    🖥️ Desktop Only (hidden lg:block)
  </div>
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 반응형 번역 가이드
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  브레이크포인트
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      sm: 640px
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      md: 768px
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      lg: 1024px
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      xl: 1280px
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  사용 예시
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      grid-cols-1 md:grid-cols-3
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      text-sm lg:text-lg
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-blue-600">
                      hidden md:block
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
