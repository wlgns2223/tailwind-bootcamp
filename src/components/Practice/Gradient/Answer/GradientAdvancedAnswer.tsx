export default function GradientAdvancedAnswer() {
  return (
    <div className="p-8 space-y-8">
      {/* 목표 CSS 설명 */}
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 목표 CSS:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`/* 그라디언트 텍스트 효과 */
.gradient-text {
  font-size: 4rem; /* text-6xl */
  font-weight: bold;
  background: linear-gradient(to right, #2563eb, #9333ea, #db2777);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/* 복합 그라디언트 카드 */
.gradient-card {
  width: 20rem; /* w-80 */
  margin: 0 auto;
  background: linear-gradient(to bottom right, #312e81, #1e3a8a, #581c87);
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  overflow: hidden;
}

.gradient-card-header {
  position: relative;
  height: 12rem; /* h-48 */
  background: linear-gradient(to bottom right, #60a5fa, #a855f7);
  opacity: 0.8;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
}

.gradient-card-content {
  padding: 1.5rem; /* p-6 */
  color: white;
}

.gradient-button {
  width: 100%;
  padding: 0.5rem 0; /* py-2 */
  background: linear-gradient(to right, #ec4899, #8b5cf6);
  border-radius: 0.5rem; /* rounded-lg */
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.3s ease;
}

.gradient-button:hover {
  background: linear-gradient(to right, #db2777, #7c3aed);
}`}
        </pre>
      </div>

      {/* 그라디언트 텍스트 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">그라디언트 텍스트</h3>
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          GRADIENT
        </div>
      </div>

      {/* 복합 그라디언트 카드 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">복합 그라디언트 카드</h3>
        <div className="w-80 mx-auto bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="p-6 text-white">
            <h4 className="text-xl font-bold mb-2">Premium Card</h4>
            <p className="text-blue-100 mb-4">Beautiful gradient combinations with shadows and transparency effects.</p>
            <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-semibold hover:from-pink-600 hover:to-violet-600 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
