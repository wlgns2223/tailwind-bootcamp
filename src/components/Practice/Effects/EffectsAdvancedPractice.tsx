"use client";

export default function EffectsAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">고급 Effects 조합하기:</h4>
        <div className="p-8 space-y-6">
          {/* 3D 카드 효과 */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">3D 카드 효과</h3>
            <div className="">
              {/* 여기에 3D 카드 효과를 작성하세요 */}
              3D 카드
            </div>
          </div>

          {/* 플로팅 버튼들 */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">플로팅 버튼</h3>
            <div className="flex justify-center space-x-4">
              <button className="">
                {/* 여기에 플로팅 버튼 효과를 작성하세요 */}
                클릭하세요
              </button>
              <button className="">
                {/* 여기에 플로팅 버튼 효과를 작성하세요 */}
                눌러보세요
              </button>
              <button className="">
                {/* 여기에 플로팅 버튼 효과를 작성하세요 */}
                터치하세요
              </button>
            </div>
          </div>

          {/* 글리치 효과 */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">글리치 효과</h3>
            <div className="">
              {/* 여기에 글리치 효과를 작성하세요 */}
              GLITCH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
