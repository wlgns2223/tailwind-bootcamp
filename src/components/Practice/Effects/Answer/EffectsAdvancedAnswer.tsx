export default function EffectsAdvancedAnswer() {
  return (
    <div className="p-8 space-y-6">
      {/* 3D 카드 효과 */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">3D 카드 효과</h3>
        <div className="perspective-1000">
          <div className="w-64 h-40 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg transform-gpu transition-all duration-500 hover:rotate-y-12 hover:scale-105 hover:shadow-2xl">
            <div className="p-6 text-white">
              <h4 className="text-lg font-bold">3D 카드</h4>
              <p className="mt-2 text-sm opacity-90">마우스를 올려보세요!</p>
            </div>
          </div>
        </div>
      </div>

      {/* 플로팅 버튼들 */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">플로팅 버튼</h3>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-600 active:scale-95">
            클릭하세요
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 hover:bg-green-600 active:scale-95">
            눌러보세요
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 hover:bg-purple-600 active:scale-95">
            터치하세요
          </button>
        </div>
      </div>

      {/* 글리치 효과 */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">글리치 효과</h3>
        <div className="relative inline-block">
          <div className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:animate-pulse hover:text-red-500">
            GLITCH
          </div>
          <div className="absolute inset-0 text-4xl font-bold text-blue-500 opacity-0 transition-all duration-300 hover:opacity-30 hover:translate-x-1 hover:-translate-y-1">
            GLITCH
          </div>
          <div className="absolute inset-0 text-4xl font-bold text-red-500 opacity-0 transition-all duration-300 hover:opacity-30 hover:-translate-x-1 hover:translate-y-1">
            GLITCH
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  );
}
