"use client";

export default function AnimationMarqueeAnswer() {
  const items = ["🚀", "⭐", "🎯", "🔥", "💎", "🌟", "⚡", "🎉", "🎨", "🎭", "🎪", "🎊", "🎈", "🎁", "🎀", "🌈"];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* 완성된 가로 marquee CSS */}
      <style jsx>{`
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-animation {
          animation: marqueeLeft 20s linear infinite;
        }

        .marquee-container:hover .marquee-animation {
          animation-play-state: paused;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          height: 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: marqueeLeft 20s linear infinite;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          height: 60px;
          margin: 0 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          font-size: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .marquee-item:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="text-center mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">🎯 완성된 가로 Marquee 애니메이션</h4>
        <p className="text-sm text-gray-600">오른쪽에서 왼쪽으로 흐르는 가로 marquee (호버 시 일시정지)</p>
      </div>

      {/* 완성된 가로 Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 코드 설명 */}
      <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
        <h5 className="font-semibold text-emerald-600 mb-3">💡 구현 포인트:</h5>
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>keyframes:</strong> translateX(0 → -50%)로 끊김 없는 순환
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>duration:</strong> 20초로 부드러운 속도 구현
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>overflow: hidden:</strong> 컨테이너 밖의 요소들 숨김
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>hover 효과:</strong> animation-play-state: paused
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-emerald-500 font-bold">•</span>
            <span>
              <strong>무한 반복:</strong> 배열을 2번 반복하여 끊김 없는 연결
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
