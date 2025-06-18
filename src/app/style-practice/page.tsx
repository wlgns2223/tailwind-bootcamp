"use client";

import Navigation from "../../components/Navigation";
// Practice Components
import StyleBasicPractice from "../../components/Practice/Style/StyleBasicPractice";
import StyleColorsPractice from "../../components/Practice/Style/StyleColorsPractice";
import StyleSpacingPractice from "../../components/Practice/Style/StyleSpacingPractice";
import StyleBorderPractice from "../../components/Practice/Style/StyleBorderPractice";
import StyleAdvancedPractice from "../../components/Practice/Style/StyleAdvancedPractice";
// Answer Components
import StyleBasicAnswer from "../../components/Practice/Style/Answer/StyleBasicAnswer";
import StyleColorsAnswer from "../../components/Practice/Style/Answer/StyleColorsAnswer";
import StyleSpacingAnswer from "../../components/Practice/Style/Answer/StyleSpacingAnswer";
import StyleBorderAnswer from "../../components/Practice/Style/Answer/StyleBorderAnswer";
import StyleAdvancedAnswer from "../../components/Practice/Style/Answer/StyleAdvancedAnswer";

export default function StylePracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            TailwindCSS Style 실습
          </h1>
          <p className="text-lg text-gray-600">
            CSS Module을 TailwindCSS로 변환하는 실습을 단계별로 진행해보세요!
          </p>
        </div>

        {/* 실습 1: 기본 스타일 (쉬움) */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            실습 1: 기본 스타일 (⭐)
          </h2>
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              🎯 목표 결과:
            </h3>
            <StyleBasicAnswer />
          </div>
          <StyleBasicPractice />
        </section>

        {/* 실습 2: Colors 스타일 (보통) */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            실습 2: Colors 스타일 (⭐⭐)
          </h2>
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              🎯 목표 결과:
            </h3>
            <StyleColorsAnswer />
          </div>
          <StyleColorsPractice />
        </section>

        {/* 실습 3: Spacing 스타일 (중간) */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            실습 3: Spacing 스타일 (⭐⭐⭐)
          </h2>
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              🎯 목표 결과:
            </h3>
            <StyleSpacingAnswer />
          </div>
          <StyleSpacingPractice />
        </section>

        {/* 실습 4: Border 스타일 (어려움) */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            실습 4: Border 스타일 (⭐⭐⭐⭐)
          </h2>
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              🎯 목표 결과:
            </h3>
            <StyleBorderAnswer />
          </div>
          <StyleBorderPractice />
        </section>

        {/* 실습 5: 고급 스타일 (최고난이도) */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            실습 5: 고급 스타일 (⭐⭐⭐⭐⭐)
          </h2>
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-700">
              🎯 목표 결과:
            </h3>
            <StyleAdvancedAnswer />
          </div>
          <StyleAdvancedPractice />
        </section>
      </div>
    </div>
  );
}
