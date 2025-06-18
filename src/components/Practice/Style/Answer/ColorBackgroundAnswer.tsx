"use client";

export default function ColorBackgroundAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="space-y-4">
        <p className="text-blue-600">파란색 텍스트 (text-blue-600)</p>
        <p className="bg-green-100 p-2 rounded">초록색 배경 (bg-green-100)</p>
        <div className="bg-red-500 text-white p-2 rounded inline-block">
          <span>빨간색 배경 + 흰색 텍스트 (bg-red-500 text-white)</span>
        </div>
      </div>
    </div>
  );
}
