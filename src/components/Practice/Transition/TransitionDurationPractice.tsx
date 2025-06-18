"use client";

export default function TransitionDurationPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          Duration(지속시간) 효과 만들기:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              1단계: 빠른 전환
            </h3>
            <button className="">
              {/* 여기에 transition-colors duration-150 hover:bg-blue-700 클래스를 적용하세요 */}
              빠른 전환 (150ms)
            </button>
          </div>

          {/* 2단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              2단계: 기본 전환
            </h3>
            <button className="">
              {/* 여기에 transition-colors duration-300 hover:bg-green-700 클래스를 적용하세요 */}
              기본 전환 (300ms)
            </button>
          </div>

          {/* 3단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              3단계: 느린 전환
            </h3>
            <button className="">
              {/* 여기에 transition-colors duration-500 hover:bg-purple-700 클래스를 적용하세요 */}
              느린 전환 (500ms)
            </button>
          </div>

          {/* 4단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              4단계: 매우 느린 전환
            </h3>
            <button className="">
              {/* 여기에 transition-colors duration-1000 hover:bg-red-700 클래스를 적용하세요 */}
              매우 느린 전환 (1000ms)
            </button>
          </div>

          {/* 5단계 */}
          <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              5단계: 복합 전환 시간
            </h3>
            <div className="">
              {/* 여기에 transition-all duration-700 hover:scale-110 hover:shadow-xl 클래스를 적용하세요 */}
              <h4 className="text-white font-bold">복합 전환 효과</h4>
              <p className="text-pink-100">색상과 크기가 함께 변합니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
