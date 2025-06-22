"use client";

import { useState } from "react";
import InstructorGradientExample from "./Instructor/InstructorGradientExample";

export default function GradientLiveCodingGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "컨테이너",
      description: "전체 너비, 넉넉한 패딩, 연한 배경",
      hint: "width: 100%; padding: 1.5rem; background-color: #f9fafb; border-radius: 0.5rem;",
    },
    {
      name: "선형 그라디언트",
      description: "왼쪽에서 오른쪽으로 파랑-보라 그라디언트",
      hint: "padding: 2rem; background: linear-gradient(to right, #3b82f6, #8b5cf6); color: white; border-radius: 0.5rem; text-align: center; font-weight: 600; margin-bottom: 1rem;",
    },
    {
      name: "원형 그라디언트",
      description: "중심에서 바깥으로 퍼지는 극적인 오렌지-보라 그라디언트",
      hint: "padding: 2rem; background: radial-gradient(circle, #fb923c, #581c87); color: white; border-radius: 0.5rem; text-align: center; font-weight: 600; margin-bottom: 1rem; /* TailwindCSS: bg-radial from-orange-400 to-purple-900 */",
    },
    {
      name: "복잡한 그라디언트",
      description: "여러 색상을 거치는 대각선 그라디언트",
      hint: "padding: 2rem; background: linear-gradient(to bottom right, #eab308, #ef4444, #8b5cf6); color: white; border-radius: 0.5rem; text-align: center; font-weight: 600; margin-bottom: 1rem;",
    },
    {
      name: "텍스트 그라디언트",
      description: "그라디언트 텍스트 효과",
      hint: "font-size: 2.25rem; font-weight: 700; background: linear-gradient(to right, #3b82f6, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align: center;",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">📚 Gradient 강의 진행 가이드</h4>

        {/* 단계 네비게이션 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                currentStep === index ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}. {step.name}
            </button>
          ))}
        </div>

        {/* 현재 단계 정보 */}
        <div className="p-3 bg-orange-50 rounded border border-orange-200">
          <div className="text-sm">
            <strong>현재 단계:</strong> {steps[currentStep].name}
            <br />
            <strong>설명:</strong> {steps[currentStep].description}
            <br />
            <strong>힌트:</strong> <code className="bg-white px-1 rounded text-xs">{steps[currentStep].hint}</code>
          </div>
        </div>

        {/* 현재 단계 완성 모습 미리보기 */}
        <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
          <h5 className="font-semibold text-blue-700 mb-2">🎯 {steps[currentStep].name} 완성 모습</h5>
          <div className="bg-white p-3 rounded border border-gray-200">
            {currentStep === 0 && (
              <div className="w-full p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-center">컨테이너 기본 스타일</p>
              </div>
            )}
            {currentStep === 1 && (
              <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center font-semibold mb-4">
                Linear Gradient
              </div>
            )}
            {currentStep === 2 && (
              <div className="p-8 bg-radial from-orange-400 to-purple-900 text-white rounded-lg text-center font-semibold mb-4">
                Radial Gradient
              </div>
            )}
            {currentStep === 3 && (
              <div className="p-8 bg-gradient-to-br from-yellow-500 via-red-500 to-purple-600 text-white rounded-lg text-center font-semibold mb-4">
                Complex Gradient
              </div>
            )}
            {currentStep === 4 && (
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent text-center py-4">
                Gradient Text
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 강사 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 클래스를 작성합니다
          </span>
        </h4>
        <InstructorGradientExample />
      </div>
    </div>
  );
}
