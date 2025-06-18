import Navigation from "../../components/Navigation";
import GridBasicPractice from "../../components/Practice/Grid/GridBasicPractice";
import GridColumnsPractice from "../../components/Practice/Grid/GridColumnsPractice";
import GridAreaPractice from "../../components/Practice/Grid/GridAreaPractice";
import GridAutoFitPractice from "../../components/Practice/Grid/GridAutoFitPractice";
import GridComplexPractice from "../../components/Practice/Grid/GridComplexPractice";
import GridBasicAnswer from "../../components/Practice/Grid/Answer/GridBasicAnswer";
import GridColumnsAnswer from "../../components/Practice/Grid/Answer/GridColumnsAnswer";
import GridAreaAnswer from "../../components/Practice/Grid/Answer/GridAreaAnswer";
import GridAutoFitAnswer from "../../components/Practice/Grid/Answer/GridAutoFitAnswer";
import GridComplexAnswer from "../../components/Practice/Grid/Answer/GridComplexAnswer";

export default function GridPracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Grid 실습
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 실습을 단계별로 진행해보세요!
            </p>
          </div>

          {/* 실습 1: 기본 Grid 레이아웃 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 기본 Grid 레이아웃 (⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GridBasicAnswer />
            </div>

            <GridBasicPractice />
          </section>

          {/* 실습 2: Grid 컬럼 설정 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: Grid 컬럼 설정 (⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GridColumnsAnswer />
            </div>

            <GridColumnsPractice />
          </section>

          {/* 실습 3: Grid 영역 설정 (보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: Grid 영역 설정 (⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GridAreaAnswer />
            </div>

            <GridAreaPractice />
          </section>

          {/* 실습 4: 자동 피팅 (보통-어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 자동 피팅 (⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GridAutoFitAnswer />
            </div>

            <GridAutoFitPractice />
          </section>

          {/* 실습 5: 복합 Grid (어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 5: 복합 Grid (⭐⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GridComplexAnswer />
            </div>

            <GridComplexPractice />
          </section>
        </div>
      </main>
    </div>
  );
}
