"use client";

import Navigation from "../../components/Navigation";

// Practice Components
import GradientBasicPractice from "../../components/Practice/Gradient/GradientBasicPractice";
import GradientLinearPractice from "../../components/Practice/Gradient/GradientLinearPractice";
import GradientCardsPractice from "../../components/Practice/Gradient/GradientCardsPractice";
import GradientAdvancedPractice from "../../components/Practice/Gradient/GradientAdvancedPractice";
import GradientBasicAnswer from "../../components/Practice/Gradient/Answer/GradientBasicAnswer";
import GradientLinearAnswer from "../../components/Practice/Gradient/Answer/GradientLinearAnswer";
import GradientCardsAnswer from "../../components/Practice/Gradient/Answer/GradientCardsAnswer";
import GradientAdvancedAnswer from "../../components/Practice/Gradient/Answer/GradientAdvancedAnswer";

export default function GradientPracticePage() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              TailwindCSS Gradient 실습
            </h1>
            <p className="text-lg text-gray-600">
              CSS Module을 TailwindCSS로 번역하는 실습을 단계별로 진행해보세요!
            </p>
          </div>

          {/* 실습 1: 기본 그라데이션 (쉬움) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 기본 그라데이션 (⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GradientBasicAnswer />
            </div>

            <GradientBasicPractice />
          </section>

          {/* 실습 2: 선형 그라데이션 (쉬움-보통) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: 선형 그라데이션 (⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GradientLinearAnswer />
            </div>

            <GradientLinearPractice />
          </section>

          {/* 실습 3: 그라데이션 카드 (⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: 그라데이션 카드 (⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GradientCardsAnswer />
            </div>

            <GradientCardsPractice />
          </section>

          {/* 실습 4: 고급 그라데이션 (⭐⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 고급 그라데이션 (⭐⭐⭐⭐)
            </h2>

            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <GradientAdvancedAnswer />
            </div>

            <GradientAdvancedPractice />
          </section>
        </div>
      </main>
    </div>
  );
}
