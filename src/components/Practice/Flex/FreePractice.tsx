"use client";

export default function FreePractice() {
  return (
    <div className="min-h-64 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 text-lg mb-2">
          여기에 자유롭게 실습해보세요! 🎨
        </p>
        <p className="text-sm text-gray-400">
          배운 Flexbox 클래스들을 조합하여 창의적인 레이아웃을 만들어보세요.
        </p>

        {/* 실습 영역 - 수강생이 자유롭게 편집할 수 있는 공간 */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg min-h-32">
          {/* TODO: 여기에 자유롭게 레이아웃을 만들어보세요! */}
          <p className="text-gray-400 text-sm">자유 실습 공간</p>
        </div>
      </div>
    </div>
  );
}
