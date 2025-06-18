export default function ShadowEffectsAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 예시 - 그림자 효과
      </h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Small Shadow</h3>
          <p className="text-gray-600 text-sm">shadow-sm 적용</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Medium Shadow</h3>
          <p className="text-gray-600 text-sm">shadow-md 적용</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">Large Shadow</h3>
          <p className="text-gray-600 text-sm">shadow-lg 적용</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-xl">
          <h3 className="font-semibold mb-2">Extra Large</h3>
          <p className="text-gray-600 text-sm">shadow-xl 적용</p>
        </div>
      </div>
    </div>
  );
}
