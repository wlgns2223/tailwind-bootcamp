"use client";

export default function GridGapPractice() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        실습 2: Grid 간격 설정 (쉬움)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          목표: 2열 Grid에 적절한 간격을 설정하세요.
        </p>
        {/* TODO: gap: 1rem을 TailwindCSS로 번역하세요 */}
        <div className="grid grid-cols-2">
          <div className="bg-indigo-200 p-4 rounded text-center">Box A</div>
          <div className="bg-teal-200 p-4 rounded text-center">Box B</div>
          <div className="bg-orange-200 p-4 rounded text-center">Box C</div>
          <div className="bg-cyan-200 p-4 rounded text-center">Box D</div>
        </div>
      </div>
    </div>
  );
}
