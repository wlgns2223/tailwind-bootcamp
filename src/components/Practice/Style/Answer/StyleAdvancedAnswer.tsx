export default function StyleAdvancedAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.card-container {
  max-width: 28rem; /* max-w-md */
}

.card {
  background-color: white;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* hover:shadow-xl */
}

.image-area {
  height: 12rem; /* h-48 */
  background: linear-gradient(to right, #3b82f6, #8b5cf6); /* from-blue-500 to-purple-600 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  padding: 1.5rem; /* p-6 */
}

.buttons {
  display: flex;
  gap: 0.75rem; /* space-x-3 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="max-w-md">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  이미지 영역
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  카드 제목
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  카드 설명이 들어갑니다. 이것은 예시 텍스트입니다.
                </p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
                    읽기
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                    공유
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>max-w-md</code>: 최대 너비 제한
          </li>
          <li>
            • <code>overflow-hidden</code>: 넘치는 내용 숨기기
          </li>
          <li>
            • <code>hover:shadow-xl</code>: 호버 시 그림자 변화
          </li>
          <li>
            • <code>transition-shadow</code>: 부드러운 전환
          </li>
          <li>
            • <code>bg-gradient-to-r</code>: 우측 방향 그라데이션
          </li>
        </ul>
      </div>
    </div>
  );
}
