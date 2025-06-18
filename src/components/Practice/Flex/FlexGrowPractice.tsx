"use client";

export default function FlexGrowPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 4: Flex 아이템 크기 제어 (어려움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 중간 아이템이 남은 공간을 모두 차지하도록 만드세요.
        </p>
        {/* TODO: 두 번째 아이템에 flex: 1을 TailwindCSS로 번역하세요 */}
        <div className="flex gap-4">
          <div className="bg-red-200 p-4 rounded">Left</div>
          <div className="bg-blue-200 p-4 rounded">
            Center (여기가 늘어나야 함)
          </div>
          <div className="bg-green-200 p-4 rounded">Right</div>
        </div>
      </div>
    </div>
  );
}
