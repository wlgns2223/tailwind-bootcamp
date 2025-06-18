"use client";

export default function ResponsiveGridAnswer() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-green-700 font-semibold mb-3 flex items-center">
        ✅ 정답 예시 - 이렇게 나와야 합니다
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-purple-100 rounded text-center">Card 1</div>
        <div className="p-4 bg-purple-100 rounded text-center">Card 2</div>
        <div className="p-4 bg-purple-100 rounded text-center">Card 3</div>
        <div className="p-4 bg-purple-100 rounded text-center">Card 4</div>
        <div className="p-4 bg-purple-100 rounded text-center">Card 5</div>
        <div className="p-4 bg-purple-100 rounded text-center">Card 6</div>
      </div>
    </div>
  );
}
