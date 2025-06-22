"use client";

import { useState } from "react";
import InstructorAnimationExample from "./Instructor/InstructorAnimationExample";

export default function LiveCodingDemoAnimation() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "기본 컨테이너 설정",
      description: "그리드 레이아웃과 기본 스타일링",
      hint: "grid grid-cols-1 md:grid-cols-3 gap-4",
    },
    {
      name: "Spin 애니메이션",
      description: "회전 애니메이션 적용",
      hint: "p-6 rounded-lg text-center text-white bg-red-500 animate-spin",
    },
    {
      name: "Pulse 애니메이션",
      description: "깜빡이는 애니메이션 적용",
      hint: "p-6 rounded-lg text-center text-white bg-blue-500 animate-pulse",
    },
    {
      name: "Bounce 애니메이션",
      description: "튀는 애니메이션 적용",
      hint: "p-6 rounded-lg text-center text-white bg-green-500 animate-bounce",
    },
    {
      name: "Ping 효과",
      description: "펄스 확산 효과 적용",
      hint: "p-6 rounded-lg text-center text-white bg-purple-500 animate-ping",
    },
    {
      name: "Hover 애니메이션",
      description: "마우스 오버 시 크기 변화 효과",
      hint: "p-6 rounded-lg text-center text-white bg-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 단계별 안내 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
        <h4 className="font-semibold text-gray-700 mb-3">📚 애니메이션 강의 진행 가이드</h4>

        {/* 단계 네비게이션 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                currentStep === index ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}. {step.name}
            </button>
          ))}
        </div>

        {/* 현재 단계 정보 */}
        <div className="p-3 bg-purple-50 rounded border border-purple-200">
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
        <InstructorAnimationExample />
      </div>
    </div>
  );
}
