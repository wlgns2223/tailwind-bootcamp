"use client";

export default function ResponsiveBasicPractice() {
  return (
    <div className="space-y-8">
      {/* 1단계: 기본 반응형 텍스트 */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          1단계: 기본 반응형 텍스트
        </h4>
        <div className="bg-white p-4 rounded min-h-[100px]">
          {/* 여기에 반응형 패딩 코드를 작성하세요 */}
          <h1 className="">반응형 제목</h1>
        </div>
      </div>

      {/* 2단계: 반응형 그리드 */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          2단계: 반응형 그리드
        </h4>
        <div className="bg-white p-4 rounded min-h-[100px]">
          {/* 여기에 반응형 패딩 코드를 작성하세요 */}
          <div className="">
            <div className="bg-blue-100 ">카드 1</div>
            <div className="bg-green-100 ">카드 2</div>
            <div className="bg-yellow-100 ">카드 3</div>
            <div className="bg-red-100 ">카드 4</div>
          </div>
        </div>
      </div>

      {/* 3단계: 반응형 패딩 */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          3단계: 반응형 패딩
        </h4>
        <div className="bg-white p-4 rounded min-h-[100px]">
          {/* 여기에 반응형 패딩 코드를 작성하세요 */}
          <div className="">
            <p>패딩이 화면 크기에 따라 변합니다</p>
          </div>
        </div>
      </div>

      {/* 4단계: 반응형 숨김/표시 */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          4단계: 반응형 숨김/표시
        </h4>
        <div className="bg-white p-4 rounded min-h-[100px]">
          {/* 여기에 반응형 숨김/표시 코드를 작성하세요 */}
          <div className="">
            <div className="bg-blue-500  ">모바일에만 표시</div>
            <div className="bg-green-500   ">태블릿에만 표시</div>
            <div className="bg-red-500  ">데스크탑에만 표시</div>
          </div>
        </div>
      </div>

      {/* 5단계: 복합 반응형 레이아웃 */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          5단계: 복합 반응형 레이아웃
        </h4>
        <div className="bg-white p-4 rounded min-h-[100px]">
          {/* 여기에 복합 반응형 레이아웃 코드를 작성하세요 */}
          <div className="">
            <div className="">
              <h4 className="">메인 콘텐츠</h4>
              <p className="">화면 크기에 따라 레이아웃이 변합니다.</p>
            </div>
            <div className="">
              <h4 className="">사이드바</h4>
              <p className="">사이드바 콘텐츠</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
