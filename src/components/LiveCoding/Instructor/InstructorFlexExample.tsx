"use client";

/**
 * 강사 전용 Flex 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorFlexExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="">
        <h2 className="">Flex Examples</h2>

        {/* 수평 Flex 예제 */}
        <div className="">
          <div className="">Flex 1</div>
          <div className="">Flex 1</div>
          <div className="">Flex 1</div>
        </div>

        {/* 수직 Flex 예제 */}
        <div className="">
          <div className="">Item 1</div>
          <div className="">Item 2</div>
          <div className="">Item 3</div>
        </div>
      </section>
    </div>
  );
}
