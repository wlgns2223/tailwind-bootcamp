"use client";

export default function AnimationAdvancedPractice() {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-rose-700">📝 실습: 고급 인터랙션 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">아래 요구사항에 맞게 TailwindCSS 클래스를 작성해주세요:</p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-rose-500">
        <h4 className="font-semibold text-rose-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 멀티 이펙트 버튼: 호버 시 크기, 색상, 그림자, 회전 모두 변화</li>
          <li>• 플립 카드: 호버 시 Y축으로 180도 회전하여 뒷면 표시</li>
          <li>• 페이드인 알림: 등장 시 투명도와 위치 변화</li>
          <li>• 모든 애니메이션은 적절한 duration과 easing 적용</li>
          <li>• 사용자 경험을 고려한 자연스러운 움직임</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">� 여기에 코드를 작성해보세요:</h4>
        <div className="space-y-8">
          {/* 멀티 이펙트 버튼 */}
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold">
              Multi Effect Button
            </button>
          </div>

          {/* 플립 카드 */}
          <div className="flex justify-center">
            <div className="group relative w-64 h-40">
              <div className="absolute inset-0 w-full h-full bg-blue-500 text-white rounded-xl flex items-center justify-center text-center">
                <div>
                  <h3 className="text-lg font-semibold">Front Side</h3>
                  <p className="text-blue-100">Hover to flip</p>
                </div>
              </div>
            </div>
          </div>

          {/* 페이드인 알림 */}
          <div className="text-center group">
            <div className="inline-block px-6 py-3 bg-green-100 text-green-800 rounded-lg border border-green-200">
              ✅ Success! Animation completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
