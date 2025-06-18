"use client";

/**
 * 강사 전용 Style 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorStyleExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="">
        <h1 className="">Main Title</h1>

        <h2 className="">Subtitle</h2>

        <p className="">
          이것은 일반적인 텍스트 단락입니다.{" "}
          <span className="">하이라이트된 텍스트</span>가 포함되어 있습니다.
        </p>

        <button className="">액션 버튼</button>
      </section>
    </div>
  );
}
