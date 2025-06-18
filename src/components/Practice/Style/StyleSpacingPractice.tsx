"use client";

export default function StyleSpacingPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          Spacing(여백) 스타일 적용하기:
        </h4>
        <div>
          {/* 여기에 TailwindCSS 클래스를 사용하여 여백 스타일을 만들어보세요 */}
          <div className="">
            <div className="">패딩 큼</div>
            <div className="">패딩 중간</div>
            <div className="">패딩 작음</div>
          </div>
        </div>
      </div>
    </div>
  );
}
