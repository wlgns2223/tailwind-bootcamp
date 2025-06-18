export default function StyleColorsAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.primary {
  padding: 1rem;
  background-color: #3b82f6; /* blue-500 */
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
}

.success {
  background-color: #10b981; /* green-500 */
}

.warning {
  background-color: #f59e0b; /* yellow-500 */
}

.danger {
  background-color: #ef4444; /* red-500 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center font-semibold">
              Primary Box
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg text-center font-semibold">
              Success Box
            </div>
            <div className="p-4 bg-yellow-500 text-white rounded-lg text-center font-semibold">
              Warning Box
            </div>
            <div className="p-4 bg-red-500 text-white rounded-lg text-center font-semibold">
              Danger Box
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>bg-blue-500</code>: 파란색 배경
          </li>
          <li>
            • <code>text-white</code>: 흰색 텍스트
          </li>
          <li>
            • <code>rounded-lg</code>: 둥근 모서리
          </li>
          <li>• 색상별 시맨틱 의미 활용</li>
        </ul>
      </div>
    </div>
  );
}
