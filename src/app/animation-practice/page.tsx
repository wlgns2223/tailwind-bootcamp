import Navigation from "../../components/Navigation";
import AnimationBasicPractice from "../../components/Practice/Animation/AnimationBasicPractice";
import AnimationHoverPractice from "../../components/Practice/Animation/AnimationHoverPractice";
import AnimationCardPractice from "../../components/Practice/Animation/AnimationCardPractice";
import AnimationLoadingPractice from "../../components/Practice/Animation/AnimationLoadingPractice";
import AnimationModalPractice from "../../components/Practice/Animation/AnimationModalPractice";
import AnimationKeyframePractice from "../../components/Practice/Animation/AnimationKeyframePractice";
import AnimationMarqueePractice from "../../components/Practice/Animation/AnimationMarqueePractice";
import AnimationBasicAnswer from "../../components/Practice/Animation/Answer/AnimationBasicAnswer";
import AnimationHoverAnswer from "../../components/Practice/Animation/Answer/AnimationHoverAnswer";
import AnimationCardAnswer from "../../components/Practice/Animation/Answer/AnimationCardAnswer";
import AnimationLoadingAnswer from "../../components/Practice/Animation/Answer/AnimationLoadingAnswer";
import AnimationModalAnswer from "../../components/Practice/Animation/Answer/AnimationModalAnswer";
import AnimationKeyframeAnswer from "../../components/Practice/Animation/Answer/AnimationKeyframeAnswer";
import AnimationMarqueeAnswer from "../../components/Practice/Animation/Answer/AnimationMarqueeAnswer";

export default function AnimationPracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">TailwindCSS Animation 실습</h1>
            <p className="text-lg text-gray-600">TailwindCSS 애니메이션을 활용한 7단계 실습을 단계별로 진행해보세요!</p>
          </div>

          {/* 실습 1: 기본 애니메이션 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 1: 기본 애니메이션 (⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationBasicAnswer />
            </div>

            <AnimationBasicPractice />
          </section>

          {/* 실습 2: 버튼 호버 애니메이션 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 2: 버튼 호버 애니메이션 (⭐⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationHoverAnswer />
            </div>

            <AnimationHoverPractice />
          </section>

          {/* 실습 3: 카드 애니메이션 (보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 3: 카드 호버 애니메이션 (⭐⭐⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationCardAnswer />
            </div>

            <AnimationCardPractice />
          </section>

          {/* 실습 4: 로딩 인디케이터 (보통-어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 4: 로딩 인디케이터 (⭐⭐⭐⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationLoadingAnswer />
            </div>

            <AnimationLoadingPractice />
          </section>

          {/* 실습 5: 모달 애니메이션 (보통-어려움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 5: 모달 애니메이션 (⭐⭐⭐⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationModalAnswer />
            </div>

            <AnimationModalPractice />
          </section>

          {/* 실습 6: 키프레임 모달 애니메이션 (고급) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">실습 6: 키프레임 모달 애니메이션 (⭐⭐⭐⭐⭐)</h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationKeyframeAnswer />
            </div>

            <AnimationKeyframePractice />
          </section>

          {/* 실습 7: 세로 Marquee 애니메이션 (고급) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 7: 세로 Marquee 애니메이션 (⭐⭐⭐⭐⭐⭐)
            </h2>

            {/* 목표 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🎯 목표 결과:</h3>
              <AnimationMarqueeAnswer />
            </div>

            <AnimationMarqueePractice />
          </section>

          {/* 실습 완료 안내 */}
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">🎉 모든 실습을 완료하셨나요?</h2>
            <p className="text-gray-600 mb-6">TailwindCSS 애니메이션 마스터가 되신 것을 축하합니다!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/animation-demo"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                📚 강의 다시 보기
              </a>
              <a
                href="/"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
