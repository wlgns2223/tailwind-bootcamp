import StyleDemoModule from "../../components/StyleDemo/StyleDemoModule";
import StyleDemo from "../../components/StyleDemo/StyleDemo";
import Navigation from "../../components/Navigation";
import StyleLiveCodingGuide from "../../components/LiveCoding/StyleLiveCodingGuide";

export default function StyleDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Style 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              텍스트 스타일과 기본 CSS를 TailwindCSS로 번역하는 방법을
              학습합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              텍스트 스타일과 기본 CSS Module 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <StyleDemoModule />
                </div>
              </div>

              {/* CSS Module 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  💻 CSS Module 코드
                </h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-green-400 p-4 rounded overflow-x-auto h-full">
                    {`.title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1d4ed8;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.text {
  font-size: 1rem;
  line-height: 1.6;
  color: #6b7280;
  margin-bottom: 1rem;
}

.highlight {
  background-color: #fef3c7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
}

.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #2563eb;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - 스타일 번역 연습
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 CSS 스타일을 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <StyleLiveCodingGuide />
          </section>

          {/* TailwindCSS 번역본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-blue-500 pb-2">
              ✨ TailwindCSS 번역본
            </h2>
            <p className="text-gray-600 mb-6">
              CSS Module을 TailwindCSS 클래스로 번역한 결과입니다. 좌측은
              결과물, 우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 TailwindCSS 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <StyleDemo />
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
    Style Demo (Tailwind CSS)
  </h2>

  {/* Font sizes */}
  <div className="text-2xl">Large font (text-2xl)</div>
  <div className="text-xl">Medium font (text-xl)</div>
  <div className="text-base">Small font (text-base)</div>

  {/* Font weights */}
  <div className="font-light">Light weight (font-light)</div>
  <div className="font-bold">Bold weight (font-bold)</div>

  {/* Text alignment */}
  <div className="text-left">Left aligned text</div>
  <div className="text-center">Center aligned text</div>
  <div className="text-right">Right aligned text</div>

  {/* Text color */}
  <div className="text-blue-700">Primary text color (text-blue-700)</div>

  {/* Background color */}
  <div className="bg-blue-200 p-2 rounded">
    Highlighted background (bg-blue-200)
  </div>

  {/* Borders */}
  <div className="border-2 border-blue-600 p-2 rounded">
    Border example (border-2 border-blue-600)
  </div>

  {/* Border radius */}
  <div className="border border-gray-400 p-2 rounded-xl">
    Rounded example (rounded-xl)
  </div>
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 스타일 번역 가이드 */}
          <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 스타일 속성 번역 가이드
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  텍스트 스타일
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      font-size: 2rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → text-3xl
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      font-weight: 700;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → font-bold
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      text-align: center;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → text-center
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      color: #1d4ed8;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → text-blue-700
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">
                  배경 및 테두리
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      background-color: #bfdbfe;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → bg-blue-200
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      border: 2px solid #2563eb;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → border-2 border-blue-600
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      border-radius: 0.75rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → rounded-xl
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      padding: 0.5rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">→ p-2</div>
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
