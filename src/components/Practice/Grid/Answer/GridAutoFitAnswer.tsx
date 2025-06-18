export default function GridAutoFitAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  background-color: white;
  border: 2px solid #e5e7eb; /* gray-200 */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h3 {
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: #6b7280; /* gray-600 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md  ">
              <h3 className="font-bold text-lg mb-2">카드 1</h3>
              <p className="text-gray-600">카드 내용</p>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md  ">
              <h3 className="font-bold text-lg mb-2">카드 2</h3>
              <p className="text-gray-600">카드 내용</p>
            </div>
            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md  ">
              <h3 className="font-bold text-lg mb-2">카드 3</h3>
              <p className="text-gray-600">카드 내용</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</code>: 반응형
            그리드
          </li>
          <li>
            • <code>hover:shadow-lg</code>: 호버 시 그림자 효과
          </li>
          <li>
            • <code>transition-shadow</code>: 부드러운 전환 효과
          </li>
          <li>• 화면 크기에 따라 자동으로 컬럼 수 조정</li>
        </ul>
      </div>
    </div>
  );
}
