"use client";

export default function BasicFlexPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 1: 기본 Flex 컨테이너 (쉬움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 수평으로 나란히 배치되는 기본 Flex 컨테이너를 만드세요.
        </p>
        {/* TODO: display: flex를 TailwindCSS로 번역하세요 */}
        <div className="">
          <div className="bg-blue-200 p-4 rounded">Item 1</div>
          <div className="bg-green-200 p-4 rounded">Item 2</div>
          <div className="bg-yellow-200 p-4 rounded">Item 3</div>
        </div>
      </div>
    </div>
  );
}
