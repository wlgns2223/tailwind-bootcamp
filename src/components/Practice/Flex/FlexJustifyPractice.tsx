"use client";

export default function FlexJustifyPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 3: Flex 정렬 제어 (보통)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 아이템들을 중앙에 배치하고 세로로도 중앙 정렬하세요.
        </p>
        {/* TODO: justify-content: center; align-items: center를 TailwindCSS로 번역하세요 */}
        <div className=" h-32">
          <div className="bg-purple-200 p-4 rounded">Centered Item</div>
        </div>
      </div>
    </div>
  );
}
