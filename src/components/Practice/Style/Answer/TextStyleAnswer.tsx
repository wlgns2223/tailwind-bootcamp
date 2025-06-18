"use client";

export default function TextStyleAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">큰 제목 (text-3xl + font-bold)</h1>
        <h2 className="text-lg font-semibold">
          중간 제목 (text-lg + font-semibold)
        </h2>
        <p className="text-base">일반 텍스트 (text-base)</p>
        <p className="font-light">가벼운 텍스트 (font-light)</p>
      </div>
    </div>
  );
}
