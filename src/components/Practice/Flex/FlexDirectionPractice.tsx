"use client";

export default function FlexDirectionPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 2: Flex 방향 제어 (쉬움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 세로로 배치되는 Flex 컨테이너를 만드세요.
        </p>
        {/* TODO: flex-direction: column을 TailwindCSS로 번역하세요 */}
        <div className="">
          <div className="bg-red-200 p-4 rounded">Header</div>
          <div className="bg-blue-200 p-4 rounded">Content</div>
          <div className="bg-green-200 p-4 rounded">Footer</div>
        </div>
      </div>
    </div>
  );
}
