"use client";

import Navigation from "../../components/Navigation";

// Practice Components
import TransitionBasicPractice from "../../components/Practice/Transition/TransitionBasicPractice";
import TransitionDurationPractice from "../../components/Practice/Transition/TransitionDurationPractice";
import TransitionEffectsPractice from "../../components/Practice/Transition/TransitionEffectsPractice";
import TransitionAdvancedPractice from "../../components/Practice/Transition/TransitionAdvancedPractice";
import TransitionBasicAnswer from "../../components/Practice/Transition/Answer/TransitionBasicAnswer";
import TransitionDurationAnswer from "../../components/Practice/Transition/Answer/TransitionDurationAnswer";
import TransitionEffectsAnswer from "../../components/Practice/Transition/Answer/TransitionEffectsAnswer";
import TransitionAdvancedAnswer from "../../components/Practice/Transition/Answer/TransitionAdvancedAnswer";

export default function TransitionPracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Transition 실습
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 실습을 단계별로 진행해보세요!
            </p>
          </div>

          {/* 실습 1: 기본 전환 효과 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 기본 전환 효과 (⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <TransitionBasicAnswer />
            </div>

            <TransitionBasicPractice />
          </section>

          {/* 실습 2: 전환 지속시간 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: 전환 지속시간 (⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <TransitionDurationAnswer />
            </div>

            <TransitionDurationPractice />
          </section>

          {/* 실습 3: 전환 효과 조합 (⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: 전환 효과 조합 (⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <TransitionEffectsAnswer />
            </div>

            <TransitionEffectsPractice />
          </section>

          {/* 실습 4: 고급 전환 (⭐⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 고급 전환 (⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <TransitionAdvancedAnswer />
            </div>

            <TransitionAdvancedPractice />
          </section>
        </div>
      </main>
    </div>
  );
}
