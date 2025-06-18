"use client";

import { useState } from "react";

interface LiveCodingStep {
  name: string;
  key: string;
  hint: string;
  description: string;
}

interface SimpleLiveCodingProps {
  title: string;
  steps: LiveCodingStep[];
  renderComponent: (classes: Record<string, string>) => React.ReactNode;
  generateCode: (classes: Record<string, string>) => string;
  referenceCSS?: string;
  tips?: string;
}

export default function SimpleLiveCoding({
  title,
  steps,
  renderComponent,
  generateCode,
  referenceCSS,
  tips,
}: SimpleLiveCodingProps) {
  const [classes, setClasses] = useState<Record<string, string>>({});

  const updateClass = (key: string, value: string) => {
    setClasses((prev) => ({ ...prev, [key]: value }));
  };

  const resetAll = () => {
    setClasses({});
  };

  const applyHint = (stepIndex: number) => {
    const step = steps[stepIndex];
    updateClass(step.key, step.hint);
  };

  return (
    <div className="space-y-6">
      {/* 컨트롤 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          🎛️ {title} 컨트롤 패널
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={resetAll}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
          >
            🔄 초기화
          </button>
          {steps.map((step, index) => (
            <button
              key={step.key}
              onClick={() => applyHint(index)}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
            >
              {index + 1}. {step.name}
            </button>
          ))}
        </div>

        <div className="p-3 bg-orange-50 rounded border border-orange-200">
          <div className="text-sm">
            <strong>진행 상황:</strong> {Object.keys(classes).length} /{" "}
            {steps.length} 단계 완료
          </div>
        </div>
      </div>

      {/* 실제 렌더링 결과 */}
      <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[200px]">
        {renderComponent(classes)}
      </div>

      {/* 2컬럼 레이아웃 - 참고 코드와 생성된 코드 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 참고 CSS 코드 */}
        {referenceCSS && (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
            <div className="text-white mb-2">📚 참고할 CSS Module 코드:</div>
            <pre>{referenceCSS}</pre>
          </div>
        )}

        {/* 생성된 코드 표시 */}
        <div className="bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto">
          <div className="text-white mb-2">📋 생성된 TailwindCSS 코드:</div>
          <pre>{generateCode(classes)}</pre>
        </div>
      </div>

      {/* 팁 */}
      {tips && (
        <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
          <p className="text-xs text-yellow-700">
            💡 <strong>강사 팁:</strong> {tips}
          </p>
        </div>
      )}
    </div>
  );
}
