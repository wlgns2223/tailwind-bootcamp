"use client";

export default function EffectsOpacityPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          Opacity(투명도) 효과 만들기:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              1단계: 높은 투명도
            </h3>
            <div className="">
              {/* 여기에 opacity-25 클래스를 적용하세요 */}
              높은 투명도 박스
            </div>
          </div>

          {/* 2단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              2단계: 중간 투명도
            </h3>
            <div className="">
              {/* 여기에 opacity-50 클래스를 적용하세요 */}
              중간 투명도 박스
            </div>
          </div>

          {/* 3단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              3단계: 낮은 투명도
            </h3>
            <div className="">
              {/* 여기에 opacity-75 클래스를 적용하세요 */}
              낮은 투명도 박스
            </div>
          </div>

          {/* 4단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              4단계: 호버 투명도 변경
            </h3>
            <div className="">
              {/* 여기에 opacity-50 hover:opacity-100 transition-opacity 클래스를 적용하세요 */}
              호버 투명도 박스
            </div>
          </div>

          {/* 5단계 */}
          <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              5단계: 복합 투명도 효과
            </h3>
            <div className="">
              {/* 여기에 겹쳐진 투명도 효과를 작성하세요 */}
              복합 투명도 박스
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
