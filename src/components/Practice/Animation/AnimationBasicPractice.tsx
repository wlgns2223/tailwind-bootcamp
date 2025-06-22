"use client";

export default function AnimationBasicPractice() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-blue-700">📝 실습: 기본 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500">
        <h4 className="font-semibold text-blue-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 로딩 스피너: 빨간색 배경의 카드가 계속 회전</li>
          <li>• 펄스 효과: 파란색 배경의 카드가 깜빡임</li>
          <li>• 바운스 효과: 초록색 배경의 카드가 위아래로 튀어오름</li>
          <li>• 모든 카드는 중앙 정렬, 흰색 텍스트, 둥근 모서리</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">� 여기에 코드를 작성해보세요:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg text-center text-white bg-red-500">Loading Spinner</div>
          <div className="p-6 rounded-lg text-center text-white bg-blue-500">Pulse Effect</div>
          <div className="p-6 rounded-lg text-center text-white bg-green-500">Bounce Effect</div>
        </div>
      </div>
    </div>
  );
}
