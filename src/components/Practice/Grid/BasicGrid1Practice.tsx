"use client";

export default function BasicGridPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 1: 기본 Grid 레이아웃 (쉬움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 3열로 구성된 기본 Grid 레이아웃을 만드세요.
        </p>
        {/* TODO: display: grid; grid-template-columns: repeat(3, 1fr)를 TailwindCSS로 번역하세요 */}
        <div className="">
          <div className="bg-blue-200 p-4 rounded text-center">Item 1</div>
          <div className="bg-green-200 p-4 rounded text-center">Item 2</div>
          <div className="bg-yellow-200 p-4 rounded text-center">Item 3</div>
          <div className="bg-red-200 p-4 rounded text-center">Item 4</div>
          <div className="bg-purple-200 p-4 rounded text-center">Item 5</div>
          <div className="bg-pink-200 p-4 rounded text-center">Item 6</div>
        </div>
      </div>
    </div>
  );
}
