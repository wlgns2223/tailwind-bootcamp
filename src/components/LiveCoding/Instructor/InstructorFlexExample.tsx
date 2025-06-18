"use client";

/**
 * 강사 전용 Flex 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorFlexExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <section className="w-full p-4 bg-gray-200 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Flex Examples</h2>

        {/* 수평 Flex 예제 */}
        <div className="flex gap-4">
          <div className="flex-1 p-4 bg-gray-100 rounded-sm">Flex 1</div>
          <div className="flex-1 p-4 bg-gray-100 rounded-sm">Flex 1</div>
          <div className="flex-1 p-4 bg-gray-100 rounded-sm">Flex 1</div>
        </div>

        {/* 수직 Flex 예제 */}
        <div className="flex flex-col items-center justify-between mt-6 h-40 bg-gray-100 p-4 rounded-sm">
          <div className="p-2 bg-[#6366f1] text-white rounded-sm">Item 1</div>
          <div className="p-2 bg-[#6366f1] text-white rounded-sm">Item 2</div>
          <div className="p-2 bg-[#6366f1] text-white rounded-sm">Item 3</div>
        </div>
      </section>
    </div>
  );
}
