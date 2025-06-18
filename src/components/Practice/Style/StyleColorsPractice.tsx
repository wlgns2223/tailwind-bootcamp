"use client";

export default function StyleColorsPractice() {
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
          {/* 여기에 TailwindCSS 클래스를 사용하여 아래 CSS Module과 같은 스타일을 만들어보세요 */}
          <div className="">
            <div className="">Primary Box</div>
            <div className="">Success Box</div>
            <div className="">Warning Box</div>
            <div className="">Danger Box</div>
          </div>
        </div>
      </div>
    </div>
  );
}
