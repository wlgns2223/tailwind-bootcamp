"use client";

export default function AnimationMarqueePractice() {
  const items = ["🚀", "⭐", "🎯", "🔥", "💎", "🌟", "⚡", "🎉", "🎨", "🎭", "🎪", "🎊", "🎈", "🎁", "🎀", "🌈"];

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-emerald-700">📝 실습: 가로 Marquee 애니메이션 구현하기</h3>
      <p className="text-gray-700 mb-4">CSS 키프레임을 활용하여 가로로 흐르는 marquee 애니메이션을 구현해보세요:</p>
      {/* 요구사항 */}
      <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-emerald-500">
        <h4 className="font-semibold text-emerald-600 mb-2">📋 요구사항:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 가로로 흐르는 1줄 marquee 애니메이션</li>
          <li>• 끊김 없는 부드러운 연속 흐름</li>
          <li>• 부드러운 속도 (30초 duration)</li>
          <li>• 무한 반복, 완전히 자연스러운 순환</li>
          <li>• 호버 시 일시정지 효과</li>
        </ul>
      </div>{" "}
      {/* 실습 영역 */}
      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        <h4 className="font-semibold text-gray-700 mb-4">💻 가로 marquee 애니메이션을 구현해보세요:</h4>

        {/* 커스텀 CSS 스타일 - 학습자가 키프레임을 정의할 영역 */}
        <style jsx>{`
          /* 여기에 marquee 키프레임을 정의하세요 */

          /* 끊김 없는 가로 marquee 애니메이션 */
          @keyframes marqueeLeft {
            /* 여기에 키프레임을 작성하세요 */
            /* 0%: transform: translateX(0) - 시작 위치 */
            /* 100%: transform: translateX(-50%) - 절반 이동 (끊김 없는 순환) */
          }

          /* 마퀴 애니메이션 클래스 */
          .marquee-animation {
            /* animation: marqueeLeft 30s linear infinite; */
          }

          /* 호버 시 일시정지 */
          .marquee-container:hover .marquee-animation {
            /* animation-play-state: paused; */
          }

          /* 마퀴 컨테이너 스타일 */
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

        {/* Marquee 컨테이너 */}
        <div className="marquee-container">
          <div className="marquee-content">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="marquee-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Marquee 구현 가이드 */}
      <div className="mt-6 bg-cyan-50 border-l-4 border-cyan-400 p-4">
        <h4 className="font-semibold text-cyan-800 mb-2">🎯 끊김 없는 Marquee 구현 가이드:</h4>
        <div className="text-sm text-cyan-700 space-y-2">
          <div>
            <strong>1. 키프레임 정의:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">@keyframes marqueeLeft</code>에서{" "}
            <code className="bg-cyan-200 px-1 rounded">transform: translateX()</code> 활용
          </div>
          <div>
            <strong>2. 끊김 없는 애니메이션:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">0% → translateX(0)</code>,{" "}
            <code className="bg-cyan-200 px-1 rounded">100% → translateX(-50%)</code>
          </div>
          <div>
            <strong>3. 속도 조절:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">animation-duration: 30s</code>로 부드러운 속도 설정
          </div>
          <div>
            <strong>4. 호버 일시정지:</strong>
            <br />
            <code className="bg-cyan-200 px-1 rounded">animation-play-state: paused</code>로 호버 시 멈춤
          </div>
          <div>
            <strong>💫 핵심:</strong> 배열을 2번 반복하고 <code className="bg-cyan-200 px-1 rounded">-50%</code>{" "}
            이동으로 완벽한 순환 구현
          </div>
        </div>
      </div>
    </div>
  );
}
