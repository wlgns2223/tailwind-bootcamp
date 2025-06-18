export default function StyleBasicAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  color: #2563eb; /* blue-600 */
}

.body {
  font-size: 1rem; /* text-base */
  color: #374151; /* gray-700 */
}

.small {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* gray-500 */
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-blue-600">메인 제목</h1>
            <p className="text-base text-gray-700">이것은 본문 텍스트입니다.</p>
            <span className="text-sm text-gray-500">작은 텍스트</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>text-2xl</code>: 폰트 크기 1.5rem
          </li>
          <li>
            • <code>font-bold</code>: 폰트 굵기 bold
          </li>
          <li>
            • <code>text-blue-600</code>: 파란색 계열 텍스트
          </li>
          <li>
            • <code>space-y-4</code>: 자식 요소들 사이 수직 간격
          </li>
        </ul>
      </div>
    </div>
  );
}
