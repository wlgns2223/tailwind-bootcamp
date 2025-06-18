"use client";

export default function FlexJustifyAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 3: Flex 정렬 제어
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <p className="text-sm text-green-700 mb-4">
          정답:{" "}
          <code className="bg-white px-1 rounded">
            flex justify-center items-center
          </code>
        </p>
        <div className="flex justify-center items-center h-32">
          <div className="bg-purple-200 p-4 rounded">Centered Item</div>
        </div>
      </div>
    </div>
  );
}
