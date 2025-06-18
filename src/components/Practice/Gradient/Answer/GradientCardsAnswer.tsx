export default function GradientCardsAnswer() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-green-700">
        정답 예시 - 그라디언트 카드
      </h3>
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
