"use client";

export default function TransitionBasicPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">기본 Transition 효과 만들기:</h4>
        <div className="space-y-8">
          {/* 기본 호버 전환 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">기본 호버 전환</h3>
            <div className="flex justify-center space-x-4">
              <button className="">
                {/* 여기에 transition-colors duration-300 hover:bg-blue-600 클래스를 적용하세요 */}
                색상 전환
              </button>
              <button className="">
                {/* 여기에 transition-transform duration-300 hover:scale-105 클래스를 적용하세요 */}
                크기 전환
              </button>
            </div>
          </div>

          {/* 그림자 전환 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">그림자 전환</h3>
            <div className="">
              {/* 여기에 transition-shadow duration-500 hover:shadow-2xl 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Hover me</span>
            </div>
          </div>

          {/* 투명도 전환 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">투명도 전환</h3>
            <div className="">
              {/* 여기에 transition-opacity duration-700 hover:opacity-50 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Fade</span>
            </div>
          </div>

          {/* 위치 전환 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">위치 전환</h3>
            <div className="flex gap-4">
              {/* 여기에 transition-transform duration-500 hover:translate-x-4 hover:-translate-y-2 클래스를 적용하세요 */}
              <span className="transition hover:translate-4  bg-amber-400 rounded-lg size-32 flex items-center justify-center text-gray-800 font-semibold">
                Move
              </span>
              <span className="relative transition-all left-0 top-0 hover:left-4 hover:top-4  bg-amber-400 rounded-lg size-32 flex items-center justify-center text-gray-800 font-semibold">
                Move
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
