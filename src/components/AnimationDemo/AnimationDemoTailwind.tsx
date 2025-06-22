export default function AnimationDemo() {
  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Animation Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-6 rounded-lg text-center text-white bg-red-500 animate-spin font-medium">Spinning Card</div>
        <div className="p-6 rounded-lg text-center text-white bg-blue-500 animate-pulse font-medium">Pulsing Card</div>
        <div className="p-6 rounded-lg text-center text-white bg-green-500 animate-bounce font-medium">
          Bouncing Card
        </div>
      </div>

      {/* 고급 애니메이션 예제 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-lg text-center text-white bg-purple-500 animate-ping font-medium">Ping Effect</div>
        <div className="p-6 rounded-lg text-center text-white bg-yellow-500 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 cursor-pointer font-medium">
          Hover Animation
        </div>
      </div>
    </div>
  );
}
