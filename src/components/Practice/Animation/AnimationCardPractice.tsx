"use client";

export default function AnimationCardPractice() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-orange-700">📝 실습: 카드 호버 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-orange-500">
        <h4 className="font-semibold text-orange-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 기본 카드: 흰색 배경, 그림자, 둥근 모서리, 패딩</li>
          <li>• 호버 시: 위로 8px 이동, 더 진한 그림자</li>
          <li>• 카드 내용: 이모지 아이콘, 제목, 설명 텍스트</li>
          <li>• 부드러운 전환 효과 (200ms)</li>
          <li>• 커서 포인터 표시</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 여기에 코드를 작성해보세요:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">빠르고 효율적인 성능</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Design</h3>
            <p className="text-gray-600 text-sm">아름답고 직관적인 디자인</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Speed</h3>
            <p className="text-gray-600 text-sm">빛처럼 빠른 로딩 속도</p>
          </div>
        </div>
      </div>
    </div>
  );
}
