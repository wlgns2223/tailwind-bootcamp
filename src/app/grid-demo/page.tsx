import GridDemoModule from "../../components/GridDemo/GridDemoModule";
import GridDemo from "../../components/GridDemo/GridDemo";
import Navigation from "../../components/Navigation";
import GridLiveCodingGuide from "../../components/LiveCoding/GridLiveCodingGuide";

export default function GridDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Grid 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              CSS Grid를 TailwindCSS로 번역하는 방법을 학습합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              Grid 레이아웃을 사용한 CSS Module 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <GridDemoModule />
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
  background-color: #e2e8f0;
  border-radius: 0.375rem;
  margin-top: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.cell {
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
}

.span2 {
  grid-column: span 2;
}

.flow {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  margin-top: 1.5rem;
}

.spanRow2 {
  grid-row: span 2;
  padding: 1rem;
  background-color: #6366f1;
  color: white;
  border-radius: 0.375rem;
}

.flowItem {
  padding: 1rem;
  background-color: #6366f1;
  color: white;
  border-radius: 0.375rem;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 실시간 강의 섹션 - 강사 코딩 영역 */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-dashed border-orange-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-orange-500 pb-2">
              👨‍💻 실시간 강의 - Grid 코딩 영역
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 CSS Grid를 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 실시간 코딩 결과 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  🎯 실시간 코딩 결과
                </h3>
                <GridLiveCodingGuide />
              </div>

              {/* 실시간 코딩 과정 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  💻 실시간 코딩 과정
                </h3>
                <div className="h-full">
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Grid 강의 진행 순서
                    </h4>
                    <ol className="text-sm text-orange-700 space-y-2">
                      <li>1️⃣ 기본 컨테이너 설정</li>
                      <li>
                        2️⃣ Grid 속성 추가:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          display: grid;
                        </code>
                      </li>
                      <li>
                        3️⃣ 컬럼 설정:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          grid-template-columns: repeat(3, 1fr);
                        </code>
                      </li>
                      <li>
                        4️⃣ 간격 설정:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          gap: 1rem;
                        </code>
                      </li>
                      <li>
                        5️⃣ Span 속성:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          grid-column: span 2;
                        </code>
                      </li>
                      <li>
                        6️⃣ Grid Flow 설정:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          grid-auto-flow: column;
                        </code>
                      </li>
                      <li>7️⃣ 최종 결과 확인</li>
                    </ol>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                    <p className="text-xs text-yellow-700">
                      💡 <strong>강사 팁:</strong> Grid는 2차원 레이아웃의
                      강력한 도구입니다. 단계별로 속성을 하나씩 번역해보세요!
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
              CSS Grid를 TailwindCSS 클래스로 번역한 결과입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TailwindCSS 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  🎨 TailwindCSS 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <GridDemo />
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
    Grid Examples
  </h2>
  
  {/* 기본 그리드 레이아웃 */}
  <div className="grid grid-cols-3 gap-4">
    <div className="p-4 bg-white dark:bg-gray-700 rounded">
      Grid 1
    </div>
    <div className="p-4 bg-white dark:bg-gray-700 rounded">
      Grid 2
    </div>
    <div className="p-4 bg-white dark:bg-gray-700 rounded">
      Grid 3
    </div>
    <div className="col-span-2 p-4 bg-white dark:bg-gray-700 rounded">
      Span 2 Columns
    </div>
    <div className="p-4 bg-white dark:bg-gray-700 rounded">
      Grid 5
    </div>
    <div className="p-4 bg-white dark:bg-gray-700 rounded">
      Grid 6
    </div>
  </div>
  
  {/* 수직 그리드 플로우 */}
  <div className="grid grid-rows-2 grid-flow-col gap-4 mt-6">
    <div className="row-span-2 p-4 bg-indigo-500 text-white rounded">
      Row Span 2
    </div>
    <div className="p-4 bg-indigo-500 text-white rounded">
      Item 2
    </div>
    <div className="p-4 bg-indigo-500 text-white rounded">
      Item 3
    </div>
  </div>
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 번역 가이드 */}
          <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 CSS Grid → TailwindCSS 번역 가이드
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Grid 기본 속성 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                  Grid 기본 속성
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      display: grid;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → grid
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      grid-template-columns: repeat(3, 1fr);
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → grid-cols-3
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      grid-template-rows: repeat(2, auto);
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → grid-rows-2
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      gap: 1rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → gap-4
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Span 속성 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-pink-600">
                  Grid Span 속성
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      grid-column: span 2;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → col-span-2
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      grid-row: span 2;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → row-span-2
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      grid-auto-flow: column;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → grid-flow-col
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
