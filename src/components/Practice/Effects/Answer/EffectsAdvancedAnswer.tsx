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

      {/* 그라데이션 애니메이션 */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">그라데이션 애니메이션</h3>
        <div className="w-64 h-16 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-gradient-x bg-size-200">
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-semibold">그라데이션</span>
          </div>
        </div>
      </div>

      {/* 모핑 셰이프 */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">모핑 셰이프</h3>
        <div className="flex justify-center space-x-8">
          <div className="w-16 h-16 bg-blue-500 transition-all duration-500 hover:rounded-full hover:rotate-45 hover:scale-125 hover:bg-purple-500 shadow-lg hover:shadow-xl"></div>
          <div className="w-16 h-16 bg-green-500 rounded-full transition-all duration-500 hover:rounded-none hover:rotate-12 hover:scale-125 hover:bg-yellow-500 shadow-lg hover:shadow-xl"></div>
          <div className="w-16 h-16 bg-red-500 transform rotate-45 transition-all duration-500 hover:rotate-0 hover:rounded-full hover:scale-125 hover:bg-orange-500 shadow-lg hover:shadow-xl"></div>
        </div>
      </div>

      {/* 파티클 효과 (CSS로 시뮬레이션) */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">파티클 효과</h3>
        <div className="relative w-64 h-32 mx-auto bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-semibold z-10">
              마우스를 올려보세요
            </span>
          </div>
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:animate-ping"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 group-hover:animate-pulse"></div>
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200 group-hover:animate-bounce"></div>
          <div className="absolute bottom-4 right-6 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 group-hover:animate-ping"></div>
          <div className="absolute top-12 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400 group-hover:animate-pulse"></div>
        </div>
      </div>

      {/* 네온 효과 */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">네온 효과</h3>
        <div className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-xl tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_#00bcd4,0_0_40px_#00bcd4,0_0_60px_#00bcd4] hover:text-white hover:border-white">
          NEON SIGN
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
