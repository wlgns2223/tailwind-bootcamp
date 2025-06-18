"use client";

import Navigation from "../../components/Navigation";

// Practice Components
import EffectsShadowPractice from "../../components/Practice/Effects/EffectsShadowPractice";
import EffectsHoverPractice from "../../components/Practice/Effects/EffectsHoverPractice";
import EffectsTransformPractice from "../../components/Practice/Effects/EffectsTransformPractice";
import EffectsAdvancedPractice from "../../components/Practice/Effects/EffectsAdvancedPractice";
import EffectsShadowAnswer from "../../components/Practice/Effects/Answer/EffectsShadowAnswer";
import EffectsHoverAnswer from "../../components/Practice/Effects/Answer/EffectsHoverAnswer";
import EffectsTransformAnswer from "../../components/Practice/Effects/Answer/EffectsTransformAnswer";
import EffectsOpacityAnswer from "../../components/Practice/Effects/Answer/EffectsOpacityAnswer";
import EffectsAdvancedAnswer from "../../components/Practice/Effects/Answer/EffectsAdvancedAnswer";
import EffectsOpacityPractice from "../../components/Practice/Effects/EffectsOpacityPractice";

export default function EffectsPracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            TailwindCSS Effects 실습
          </h1>
          <p className="text-gray-600">
            TailwindCSS를 사용하여 다양한 시각적 효과를 만들어보세요.
          </p>
        </div>

        <div className="space-y-8">
          {/* 실습 1: 그림자 효과 (⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 1: 그림자 효과 (⭐)
            </h2>
            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <EffectsShadowAnswer />
            </div>
            <EffectsShadowPractice />
          </section>

          {/* 실습 2: 호버 효과 (⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 2: 호버 효과 (⭐⭐)
            </h2>
            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <EffectsHoverAnswer />
            </div>
            <EffectsHoverPractice />
          </section>

          {/* 실습 3: 변형 효과 (⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 3: 변형 효과 (⭐⭐⭐)
            </h2>
            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <EffectsTransformAnswer />
            </div>
            <EffectsTransformPractice />
          </section>

          {/* 실습 4: 투명도 효과 (⭐⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 4: 투명도 효과 (⭐⭐⭐⭐)
            </h2>
            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>{" "}
              <EffectsOpacityAnswer />
            </div>
            <EffectsOpacityPractice />
          </section>

          {/* 실습 5: 고급 효과 (⭐⭐⭐⭐⭐) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              실습 5: 고급 효과 (⭐⭐⭐⭐⭐)
            </h2>
            {/* 실제 결과 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                🎯 목표 결과:
              </h3>
              <EffectsAdvancedAnswer />
            </div>
            <EffectsAdvancedPractice />
          </section>
        </div>
      </div>
    </div>
  );
}
