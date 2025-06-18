"use client";

import { useState } from "react";
import InstructorGridExample from "./Instructor/InstructorGridExample";

export default function GridLiveCodingGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "기본 컨테이너",
      description: "전체 너비, 패딩, 배경색",
      hint: "width: 100%; padding: 1.5rem; background-color: #f3f4f6; border-radius: 0.5rem;",
    },
    {
      name: "제목 스타일",
      description: "큰 텍스트, 두꺼운 글씨, 아래 여백",
      hint: "font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;",
    },
    {
      name: "그리드 컨테이너",
      description: "그리드 레이아웃, 3열, 간격",
      hint: "display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;",
    },
    {
      name: "그리드 아이템",
      description: "패딩, 배경색, 중앙 정렬",
      hint: "padding: 1rem; background-color: #3b82f6; color: white; border-radius: 0.25rem; text-align: center;",
    },
    {
      name: "반응형 그리드",
      description: "모바일 1열, 태블릿 2열, 데스크톱 3열",
      hint: "display: grid; grid-template-columns: 1fr; gap: 1rem; @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); } @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }",
    },
    {
      name: "반응형 아이템",
      description: "패딩, 녹색 배경, 중앙 정렬",
      hint: "padding: 1rem; background-color: #10b981; color: white; border-radius: 0.25rem; text-align: center;",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          📚 Grid 강의 진행 가이드
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
        <InstructorGridExample />
      </div>
    </div>
  );
}
