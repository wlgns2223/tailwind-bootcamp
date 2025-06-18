"use client";

import { useState } from "react";
import InstructorFlexExample from "./Instructor/InstructorFlexExample";

export default function LiveCodingDemo() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "기본 컨테이너",
      description: "전체 너비, 패딩, 배경색, 모서리 둥글게",
      hint: "width: 100%; padding: 1rem; background-color: #e5e7eb; border-radius: 0.375rem;",
    },
    {
      name: "제목 스타일",
      description: "큰 텍스트, 두꺼운 글씨, 아래 여백",
      hint: "font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;",
    },
    {
      name: "Flex 컨테이너",
      description: "가로 배치, 아이템 간 간격",
      hint: "display: flex; gap: 1rem;",
    },
    {
      name: "Flex 아이템",
      description: "동일한 너비, 패딩, 배경색",
      hint: "flex: 1; padding: 1rem; background-color: #f3f4f6; border-radius: 0.25rem;",
    },
    {
      name: "세로 Flex 컨테이너",
      description: "세로 배치, 중앙 정렬, 양끝 정렬",
      hint: "display: flex; flex-direction: column; align-items: center; justify-content: space-between; margin-top: 1.5rem; height: 10rem; background-color: #f3f4f6; padding: 1rem; border-radius: 0.25rem;",
    },
    {
      name: "세로 Flex Item",
      description: "패딩, 배경색, 텍스트 색상",
      hint: "padding: 0.5rem; background-color: #6366f1; color: white; border-radius: 0.25rem;",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          📚 강의 진행 가이드
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
        <InstructorFlexExample />
      </div>
    </div>
  );
}
