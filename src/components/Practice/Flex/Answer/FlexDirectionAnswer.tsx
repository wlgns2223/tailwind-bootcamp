"use client";

export default function FlexDirectionAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 2: Flex 방향 제어
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <p className="text-sm text-green-700 mb-4">
          정답: <code className="bg-white px-1 rounded">flex flex-col</code>
        </p>
        <div className="flex flex-col">
          <div className="bg-red-200 p-4 rounded">Header</div>
          <div className="bg-blue-200 p-4 rounded">Content</div>
          <div className="bg-green-200 p-4 rounded">Footer</div>
        </div>
      </div>
    </div>
  );
}
