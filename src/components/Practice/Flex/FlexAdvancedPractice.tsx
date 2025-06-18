"use client";

export default function FlexAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          CSS Module을 TailwindCSS로 변환하세요 (복합 레이아웃):
        </h4>
        <div className="h-80 border-2 border-dashed border-gray-300 p-4">
          {/* 여기에 TailwindCSS 클래스를 사용하여 복합 flex 레이아웃을 구현해보세요 */}
          <div className="">
            <header className="p-4 bg-blue-200 rounded">헤더</header>
            <div className="">
              <aside className="p-4 bg-green-200 rounded">사이드바</aside>
              <main className="p-4 bg-yellow-200 rounded">메인 콘텐츠</main>
            </div>
            <footer className="p-4 bg-purple-200 rounded">푸터</footer>
          </div>
        </div>
      </div>
    </div>
  );
}
