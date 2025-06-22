"use client";

export default function AnimationVerticalMarqueeAnswer() {
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
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* 완성된 세로 marquee CSS */}
      <style jsx>{`
        @keyframes marqueeUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .marquee-slow {
          animation: marqueeUp 15s linear infinite;
        }

        .marquee-medium {
          animation: marqueeUp 10s linear infinite;
        }

        .marquee-fast {
          animation: marqueeUp 8s linear infinite;
        }

        .marquee-column:hover .marquee-content {
          animation-play-state: paused;
        }

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
          height: auto;
        }
      `}</style>

      <div className="text-center mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">🎯 완성된 세로 3줄 Marquee 애니메이션</h4>
        <p className="text-sm text-gray-600">각 컬럼이 서로 다른 속도로 위로 흐르는 세로 marquee (호버 시 일시정지)</p>
      </div>

      {/* 완성된 세로 3줄 Marquee */}
      <div className="grid grid-cols-3 gap-4 h-96">
        {/* 첫 번째 컬럼 - 느린 속도 (15초) */}
        <div className="marquee-column bg-gradient-to-b from-blue-100 to-blue-200 border-blue-300">
          <div className="marquee-content marquee-slow">
            <div className="flex flex-col space-y-4 p-4">
              {[...cards1, ...cards1, ...cards1].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(card.rating)}
                      {"☆".repeat(5 - card.rating)}
                    </div>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1 text-sm">{card.title}</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 두 번째 컬럼 - 보통 속도 (10초) */}
        <div className="marquee-column bg-gradient-to-b from-purple-100 to-purple-200 border-purple-300">
          <div className="marquee-content marquee-medium">
            <div className="flex flex-col space-y-4 p-4">
              {[...cards2, ...cards2, ...cards2].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(card.rating)}
                      {"☆".repeat(5 - card.rating)}
                    </div>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1 text-sm">{card.title}</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 세 번째 컬럼 - 빠른 속도 (8초) */}
        <div className="marquee-column bg-gradient-to-b from-green-100 to-green-200 border-green-300">
          <div className="marquee-content marquee-fast">
            <div className="flex flex-col space-y-4 p-4">
              {[...cards3, ...cards3, ...cards3].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(card.rating)}
                      {"☆".repeat(5 - card.rating)}
                    </div>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1 text-sm">{card.title}</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 코드 설명 */}
      <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-600 mb-3">💡 구현 포인트:</h5>
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>keyframes:</strong> translateY(0 → -50%)로 끊김 없는 세로 이동
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>속도 차별화:</strong> 15초/10초/8초로 각기 다른 속도
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>overflow: hidden:</strong> 컨테이너 밖의 카드들 숨김
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>호버 효과:</strong> animation-play-state: paused
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>무한 반복:</strong> 배열을 3번 반복하여 끊김 없는 연결
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
