export default function GradientAdvancedAnswer() {
  return (
    <div className="p-8 space-y-8">
      {/* 그라디언트 텍스트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">그라디언트 텍스트</h3>
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          GRADIENT
        </div>
      </div>

      {/* 복합 그라디언트 카드 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">복합 그라디언트 카드</h3>
        <div className="w-80 mx-auto bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="p-6 text-white">
            <h4 className="text-xl font-bold mb-2">Premium Card</h4>
            <p className="text-blue-100 mb-4">
              Beautiful gradient combinations with shadows and transparency
              effects.
            </p>
            <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-semibold hover:from-pink-600 hover:to-violet-600 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
