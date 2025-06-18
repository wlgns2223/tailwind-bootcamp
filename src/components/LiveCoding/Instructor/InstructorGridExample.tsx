"use client";

/**
 * 강사 전용 Grid 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorGridExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="">
        <h2 className="">Grid Examples</h2>

        {/* 기본 그리드 */}
        <div className="">
          <div className="">Grid Item 1</div>
          <div className="">Grid Item 2</div>
          <div className="">Grid Item 3</div>
          <div className="">Grid Item 4</div>
          <div className="">Grid Item 5</div>
          <div className="">Grid Item 6</div>
        </div>

        {/* 반응형 그리드 */}
        <div className="">
          <div className="">Responsive 1</div>
          <div className="">Responsive 2</div>
          <div className="">Responsive 3</div>
        </div>
      </section>
    </div>
  );
}
