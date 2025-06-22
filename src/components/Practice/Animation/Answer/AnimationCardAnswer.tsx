export default function AnimationCardAnswer() {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-200 cursor-pointer text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-lg font-semibold mb-2">Performance</h3>
          <p className="text-gray-600 text-sm">빠르고 효율적인 성능</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-200 cursor-pointer text-center">
          <div className="text-4xl mb-3">🎨</div>
          <h3 className="text-lg font-semibold mb-2">Design</h3>
          <p className="text-gray-600 text-sm">아름답고 직관적인 디자인</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-200 cursor-pointer text-center">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold mb-2">Speed</h3>
          <p className="text-gray-600 text-sm">빛처럼 빠른 로딩 속도</p>
        </div>
      </div>
    </div>
  );
}
