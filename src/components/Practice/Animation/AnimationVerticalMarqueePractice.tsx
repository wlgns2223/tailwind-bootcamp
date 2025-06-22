"use client";

export default function AnimationVerticalMarqueePractice() {
  const cards1 = [
    { title: "최고의 서비스!", rating: 5, content: "정말 만족스러운 경험이었습니다. 추천합니다!" },
    { title: "훌륭한 품질", rating: 5, content: "기대 이상의 품질로 매우 만족합니다." },
    { title: "빠른 배송", rating: 4, content: "생각보다 빨리 도착했어요. 좋습니다!" },
    { title: "친절한 서비스", rating: 5, content: "직원분들이 정말 친절하셨습니다." },
  ];

  const cards2 = [
    { title: "가성비 최고", rating: 4, content: "이 가격에 이런 품질이라니 놀랍습니다." },
    { title: "깔끔한 디자인", rating: 5, content: "디자인이 정말 마음에 듭니다." },
    { title: "사용하기 편함", rating: 4, content: "직관적이고 사용하기 편해요." },
    { title: "다시 구매할 예정", rating: 5, content: "너무 좋아서 재구매 예정입니다!" },
  ];

  const cards3 = [
    { title: "완벽한 포장", rating: 5, content: "포장 상태가 완벽했습니다." },
    { title: "기대 이상", rating: 4, content: "기대했던 것보다 훨씬 좋네요." },
    { title: "만족스러운 구매", rating: 5, content: "정말 만족스러운 쇼핑이었습니다." },
    { title: "추천합니다", rating: 5, content: "주변 사람들에게 추천하고 싶어요." },
  ];

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-emerald-700">📝 실습: 세로 3줄 Marquee 애니메이션 구현하기</h3>

      <p className="text-gray-700 mb-4">
        CSS 키프레임을 활용하여 세로로 흐르는 3개 컬럼의 marquee 애니메이션을 구현해보세요:
      </p>

      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-emerald-500">
        <h4 className="font-semibold text-emerald-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 3개 컬럼으로 구성된 세로 marquee</li>
          <li>• 각 컬럼마다 다른 속도 (느림/보통/빠름)</li>
          <li>• 위에서 아래로 흐르는 애니메이션</li>
          <li>• 무한 반복, 끊김 없는 연결</li>
          <li>• 호버 시 해당 컬럼 일시정지</li>
        </ul>
      </div>

      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 세로 3줄 marquee 애니메이션을 구현해보세요:</h4>

        {/* 커스텀 CSS 스타일 - 학습자가 키프레임을 정의할 영역 */}
        <style jsx>{`
          /* 여기에 세로 marquee 키프레임을 정의하세요 */

          /* 세로 marquee 애니메이션 */
          @keyframes marqueeUp {
            /* 0%: transform: translateY(0) - 원래 위치에서 시작 */
            /* 100%: transform: translateY(-50%) - 반만큼 위로 이동하여 끊김 없이 연결 */
          }

          /* 느린 속도 애니메이션 */
          .marquee-slow {
            /* animation: marqueeUp 15s linear infinite; */
          }

          /* 보통 속도 애니메이션 */
          .marquee-medium {
            /* animation: marqueeUp 10s linear infinite; */
          }

          /* 빠른 속도 애니메이션 */
          .marquee-fast {
            /* animation: marqueeUp 8s linear infinite; */
          }

          /* 호버 시 일시정지 */
          .marquee-column:hover .marquee-content {
            /* animation-play-state: paused; */
          }

          /* 마퀴 컨테이너 스타일 */
          .marquee-column {
            height: 400px;
            overflow: hidden;
            position: relative;
            border-radius: 12px;
            border: 2px solid;
          }

          .marquee-content {
            position: absolute;
            width: 100%;
          }
        `}</style>

        {/* 3컬럼 Marquee 컨테이너 */}
        <div className="grid grid-cols-3 gap-4 h-96">
          {/* 첫 번째 컬럼 - 느린 속도 */}
          <div className="marquee-column bg-gradient-to-b from-blue-100 to-blue-200 border-blue-300">
            <div className="marquee-content">
              {" "}
              <div className="flex flex-col space-y-4 p-4">
                {[...cards1, ...cards1, ...cards1].map((card, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {"★".repeat(card.rating)}
                        {"☆".repeat(5 - card.rating)}
                      </div>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-1">{card.title}</h5>
                    <p className="text-sm text-gray-600">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 두 번째 컬럼 - 보통 속도 */}
          <div className="marquee-column bg-gradient-to-b from-purple-100 to-purple-200 border-purple-300">
            <div className="marquee-content">
              {" "}
              <div className="flex flex-col space-y-4 p-4">
                {[...cards2, ...cards2, ...cards2].map((card, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {"★".repeat(card.rating)}
                        {"☆".repeat(5 - card.rating)}
                      </div>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-1">{card.title}</h5>
                    <p className="text-sm text-gray-600">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 세 번째 컬럼 - 빠른 속도 */}
          <div className="marquee-column bg-gradient-to-b from-green-100 to-green-200 border-green-300">
            <div className="marquee-content">
              {" "}
              <div className="flex flex-col space-y-4 p-4">
                {[...cards3, ...cards3, ...cards3].map((card, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {"★".repeat(card.rating)}
                        {"☆".repeat(5 - card.rating)}
                      </div>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-1">{card.title}</h5>
                    <p className="text-sm text-gray-600">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 세로 Marquee 구현 가이드 */}
      <div className="mt-6 bg-cyan-50 border-l-4 border-cyan-400 p-4">
        <h4 className="font-semibold text-cyan-800 mb-2">🎯 세로 Marquee 구현 가이드:</h4>
        <div className="text-sm text-cyan-700 space-y-2">
          <div>
            <strong>1. 키프레임 정의:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">@keyframes marqueeUp</code>에서{" "}
            <code className="bg-cyan-200 px-1 rounded">transform: translateY()</code> 활용
          </div>
          <div>
            <strong>2. 애니메이션 적용:</strong>
            <br />각 컬럼의 <code className="bg-cyan-200 px-1 rounded">.marquee-content</code>에 애니메이션 클래스 추가
          </div>
          <div>
            <strong>3. 속도 조절:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">animation-duration</code>을 15s, 10s, 8s로 설정
          </div>
          <div>
            <strong>4. 호버 일시정지:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">animation-play-state: paused</code>로 호버 시 멈춤
          </div>
          <div>
            <strong>💫 핵심:</strong> <code className="bg-cyan-200 px-1 rounded">transform: translateY(0)</code>에서{" "}
            <code className="bg-cyan-200 px-1 rounded">translateY(-50%)</code>로 이동하여 끊김 없는 연결
          </div>
        </div>
      </div>
    </div>
  );
}
