export default function ResponsiveGridAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 예시 - 반응형 그리드
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded">Card 1</div>
          <div className="p-4 bg-green-100 rounded">Card 2</div>
          <div className="p-4 bg-purple-100 rounded">Card 3</div>
          <div className="p-4 bg-yellow-100 rounded">Card 4</div>
          <div className="p-4 bg-pink-100 rounded">Card 5</div>
          <div className="p-4 bg-indigo-100 rounded">Card 6</div>
        </div>
      </div>
    </div>
  );
}
