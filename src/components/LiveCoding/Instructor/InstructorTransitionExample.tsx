"use client";

/**
 * 강사 전용 Transition 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorTransitionExample() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="">
        <h2 className="">Success Button</h2>

        {/* Success Button 구현 영역 */}
        <div className="text-center p-8">
          <button className="">Success Button</button>
        </div>
      </section>
    </div>
  );
}
