export default function GradientBasicAnswer() {
  return (
    <div className="space-y-6">
      {/* 기본 선형 그라디언트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">기본 선형 그라디언트</h3>
        <div className="w-64 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-semibold">Blue to Purple</span>
        </div>
      </div>

      {/* 3색 그라디언트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">3색 그라디언트</h3>
        <div className="w-64 h-32 mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-semibold">Pink to Yellow</span>
        </div>
      </div>

      {/* 수직 그라디언트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">수직 그라디언트</h3>
        <div className="w-64 h-32 mx-auto bg-gradient-to-b from-green-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-semibold">Green to Blue</span>
        </div>
      </div>

      {/* 대각선 그라디언트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">대각선 그라디언트</h3>
        <div className="w-64 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-semibold">Yellow to Red</span>
        </div>
      </div>
    </div>
  );
}
