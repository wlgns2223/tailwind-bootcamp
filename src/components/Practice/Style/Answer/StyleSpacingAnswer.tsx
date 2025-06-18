export default function StyleSpacingAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}

.large-padding {
  padding: 2rem; /* p-8 */
  background-color: #dbeafe; /* bg-blue-100 */
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  text-align: center;
}

.medium-padding {
  padding: 1rem; /* p-4 */
  background-color: #dcfce7; /* bg-green-100 */
}

.small-padding {
  padding: 0.5rem; /* p-2 */
  background-color: #fef3c7; /* bg-yellow-100 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="space-y-4">
            <div className="p-8 bg-blue-100 border rounded text-center">
              패딩 큼
            </div>
            <div className="p-4 bg-green-100 border rounded text-center">
              패딩 중간
            </div>
            <div className="p-2 bg-yellow-100 border rounded text-center">
              패딩 작음
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>p-8</code>: 모든 방향 패딩 2rem
          </li>
          <li>
            • <code>p-4</code>: 모든 방향 패딩 1rem
          </li>
          <li>
            • <code>p-2</code>: 모든 방향 패딩 0.5rem
          </li>
          <li>
            • <code>space-y-4</code>: 자식 요소들 사이 수직 간격
          </li>
        </ul>
      </div>
    </div>
  );
}
