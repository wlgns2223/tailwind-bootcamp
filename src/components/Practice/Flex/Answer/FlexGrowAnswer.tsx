"use client";

export default function FlexGrowAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 4: Flex 아이템 크기 제어
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <p className="text-sm text-green-700 mb-4">
          정답: 중간 아이템에{" "}
          <code className="bg-white px-1 rounded">flex-1</code> 추가
        </p>
        <div className="flex gap-4">
          <div className="bg-red-200 p-4 rounded">Left</div>
          <div className="bg-blue-200 p-4 rounded flex-1">Center (늘어남)</div>
          <div className="bg-green-200 p-4 rounded">Right</div>
        </div>
      </div>
    </div>
  );
}
