"use client";

import { useState } from "react";
import InstructorEffectsExample from "./Instructor/InstructorEffectsExample";

export default function EffectsLiveCodingGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "컨테이너",
      description: "전체 너비, 넉넉한 패딩, 배경색",
      hint: "width: 100%; padding: 1.5rem; background-color: #f3f4f6; border-radius: 0.5rem;",
    },
    {
      name: "그림자 박스",
      description: "패딩, 흰 배경, 그림자 효과",
      hint: "padding: 1rem; background-color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 1rem;",
    },
    {
      name: "투명도 박스",
      description: "파란 배경, 75% 투명도",
      hint: "padding: 1rem; background-color: #3b82f6; color: white; border-radius: 0.5rem; opacity: 0.75; margin-bottom: 1rem;",
    },
    {
      name: "변형 박스",
      description: "크기 확대, 회전, 호버 효과, 전환 애니메이션",
      hint: "padding: 1rem; background-color: #10b981; color: white; border-radius: 0.5rem; transform: scale(1.05) rotate(3deg); transition: transform 0.3s;",
    },
    {
      name: "블러 박스",
      description: "그라데이션 배경, 백드롭 블러",
      hint: "padding: 1rem; background: linear-gradient(to right, #eab308, #ef4444); color: white; border-radius: 0.5rem; backdrop-filter: blur(4px);",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          📚 Effects 강의 진행 가이드
        </h4>

        {/* 단계 네비게이션 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                currentStep === index
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
            <strong>힌트:</strong>{" "}
            <code className="bg-white px-1 rounded text-xs">
              {steps[currentStep].hint}
            </code>
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
        <InstructorEffectsExample />
      </div>
    </div>
  );
}
