"use client";

export default function BasicFlexAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 1: 기본 Flex 컨테이너
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <p className="text-sm text-green-700 mb-4">
          정답: <code className="bg-white px-1 rounded">flex</code>
        </p>
        <div className="flex">
          <div className="bg-blue-200 p-4 rounded">Item 1</div>
          <div className="bg-green-200 p-4 rounded">Item 2</div>
          <div className="bg-yellow-200 p-4 rounded">Item 3</div>
        </div>
      </div>
    </div>
  );
}
