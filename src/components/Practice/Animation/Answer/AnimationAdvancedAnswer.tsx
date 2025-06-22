export default function AnimationAdvancedAnswer() {
  return (
    <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
      <div className="space-y-8">
        {/* 멀티 이펙트 버튼 */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:rotate-3 hover:-translate-y-1">
            Multi Effect Button
          </button>
        </div>

        {/* 플립 카드 */}
        <div className="flex justify-center">
          <div className="group relative w-64 h-40 [perspective:1000px]">
            <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 w-full h-full bg-blue-500 text-white rounded-xl flex items-center justify-center text-center [backface-visibility:hidden]">
                <div>
                  <h3 className="text-lg font-semibold">Front Side</h3>
                  <p className="text-blue-100">Hover to flip</p>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-green-500 text-white rounded-xl flex items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div>
                  <h3 className="text-lg font-semibold">Back Side</h3>
                  <p className="text-green-100">Card flipped!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 페이드인 알림 */}
        <div className="text-center group">
          <div className="inline-block px-6 py-3 bg-green-100 text-green-800 rounded-lg border border-green-200 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            ✅ Success! Animation completed
          </div>
        </div>
      </div>
    </div>
  );
}
