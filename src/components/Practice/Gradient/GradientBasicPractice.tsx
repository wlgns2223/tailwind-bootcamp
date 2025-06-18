"use client";

export default function GradientBasicPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          실습 영역 (TailwindCSS로 변환하세요)
        </h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">
          기본 Gradient 만들기:
        </h4>
        <div className="space-y-6">
          {/* 기본 선형 그라디언트 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">기본 선형 그라디언트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-r from-blue-500 to-purple-600 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Blue to Purple</span>
            </div>
          </div>

          {/* 3색 그라디언트 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">3색 그라디언트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Pink to Yellow</span>
            </div>
          </div>

          {/* 수직 그라디언트 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">수직 그라디언트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-b from-green-400 to-blue-500 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Green to Blue</span>
            </div>
          </div>

          {/* 대각선 그라디언트 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">대각선 그라디언트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-br from-yellow-400 to-red-500 클래스를 적용하세요 */}
              <span className="text-white font-semibold">Yellow to Red</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
