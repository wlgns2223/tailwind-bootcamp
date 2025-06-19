"use client";

export default function StyleBorderPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          고급 Border(테두리) 및 Visual Effects 스타일 적용하기:
        </h4>
        <div>
          {/* 여기에 TailwindCSS 클래스를 사용하여 복잡한 테두리 스타일을 만들어보세요 */}
          <div className="">
            <div className="">
              <span className="">다색 테두리</span>
              <span className="">Multi-Border</span>
            </div>
            <div className="">
              <span className="">인셋 테두리</span>
              <span className="">Inset Border</span>
            </div>
            <div className="">
              <span className="">아웃라인 스타일</span>
              <span className="">Outline Style</span>
            </div>
            <div className="">
              <span className="">복합 그림자</span>
              <span className="">Complex Shadow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
