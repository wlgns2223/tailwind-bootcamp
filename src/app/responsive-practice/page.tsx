import Navigation from "../../components/Navigation";
import ResponsiveBasicPractice from "../../components/Practice/Responsive/ResponsiveBasicPractice";
import ResponsiveHidePractice from "../../components/Practice/Responsive/ResponsiveHidePractice";
import ResponsiveGridPractice from "../../components/Practice/Responsive/ResponsiveGridPractice";
import ResponsiveLayoutPractice from "../../components/Practice/Responsive/ResponsiveLayoutPractice";
import ResponsiveAdvancedPractice from "../../components/Practice/Responsive/ResponsiveAdvancedPractice";
import ResponsiveBasicAnswer from "../../components/Practice/Responsive/Answer/ResponsiveBasicAnswer";
import ResponsiveHideAnswer from "../../components/Practice/Responsive/Answer/ResponsiveHideAnswer";
import ResponsiveGridAnswer from "../../components/Practice/Responsive/Answer/ResponsiveGridAnswer";
import ResponsiveLayoutAnswer from "../../components/Practice/Responsive/Answer/ResponsiveLayoutAnswer";
import ResponsiveAdvancedAnswer from "../../components/Practice/Responsive/Answer/ResponsiveAdvancedAnswer";

export default function ResponsivePracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Responsive 실습
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 실습을 단계별로 진행해보세요!
            </p>
          </div>

          {/* 실습 1: 기본 반응형 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 기본 반응형 (⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <ResponsiveBasicAnswer />
            </div>

            <ResponsiveBasicPractice />
          </section>

          {/* 실습 2: 반응형 숨김/보임 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: 반응형 숨김/보임 (⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <ResponsiveHideAnswer />
            </div>

            <ResponsiveHidePractice />
          </section>

          {/* 실습 3: 반응형 그리드 (보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: 반응형 그리드 (⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <ResponsiveGridAnswer />
            </div>

            <ResponsiveGridPractice />
          </section>

          {/* 실습 4: 반응형 레이아웃 (보통-어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 반응형 레이아웃 (⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <ResponsiveLayoutAnswer />
            </div>

            <ResponsiveLayoutPractice />
          </section>

          {/* 실습 5: 고급 반응형 (어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 5: 고급 반응형 (⭐⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <ResponsiveAdvancedAnswer />
            </div>

            <ResponsiveAdvancedPractice />
          </section>
        </div>
      </main>
    </div>
  );
}
