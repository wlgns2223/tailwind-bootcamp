"use client";

export default function TextStylePractice() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
      <p className="text-gray-500 text-center mb-4">
        텍스트 스타일을 적용해보세요:
      </p>

      <div className="space-y-4">
        {/* TODO: 텍스트 스타일을 적용해보세요 */}
        <h1 className="">큰 제목 (text-3xl + font-bold)</h1>
        <h2 className="">중간 제목 (text-lg + font-semibold)</h2>
        <p className="">일반 텍스트 (text-base)</p>
        <p className="">가벼운 텍스트 (font-light)</p>
      </div>
    </div>
  );
}
