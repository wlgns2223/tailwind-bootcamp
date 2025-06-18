"use client";

export default function GridColumnsPractice() {
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
          {/* 여기에 TailwindCSS 클래스를 사용하여 그리드 컬럼을 구현해보세요 */}
          <div className="">
            <div className="p-4 bg-green-100 border rounded text-center">
              1열
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              2열
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              3열
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              4열
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              5열
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              6열
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
