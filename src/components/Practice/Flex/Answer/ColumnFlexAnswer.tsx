"use client";

export default function ColumnFlexAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="flex flex-col items-center justify-between h-40 p-4 bg-gray-100 rounded mt-6">
        <div className="px-4 py-2 bg-indigo-500 text-white rounded">Box 1</div>
        <div className="px-4 py-2 bg-indigo-500 text-white rounded">Box 2</div>
        <div className="px-4 py-2 bg-indigo-500 text-white rounded">Box 3</div>
      </div>
    </div>
  );
}
