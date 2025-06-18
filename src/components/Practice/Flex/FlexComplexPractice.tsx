"use client";

export default function FlexComplexPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 5: 복합 Flex 레이아웃 (매우 어려움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 네비게이션 바처럼 로고는 왼쪽, 메뉴는 오른쪽에 배치하고 세로
          중앙 정렬하세요.
        </p>
        {/* TODO: justify-content: space-between; align-items: center를 TailwindCSS로 번역하세요 */}
        <div className=" h-16 bg-gray-100 px-4 rounded">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Logo</div>
          <div className="flex gap-4">
            <div className="bg-gray-300 px-3 py-2 rounded">Home</div>
            <div className="bg-gray-300 px-3 py-2 rounded">About</div>
            <div className="bg-gray-300 px-3 py-2 rounded">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
