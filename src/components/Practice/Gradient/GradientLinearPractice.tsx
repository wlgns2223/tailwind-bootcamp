"use client";

export default function GradientLinearPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">Linear Gradient 만들기:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">1단계: 기본 선형 그라디언트</h3>
            <div className="">{/* 여기에 bg-gradient-to-r from-blue-400 to-blue-600 클래스를 적용하세요 */}</div>
          </div>

          {/* 2단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">2단계: 수직 그라디언트</h3>
            <div className="">{/* 여기에 bg-gradient-to-b from-purple-400 to-purple-600 클래스를 적용하세요 */}</div>
          </div>

          {/* 3단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">3단계: 대각선 그라디언트</h3>
            <div className="">{/* 여기에 bg-gradient-to-br from-pink-400 to-pink-600 클래스를 적용하세요 */}</div>
          </div>

          {/* 4단계 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">4단계: 3색 그라디언트</h3>
            <div className="">
              {/* 여기에 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 클래스를 적용하세요 */}
            </div>
          </div>

          {/* 5단계 */}
          <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-2">
            <div className="h-32 rounded-xl bg-linear-30 from-indigo-400 from-30% via-purple-600 via-60%0% to-pink-400 to-90%"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
