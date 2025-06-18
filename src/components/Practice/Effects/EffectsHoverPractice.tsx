"use client";

export default function EffectsHoverPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          Hover 효과 만들기:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              1단계: 기본 호버 효과
            </h3>
            <button className="">
              {/* 여기에 TailwindCSS 클래스를 사용하여 호버 배경색을 변경하는 코드를 작성하세요 */}
              호버 색상 변경
            </button>
          </div>

          {/* 2단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              2단계: 호버 크기 변화
            </h3>
            {/* 여기에 TailwindCSS 클래스를 사용하여 호버 시 크기가 변경되도록 코드를 작성하세요 */}
            <div className="">
              <h4 className="">호버 확대 카드</h4>
              <p className="">마우스를 올리면 커집니다.</p>
            </div>
          </div>

          {/* 3단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              3단계: 호버 그림자 변화
            </h3>
            {/* 여기에 TailwindCSS 클래스를 사용하여 호버 시 그림자가 변경되도록 코드를 작성하세요 */}
            <div className="">
              <h4 className="">호버 그림자 카드</h4>
              <p className="">마우스를 올리면 그림자가 강해집니다.</p>
            </div>
          </div>

          {/* 4단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              4단계: 복합 호버 효과
            </h3>
            {/* 여기에 TailwindCSS 클래스를 사용하여 복합 호버 효과를 작성하세요 */}
            <div className="">
              <h4 className="">복합 호버 카드</h4>
              <p className="">여러 효과가 동시에 적용됩니다.</p>
            </div>
          </div>

          {/* 5단계 */}
          <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              5단계: 고급 애니메이션 호버
            </h3>
            {/* 여기에 TailwindCSS 클래스를 사용하여 고급 애니메이션 호버를 작성하세요 */}
            <div className="">
              <h4 className="">고급 애니메이션 카드</h4>
              <p className="">복잡한 호버 애니메이션이 적용됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
