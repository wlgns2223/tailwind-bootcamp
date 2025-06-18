"use client";

export default function RowFlexAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="flex space-x-4">
        <div className="flex-1 p-4 bg-gray-100 rounded">Item 1</div>
        <div className="flex-1 p-4 bg-gray-100 rounded">Item 2</div>
        <div className="flex-1 p-4 bg-gray-100 rounded">Item 3</div>
      </div>
    </div>
  );
}
