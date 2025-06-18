import FlexDemoModule from "../../components/FlexDemo/FlexDemoModule";
import FlexDemo from "../../components/FlexDemo/FlexDemo";
import Navigation from "../../components/Navigation";
import LiveCodingDemo from "../../components/LiveCoding/LiveCodingDemo";

export default function FlexDemoPage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Flex 강의 데모
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 방법을 학습합니다
            </p>
          </div>

          {/* CSS Module 원본 - 2단 컬럼 레이아웃 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-red-500 pb-2">
              📋 CSS Module 원본
            </h2>
            <p className="text-gray-600 mb-6">
              아래는 CSS Module로 작성된 원본 컴포넌트입니다. 좌측은 결과물,
              우측은 코드입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CSS Module 예제 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  🎨 CSS Module 예제
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <FlexDemoModule />
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
  background-color: #e2e8f0; /* gray-200 */
  border-radius: 0.375rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.rowItem {
  flex: 1;
  padding: 1rem;
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 0.375rem;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 1rem;
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 0.375rem;
  margin-top: 1.5rem;
}

.columnItem {
  padding: 0.5rem 1rem;
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
              👨‍💻 실시간 강의 - 강사 코딩 영역
            </h2>
            <p className="text-gray-600 mb-6">
              강사가 실시간으로 CSS Module을 TailwindCSS로 번역하는 과정을
              보여주는 영역입니다.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 실시간 코딩 결과 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  🎯 실시간 코딩 결과
                </h3>
                <LiveCodingDemo />
              </div>

              {/* 실시간 코딩 과정 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  💻 실시간 코딩 과정
                </h3>
                <div className="h-full">
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      강의 진행 순서
                    </h4>
                    <ol className="text-sm text-orange-700 space-y-2">
                      <li>1️⃣ 기본 컨테이너 클래스 작성</li>
                      <li>
                        2️⃣ Flex 속성 추가:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          display: flex;
                        </code>
                      </li>
                      <li>
                        3️⃣ 간격 설정:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          gap: 1rem;
                        </code>
                      </li>
                      <li>
                        4️⃣ Flex item 속성:{" "}
                        <code className="bg-orange-200 px-1 rounded">
                          flex: 1;
                        </code>
                      </li>
                      <li>5️⃣ 수직 정렬 및 색상 적용</li>
                      <li>6️⃣ 최종 결과 확인 및 비교</li>
                    </ol>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                    <p className="text-xs text-yellow-700">
                      💡 <strong>강사 팁:</strong> 각 단계별로 하나씩 번역하며
                      실시간으로 결과를 확인해보세요!
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
                  <FlexDemo />
                </div>
              </div>

              {/* TailwindCSS 코드 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  💻 TailwindCSS 코드
                </h3>
                <div className="h-full">
                  <pre className="text-xs bg-gray-800 text-blue-400 p-4 rounded overflow-x-auto h-full">
                    {`<section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md">
  <h2 className="text-2xl font-semibold mb-4">
    Flex Examples
  </h2>
  
  {/* 수평 Flex 예제 */}
  <div className="flex space-x-4">
    <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
      Flex 1
    </div>
    <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
      Flex 1
    </div>
    <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
      Flex 1
    </div>
  </div>
  
  {/* 수직 Flex 예제 */}
  <div className="flex flex-col items-center justify-between mt-6 h-40 bg-white dark:bg-gray-700 p-4 rounded">
    <div className="p-2 bg-indigo-500 text-white rounded">
      Item 1
    </div>
    <div className="p-2 bg-indigo-500 text-white rounded">
      Item 2
    </div>
    <div className="p-2 bg-indigo-500 text-white rounded">
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
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              📖 CSS → TailwindCSS 번역 가이드
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Flexbox 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  Flexbox 속성 번역
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      display: flex;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → flex
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      flex-direction: column;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → flex-col
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      align-items: center;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → items-center
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      justify-content: space-between;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → justify-between
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      flex: 1;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → flex-1
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      gap: 1rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → space-x-4 (가로) / space-y-4 (세로)
                    </div>
                  </div>
                </div>
              </div>

              {/* 기본 스타일 번역 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  기본 스타일 번역
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      width: 100%;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → w-full
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      padding: 1rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">→ p-4</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      margin-bottom: 1rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → mb-4
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      border-radius: 0.375rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → rounded
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      font-size: 1.5rem;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → text-2xl
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-mono text-sm text-red-600 mb-1">
                      font-weight: 600;
                    </div>
                    <div className="font-mono text-sm text-blue-600">
                      → font-semibold
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 번역 팁 */}
            <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 번역 팁</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• TailwindCSS는 모바일 퍼스트 접근 방식을 사용합니다</li>
                <li>• 색상은 gray-100, blue-500 등의 형식으로 표현됩니다</li>
                <li>• 크기는 4단위 (1rem = 4) 시스템을 사용합니다</li>
                <li>• 복잡한 CSS는 여러 클래스를 조합하여 표현합니다</li>
              </ul>
            </div>
          </section>

          {/* 강의 포인트 */}
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              🎯 강의 포인트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-600">
                  1단계: CSS 분석
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CSS 속성 파악하기</li>
                  <li>• 레이아웃 구조 이해하기</li>
                  <li>• 색상과 크기 값 확인하기</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  2단계: 클래스 매핑
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CSS 속성을 TailwindCSS 클래스로 변환</li>
                  <li>• 반응형 접근법 적용</li>
                  <li>• 코드 최적화</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">
                  3단계: 검증
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 시각적 결과 비교</li>
                  <li>• 반응형 동작 확인</li>
                  <li>• 코드 품질 검토</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
