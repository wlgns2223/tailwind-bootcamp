"use client";

export default function EffectsBasicPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          CSS Module을 TailwindCSS로 변환하세요:
        </h4>
        <div>
          {/* 여기에 TailwindCSS 클래스를 사용하여 그림자 효과를 구현해보세요 */}
          <div className="">
            <div className="p-6 bg-white rounded-lg">작은 그림자</div>
            <div className="p-6 bg-white rounded-lg">중간 그림자</div>
            <div className="p-6 bg-white rounded-lg">큰 그림자</div>
            <div className="p-6 bg-white rounded-lg">색깔 그림자</div>
          </div>
        </div>
      </div>
    </div>
  );
}
