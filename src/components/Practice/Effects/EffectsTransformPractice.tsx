"use client";

export default function EffectsTransformPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          Transform(변형) 효과 만들기:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              1단계: 기본 회전
            </h3>
            <div className="">
              {/* 여기에 rotate-12 클래스를 적용하세요 */}
              회전된 박스
            </div>
          </div>

          {/* 2단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              2단계: 크기 변경
            </h3>
            <div className="">
              {/* 여기에 scale-125 클래스를 적용하세요 */}
              확대된 박스
            </div>
          </div>

          {/* 3단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              3단계: 이동
            </h3>
            <div className="">
              {/* 여기에 translate-x-4 translate-y-2 클래스를 적용하세요 */}
              이동된 박스
            </div>
          </div>

          {/* 4단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              4단계: 기울기
            </h3>
            <div className="">
              {/* 여기에 skew-x-12 클래스를 적용하세요 */}
              기울어진 박스
            </div>
          </div>

          {/* 5단계 */}
          <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              5단계: 복합 변형
            </h3>
            <div className="">
              {/* 여기에 복합 변형 + hover 효과를 적용하세요 */}
              복합 변형 박스
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
