"use client";

export default function BasicGridAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-100 rounded text-center">Item 1</div>
        <div className="p-4 bg-blue-100 rounded text-center">Item 2</div>
        <div className="p-4 bg-blue-100 rounded text-center">Item 3</div>
        <div className="p-4 bg-blue-100 rounded text-center">Item 4</div>
      </div>
    </div>
  );
}
