export default function AnimationLoadingAnswer() {
  return (
    <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* 스피너 로더 */}
        <div>
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Spinner Loading</p>
        </div>

        {/* 도트 로더 */}
        <div>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          </div>
          <p className="mt-4 text-gray-600">Dots Loading</p>
        </div>

        {/* 펄스 로더 */}
        <div>
          <div className="w-12 h-12 bg-blue-500 rounded-full animate-ping mx-auto"></div>
          <p className="mt-4 text-gray-600">Pulse Loading</p>
        </div>
      </div>
    </div>
  );
}
