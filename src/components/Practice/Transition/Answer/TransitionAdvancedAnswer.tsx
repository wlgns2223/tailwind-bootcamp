export default function TransitionAdvancedAnswer() {
  return (
    <div className="p-8 space-y-8">
      {/* 복합 전환 카드 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">복합 전환 카드</h3>
        <div className="w-64 mx-auto bg-white rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden group">
          <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 group-hover:from-blue-500 group-hover:to-purple-500"></div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-purple-600">
              Advanced Card
            </h4>
            <p className="text-gray-600 transition-all duration-500 group-hover:text-gray-800">
              Multiple transitions combined
            </p>
          </div>
        </div>
      </div>

      {/* 순차 애니메이션 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">순차 애니메이션</h3>
        <div className="flex justify-center space-x-2 group">
          <div className="w-4 h-4 bg-blue-500 rounded-full transition-all duration-300 group-hover:translate-y-2"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full transition-all duration-300 delay-100 group-hover:translate-y-2"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full transition-all duration-300 delay-200 group-hover:translate-y-2"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full transition-all duration-300 delay-300 group-hover:translate-y-2"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full transition-all duration-300 delay-500 group-hover:translate-y-2"></div>
        </div>
      </div>
    </div>
  );
}
