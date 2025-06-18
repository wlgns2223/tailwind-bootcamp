"use client";

import { useState } from "react";
import InstructorStyleExample from "./Instructor/InstructorStyleExample";

export default function StyleLiveCodingGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "컨테이너",
      description: "전체 너비, 패딩, 배경색, 그림자",
      hint: "width: 100%; padding: 1.5rem; background-color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);",
    },
    {
      name: "메인 타이틀",
      description: "큰 제목, 두꺼운 글씨, 중앙 정렬, 파란색",
      hint: "font-size: 1.875rem; font-weight: 700; text-align: center; color: #1d4ed8; margin-bottom: 1rem;",
    },
    {
      name: "서브타이틀",
      description: "중간 크기, 약간 두꺼운 글씨, 회색",
      hint: "font-size: 1.25rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;",
    },
    {
      name: "본문 텍스트",
      description: "기본 크기, 넓은 줄간격, 연한 회색",
      hint: "font-size: 1rem; line-height: 1.625; color: #6b7280; margin-bottom: 1rem;",
    },
    {
      name: "하이라이트",
      description: "노란 배경, 패딩, 둥근 모서리",
      hint: "background-color: #fef3c7; padding: 0.5rem 0.5rem; border-radius: 0.25rem; font-weight: 600;",
    },
    {
      name: "버튼",
      description: "파란 버튼, 패딩, 호버 효과, 전환 애니메이션",
      hint: "background-color: #3b82f6; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; transition: background-color 0.3s;",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          📚 Style 강의 진행 가이드
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
        <InstructorStyleExample />
      </div>
    </div>
  );
}
