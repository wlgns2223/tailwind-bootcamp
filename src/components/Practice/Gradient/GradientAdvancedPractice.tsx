export default function GradientAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          고급 Gradient 효과 만들기:
        </h4>
        <div className="p-8 space-y-8">
          {/* 그라디언트 텍스트 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">그라디언트 텍스트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent 클래스를 적용하세요 */}
              GRADIENT
            </div>
          </div>

          {/* 복합 그라디언트 카드 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">복합 그라디언트 카드</h3>
            <div className="">
              {/* 여기에 복합 그라디언트 카드를 작성하세요 */}
              <div className="">{/* 카드 헤더 영역 */}</div>
              <div className="">
                {/* 카드 콘텐츠 영역 */}
                <h4 className="">Premium Card</h4>
                <p className="">
                  Beautiful gradient combinations with shadows and transparency
                  effects.
                </p>
                <button className="">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
