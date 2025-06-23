export default function GradientAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">고급 Gradient 효과 만들기:</h4>
        <div className="p-8 space-y-8">
          {/* 그라디언트 텍스트 */}
          <div className="text-center">
            <h3 className=" text-lg font-semibold mb-4">그라디언트 텍스트</h3>
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#2563eb] via-[#9333ea] to-[#db2777]">
              {/* 여기에 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent 클래스를 적용하세요 */}
              GRADIENT
            </div>
          </div>

          {/* 복합 그라디언트 카드 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">복합 그라디언트 카드</h3>
            <div className="shadow-2xl overflow-hidden rounded-xl w-80 mx-auto bg-linear-to-br from-[#312e81] via-[#1e3a8a] to-[#581c87]">
              {/* 여기에 복합 그라디언트 카드를 작성하세요 */}
              <div className="relative h-48 bg-linear-to-br from-[#60a5fa] to-[#a855f7] opacity-80">
                <div className="absolute inset-0 bg-linear-[to_top,rgba(0,0,0,0.2),_transparent]"></div>
              </div>
              <div className="p-6 text-white">
                {/* 카드 콘텐츠 영역 */}
                <h4 className="text-xl font-semibold">Premium Card</h4>
                <p className="text-sm text-neutral-200">
                  Beautiful gradient combinations with shadows and transparency effects.
                </p>
                <button className="mt-2 w-full py-2 rounded-lg font-semibold shadow-lg bg-linear-to-r from-[#ec4899] to-[#8b5cf6] hover:from-[#db2777] hover:to-[#7c3aed]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
