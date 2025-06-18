import Navigation from "../../components/Navigation";
import FlexBasicPractice from "../../components/Practice/Flex/FlexBasicPractice";
import FlexCenterPractice from "../../components/Practice/Flex/FlexCenterPractice";
import FlexWrapPractice from "../../components/Practice/Flex/FlexWrapPractice";
import FlexSpacePractice from "../../components/Practice/Flex/FlexSpacePractice";
import FlexAdvancedPractice from "../../components/Practice/Flex/FlexAdvancedPractice";
import FlexBasicAnswer from "../../components/Practice/Flex/Answer/FlexBasicAnswer";
import FlexCenterAnswer from "../../components/Practice/Flex/Answer/FlexCenterAnswer";
import FlexWrapAnswer from "../../components/Practice/Flex/Answer/FlexWrapAnswer";
import FlexSpaceAnswer from "../../components/Practice/Flex/Answer/FlexSpaceAnswer";
import FlexAdvancedAnswer from "../../components/Practice/Flex/Answer/FlexAdvancedAnswer";

export default function FlexPracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Flex 실습
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 실습을 단계별로 진행해보세요!
            </p>
          </div>

          {/* 실습 1: 기본 Flex 레이아웃 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 기본 Flex 레이아웃 (⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <FlexBasicAnswer />
            </div>

            <FlexBasicPractice />
          </section>

          {/* 실습 2: 중앙 정렬 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: 중앙 정렬 (⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <FlexCenterAnswer />
            </div>

            <FlexCenterPractice />
          </section>

          {/* 실습 3: 플렉스 랩 (보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: 플렉스 랩 (⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <FlexWrapAnswer />
            </div>

            <FlexWrapPractice />
          </section>

          {/* 실습 4: 공간 분배 (보통-어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 공간 분배 (⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <FlexSpaceAnswer />
            </div>

            <FlexSpacePractice />
          </section>

          {/* 실습 5: 고급 플렉스 (어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 5: 고급 플렉스 (⭐⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <FlexAdvancedAnswer />
            </div>

            <FlexAdvancedPractice />
          </section>
        </div>
      </main>
    </div>
  );
}
