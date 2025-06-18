"use client";

export default function FlexCenterPractice() {
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
        <div className="h-40 border-2 border-dashed border-gray-300">
          {/* 여기에 TailwindCSS 클래스를 사용하여 중앙 정렬을 만들어보세요 */}
          <div className="">
            <div className="p-4 bg-blue-200 rounded-lg shadow">
              중앙 정렬된 박스
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
