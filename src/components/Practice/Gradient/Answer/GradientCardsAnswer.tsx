export default function GradientCardsAnswer() {
  return (
    <div className="mb-8">
      {/* 목표 CSS 설명 */}
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 목표 CSS:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`/* 그라디언트 카드 컨테이너 */
.gradient-cards-container {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */
  padding: 1.5rem;
  border: 2px solid #86efac; /* border-green-300 */
  border-radius: 0.5rem; /* rounded-lg */
  background-color: #f0fdf4; /* bg-green-50 */
}

@media (min-width: 768px) {
  .gradient-cards-container {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
}

/* 가로 그라디언트 카드 */
.gradient-card-horizontal {
  background: linear-gradient(to right, #60a5fa, #9333ea); /* from-blue-400 to-purple-600 */
  color: white;
  border-radius: 0.5rem; /* rounded-lg */
  padding: 1.5rem; /* p-6 */
  min-height: 8rem; /* min-h-32 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 세로 그라디언트 카드 */
.gradient-card-vertical {
  background: linear-gradient(to bottom, #4ade80, #3b82f6); /* from-green-400 to-blue-500 */
  color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 대각선 그라디언트 카드 */
.gradient-card-diagonal {
  background: linear-gradient(to bottom right, #facc15, #ef4444); /* from-yellow-400 to-red-500 */
  color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 3색 그라디언트 카드 */
.gradient-card-three-colors {
  background: linear-gradient(to right, #60a5fa, #a855f7, #ec4899); /* from-blue-400 via-purple-500 to-pink-500 */
  color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        </pre>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-green-700">정답 예시 - 그라디언트 카드</h3>
      <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg p-6 min-h-32 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-semibold mb-2">가로 그라디언트</h3>
            <p className="text-sm">파란색에서 보라색으로</p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-400 to-blue-500 text-white rounded-lg p-6 min-h-32 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-semibold mb-2">세로 그라디언트</h3>
            <p className="text-sm">초록색에서 파란색으로</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-400 to-red-500 text-white rounded-lg p-6 min-h-32 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-semibold mb-2">대각선 그라디언트</h3>
            <p className="text-sm">노란색에서 빨간색으로</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-lg p-6 min-h-32 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-semibold mb-2">3색 그라디언트</h3>
            <p className="text-sm">파란색, 보라색, 분홍색</p>
          </div>
        </div>
      </div>
    </div>
  );
}
