export default function GradientBasicAnswer() {
  return (
    <div className="space-y-6">
      {/* 목표 CSS 설명 */}
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 목표 CSS:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`/* 기본 선형 그라디언트 (좌에서 우로) */
.gradient-horizontal {
  width: 16rem; /* w-64 */
  height: 8rem; /* h-32 */
  background: linear-gradient(to right, #3b82f6, #9333ea); /* from-blue-500 to-purple-600 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 3색 그라디언트 */
.gradient-three-colors {
  width: 16rem;
  height: 8rem;
  background: linear-gradient(to right, #ec4899, #ef4444, #eab308); /* from-pink-500 via-red-500 to-yellow-500 */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 수직 그라디언트 (위에서 아래로) */
.gradient-vertical {
  width: 16rem;
  height: 8rem;
  background: linear-gradient(to bottom, #4ade80, #3b82f6); /* from-green-400 to-blue-500 */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 대각선 그라디언트 (좌상단에서 우하단으로) */
.gradient-diagonal {
  width: 16rem;
  height: 8rem;
  background: linear-gradient(to bottom right, #facc15, #ef4444); /* from-yellow-400 to-red-500 */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        </pre>
      </div>

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
