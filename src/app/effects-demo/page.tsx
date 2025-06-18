import EffectsDemoModule from "../../components/EffectsDemo/EffectsDemoModule";
import EffectsDemo from "../../components/EffectsDemo/EffectsDemo";
import Navigation from "../../components/Navigation";
import EffectsLiveCodingGuide from "../../components/LiveCoding/EffectsLiveCodingGuide";

export default function EffectsDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Effects 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              그림자, 투명도 등 시각적 효과를 TailwindCSS로 구현합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              시각적 효과를 위한 CSS Module 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <EffectsDemoModule />
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
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
}

.shadowBox {
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.opacityBox {
  padding: 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  opacity: 0.75;
  margin-bottom: 1rem;
}

.transformBox {
  padding: 1rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.5rem;
  transform: scale(1.05) rotate(3deg);
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
}

.transformBox:hover {
  transform: scale(1.1) rotate(-3deg);
}

.blurBox {
  padding: 1rem;
  background: linear-gradient(45deg, #f59e0b, #ef4444);
  color: white;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - 효과 번역 연습
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 시각적 효과를 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <EffectsLiveCodingGuide />
          </section>

          {/* TailwindCSS 번역본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              ✨ TailwindCSS 번역본
            </h2>
            <p className="text-gray-600 mb-6">
              시각적 효과를 TailwindCSS 클래스로 번역한 결과입니다. 좌측은
              결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 TailwindCSS 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <EffectsDemo />
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
    Effects Demo (Tailwind CSS)
  </h2>

  {/* Box Shadow Examples */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">Box Shadow</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-sm">
        Small
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-md">
        Medium
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-2xl">
        Large
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-lg shadow-blue-500/50">
        Colored
      </div>
    </div>
  </div>

  {/* Opacity Examples */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">Opacity</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-25">
        25%
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-50">
        50%
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-75">
        75%
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-100">
        100%
      </div>
    </div>
  </div>

  {/* Hover Effects */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">
      Hover Effects (hover to see)
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:scale-110 transition-transform duration-300">
        Scale
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:shadow-2xl transition-shadow duration-300">
        Shadow
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:rotate-180 transition-transform duration-300">
        Rotate
      </div>
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto scale-90 rotate-12 opacity-80 shadow-md hover:scale-110 hover:-rotate-12 hover:opacity-100 hover:shadow-2xl transition-all duration-300">
        Combined
      </div>
    </div>
  </div>
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 Effects 번역 가이드
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                  그림자 효과
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      box-shadow: 0 1px 3px rgba(0,0,0,0.1)
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → shadow-sm
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="font-mono text-sm text-blue-600">
                      shadow-md
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="font-mono text-sm text-blue-600">
                      shadow-lg
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-pink-600">
                  투명도 효과
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      opacity: 0.5;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → opacity-50
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm opacity-75">
                    <div className="font-mono text-sm text-blue-600">
                      opacity-75
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
