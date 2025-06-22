export default function AnimationBasicAnswer() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg text-center text-white bg-red-500 animate-spin font-medium">Loading Spinner</div>
        <div className="p-6 rounded-lg text-center text-white bg-blue-500 animate-pulse font-medium">Pulse Effect</div>
        <div className="p-6 rounded-lg text-center text-white bg-green-500 animate-bounce font-medium">
          Bounce Effect
        </div>
      </div>
    </div>
  );
}
