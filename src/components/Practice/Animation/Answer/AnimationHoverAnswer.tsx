export default function AnimationHoverAnswer() {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110">
          Scale Effect
        </button>
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:rotate-12">
          Rotate Effect
        </button>
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1">
          Translate Effect
        </button>
      </div>
    </div>
  );
}
