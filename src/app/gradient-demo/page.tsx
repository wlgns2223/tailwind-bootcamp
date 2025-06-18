import GradientDemoModule from "../../components/GradientDemo/GradientDemoModule";
import GradientDemo from "../../components/GradientDemo/GradientDemo";
import Navigation from "../../components/Navigation";
import GradientLiveCodingGuide from "../../components/LiveCoding/GradientLiveCodingGuide";

export default function GradientDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Gradient 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              그라디언트 효과를 TailwindCSS로 구현하는 방법을 학습합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              그라디언트 효과를 위한 CSS Module 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <GradientDemoModule />
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
  background-color: #f9fafb;
  border-radius: 0.5rem;
}

.linearGradient {
  padding: 2rem;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}

.radialGradient {
  padding: 2rem;
  background: radial-gradient(circle, #10b981, #059669);
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}

.complexGradient {
  padding: 2rem;
  background: linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6);
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}

.textGradient {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - 그라디언트 번역 연습
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 그라디언트 효과를 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <GradientLiveCodingGuide />
          </section>

          {/* TailwindCSS 번역본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              ✨ TailwindCSS 번역본
            </h2>
            <p className="text-gray-600 mb-6">
              그라디언트를 TailwindCSS 클래스로 번역한 결과입니다. 좌측은
              결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 TailwindCSS 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <GradientDemo />
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
    Gradient Demo (Tailwind CSS)
  </h2>

  {/* Linear Gradients */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">Linear Gradients</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold">
        Horizontal
      </div>
      <div className="h-32 bg-gradient-to-b from-green-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-semibold">
        Vertical
      </div>
      <div className="h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
        Diagonal
      </div>
      <div className="h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-semibold">
        Multi-color
      </div>
    </div>
  </div>

  {/* Text Gradients */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">Text Gradients</h3>
    <div className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent text-center py-4">
      Gradient Text Effect
    </div>
  </div>

  {/* Border Gradients */}
  <div className="mb-8">
    <h3 className="text-lg font-medium mb-3">Border Gradients</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-lg">
        <div className="h-full bg-white dark:bg-gray-900 rounded flex items-center justify-center text-gray-900 dark:text-white font-semibold">
          Gradient Border
        </div>
      </div>
      <div className="h-32 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 p-1 rounded-lg">
        <div className="h-full bg-white dark:bg-gray-900 rounded flex items-center justify-center text-gray-900 dark:text-white font-semibold">
          Complex Border
        </div>
      </div>
    </div>
  </div>
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 Gradient 번역 가이드
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-pink-600">
                  방향별 그라디언트
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg p-4">
                    <div className="font-mono text-sm">bg-gradient-to-r</div>
                    <div className="text-xs">왼쪽에서 오른쪽으로</div>
                  </div>
                  <div className="bg-gradient-to-b from-green-400 to-blue-600 text-white rounded-lg p-4">
                    <div className="font-mono text-sm">bg-gradient-to-b</div>
                    <div className="text-xs">위에서 아래로</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400 to-red-600 text-white rounded-lg p-4">
                    <div className="font-mono text-sm">bg-gradient-to-br</div>
                    <div className="text-xs">왼쪽 위에서 오른쪽 아래로</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                  색상 조합
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg p-4">
                    <div className="font-mono text-sm">
                      from-blue-500 via-purple-500 to-pink-500
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4">
                    <div className="font-mono text-sm">
                      from-green-400 to-blue-500
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
