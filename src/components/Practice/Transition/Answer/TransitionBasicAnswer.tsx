export default function TransitionBasicAnswer() {
  return (
    <div className="space-y-8">
      {/* 기본 호버 전환 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">기본 호버 전환</h3>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600">
            색상 전환
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg transition-transform duration-300 hover:scale-105">
            크기 전환
          </button>
        </div>
      </div>

      {/* 그림자 전환 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">그림자 전환</h3>
        <div className="w-32 h-32 mx-auto bg-purple-500 rounded-lg transition-shadow duration-500 hover:shadow-2xl cursor-pointer flex items-center justify-center">
          <span className="text-white font-semibold">Hover me</span>
        </div>
      </div>

      {/* 투명도 전환 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">투명도 전환</h3>
        <div className="w-32 h-32 mx-auto bg-red-500 rounded-lg transition-opacity duration-700 hover:opacity-50 cursor-pointer flex items-center justify-center">
          <span className="text-white font-semibold">Fade</span>
        </div>
      </div>

      {/* 위치 전환 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">위치 전환</h3>
        <div className="w-32 h-32 mx-auto bg-yellow-500 rounded-lg transition-transform duration-500 hover:translate-x-4 hover:-translate-y-2 cursor-pointer flex items-center justify-center">
          <span className="text-gray-800 font-semibold">Move</span>
        </div>
      </div>
    </div>
  );
}
