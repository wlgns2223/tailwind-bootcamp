"use client";

/**
 * 강사 전용 Gradient 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorGradientExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <div className="">
        <div className="">선형 그라디언트</div>
        <div className="">원형 그라디언트</div>
        <div className="">복잡한 그라디언트</div>
        <div className="">텍스트 그라디언트</div>
      </div>
    </div>
  );
}
