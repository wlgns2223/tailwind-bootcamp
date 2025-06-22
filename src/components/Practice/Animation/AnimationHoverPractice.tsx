"use client";

export default function AnimationHoverPractice() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-purple-700">📝 실습: 버튼 호버 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-purple-500">
        <h4 className="font-semibold text-purple-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Scale 버튼: 호버 시 1.1배 크기로 확대</li>
          <li>• Rotate 버튼: 호버 시 12도 회전</li>
          <li>• Translate 버튼: 호버 시 위로 4px 이동</li>
          <li>• 모든 버튼은 부드러운 전환 효과 (300ms)</li>
          <li>• 기본 스타일: 패딩, 둥근 모서리, 흰색 텍스트</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 여기에 코드를 작성해보세요:</h4>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold">Scale Effect</button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold">Rotate Effect</button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold">Translate Effect</button>
        </div>
      </div>
    </div>
  );
}
