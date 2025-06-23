"use client";

/**
 * 강사 전용 Animation 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorAnimationExample() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="">
        <h2 className="">Animation Examples</h2>

        {/* 기본 애니메이션 구현 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-6 rounded-lg text-center text-white bg-red-500 animate-spin ">Spinning Card</div>
          <div className="p-6 rounded-lg text-center text-white bg-blue-500 animate-pulse ">Pulsing Card</div>
          <div className="p-6 rounded-lg text-center text-white bg-green-500 animate-bounce ">Bouncing Card</div>
        </div>

        {/* 고급 애니메이션 구현 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg text-center text-white bg-purple-500 animate-ping">Ping Effect</div>
          <div className="">Hover Animation</div>
        </div>
      </section>
    </div>
  );
}
