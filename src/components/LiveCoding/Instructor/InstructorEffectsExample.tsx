"use client";

/**
 * 강사 전용 Effects 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorEffectsExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <div className="">
        <div className="">그림자 효과 박스</div>
        <div className="">투명도 효과 박스</div>
        <div className="">변형 효과 박스 (호버해보세요)</div>
        <div className="">블러 효과 박스</div>
      </div>
    </div>
  );
}
