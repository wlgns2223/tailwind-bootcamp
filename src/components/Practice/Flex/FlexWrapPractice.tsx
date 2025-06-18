"use client";

export default function FlexWrapPractice() {
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
        <div className="w-80 border-2 border-dashed border-gray-300 p-4">
          {/* 여기에 TailwindCSS 클래스를 사용하여 flex-wrap을 구현해보세요 */}
          <div className="">
            <div className="">아이템 1</div>
            <div className="">아이템 2</div>
            <div className="">아이템 3</div>
            <div className="">아이템 4</div>
            <div className="">아이템 5</div>
            <div className="">아이템 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}
