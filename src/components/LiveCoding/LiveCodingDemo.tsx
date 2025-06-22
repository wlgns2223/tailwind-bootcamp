"use client";

import { useState } from "react";
import InstructorTransitionExample from "./Instructor/InstructorTransitionExample";

export default function LiveCodingDemo() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "기본 버튼 스타일",
      description: "패딩, 배경색, 텍스트 색상, 모서리 둥글게",
      hint: "px-4 py-2 bg-green-500 text-white rounded",
    },
    {
      name: "Transition 기본 설정",
      description: "모든 속성에 전환 효과, 지속시간 200ms",
      hint: "transition-all duration-200",
    },
    {
      name: "Hover 색상 변화",
      description: "마우스 오버 시 더 진한 초록색으로 변화",
      hint: "hover:bg-green-600",
    },
    {
      name: "Scale 효과",
      description: "호버 시 1.05배 확대 효과",
      hint: "hover:scale-105",
    },
    {
      name: "Active 상태",
      description: "클릭 시 0.95배 축소 효과로 피드백 제공",
      hint: "active:scale-95",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">📚 강의 진행 가이드</h4>

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
      </div>

      {/* 강사 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 클래스를 작성합니다
          </span>
        </h4>
        <InstructorTransitionExample />
      </div>
    </div>
  );
}
