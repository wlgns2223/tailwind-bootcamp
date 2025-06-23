"use client";

/**
 * 강사 전용 Gradient 예제 컴포넌트
 * 강사가 실시간으로 클래스를 작성하여 학생들에게 시연하는 용도
 */
export default function InstructorGradientExample() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[400px]">
      {/* 강사가 직접 클래스를 작성할 영역 */}
      <div className="w-full p-6 bg-[#f9fafb] rounded-md">
        <div className="bg-linear-to-r from-[#3b82f6] to-[#8b5cf6]   p-8 text-white rounded-xl text-center font-semibold mt-4">
          선형 그라디언트
        </div>
        <div className="bg-radial from-orange-400 to-purple-900 p-8 text-white rounded-xl text-center font-semibold mt-4">
          원형 그라디언트
        </div>
        <div className="bg-linear-to-br from-[#eab308] via-[#ef4444] to-[#8b5cf6]  p-8 text-white rounded-xl text-center font-semibold mt-4">
          복잡한 그라디언트
        </div>
        <div className="bg-linear-to-r from-[#3b82f6] to-[#db2777] bg-clip-text text-transparent  text-4xl font-bold p-8  rounded-xl text-center  mt-4">
          텍스트 그라디언트
        </div>
      </div>
    </div>
  );
}
