"use client";

export default function FlexComplexAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 5: 복합 Flex 레이아웃
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <p className="text-sm text-green-700 mb-4">
          정답:{" "}
          <code className="bg-white px-1 rounded">
            flex justify-between items-center
          </code>
        </p>
        <div className="flex justify-between items-center h-16 bg-gray-100 px-4 rounded">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Logo</div>
          <div className="flex gap-4">
            <div className="bg-gray-300 px-3 py-2 rounded">Home</div>
            <div className="bg-gray-300 px-3 py-2 rounded">About</div>
            <div className="bg-gray-300 px-3 py-2 rounded">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
