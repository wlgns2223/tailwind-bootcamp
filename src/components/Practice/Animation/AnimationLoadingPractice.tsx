"use client";

export default function AnimationLoadingPractice() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-cyan-700">📝 실습: 로딩 인디케이터 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-cyan-500">
        <h4 className="font-semibold text-cyan-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 스피너 로더: 회전하는 원형 보더</li>
          <li>• 도트 로더: 3개의 점이 순차적으로 커지고 작아짐</li>
          <li>• 펄스 로더: 큰 원이 펄스 효과로 확산</li>
          <li>• 중앙 정렬 레이아웃</li>
          <li>• 각 로더마다 설명 텍스트 포함</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 여기에 코드를 작성해보세요:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 스피너 로더 */}
          <div>
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600">Spinner Loading</p>
          </div>

          {/* 도트 로더 */}
          <div>
            <div className="flex justify-center space-x-2">
              <div className="animate-bounce  w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="animate-bounce [animation-delay:0.2s]  w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="animate-bounce [animation-delay:0.3s] w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <p className="mt-4 text-gray-600">Dots Loading</p>
          </div>

          {/* 펄스 로더 */}
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600">Pulse Loading</p>
          </div>
        </div>
      </div>
    </div>
  );
}
