"use client";

export default function ColorBackgroundPractice() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
      <p className="text-gray-500 text-center mb-4">
        색상과 배경을 적용해보세요:
      </p>

      <div className="space-y-4">
        {/* TODO: 색상과 배경을 적용해보세요 */}
        <p className="">파란색 텍스트 (text-blue-600)</p>
        <p className="">초록색 배경 (bg-green-100)</p>
        <div className="">
          <span className="">
            빨간색 배경 + 흰색 텍스트 (bg-red-500 text-white)
          </span>
        </div>
      </div>
    </div>
  );
}
