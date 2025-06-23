"use client";

export default function TransitionAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">고급 Transition 효과 만들기:</h4>
        <div className="p-8 space-y-8">
          {/* 복합 전환 카드 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">복합 전환 카드</h3>
            <div className="">
              {/* 여기에 복합 전환 카드를 작성하세요 */}
              <div className="">{/* 카드 헤더 영역 */}</div>
              <div className="">
                {/* 카드 콘텐츠 영역 */}
                <h4 className="">Advanced Card</h4>
                <p className="">Multiple transitions combined</p>
              </div>
            </div>
          </div>

          {/* 순차 애니메이션 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">순차 애니메이션</h3>
            <div className="flex justify-center space-x-2 group">
              <div className=" transition group-hover:translate-y-4 size-4 bg-purple-400 rounded-full">
                {/* 여기에 delay를 사용한 순차 애니메이션을 작성하세요 */}
              </div>
              <div className="delay-100 transition group-hover:translate-y-4 size-4 bg-blue-400 rounded-full">
                {/* delay-100 사용 */}
              </div>
              <div className="delay-200 transition group-hover:translate-y-4 size-4 bg-green-400 rounded-full">
                {/* delay-200 사용 */}
              </div>
              <div className="delay-300 transition group-hover:translate-y-4 size-4 bg-orange-400 rounded-full">
                {/* delay-300 사용 */}
              </div>
              <div className="delay-500 transition group-hover:translate-y-4 size-4 bg-red-400 rounded-full">
                {/* delay-500 사용 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
