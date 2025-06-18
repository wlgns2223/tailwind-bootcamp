export default function GridColumnsAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.header {
  grid-column: span 3;
  padding: 1rem;
  background-color: #fecaca; /* red-200 */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  text-align: center;
  font-weight: 600;
}

.item {
  padding: 1rem;
  background-color: #bbf7d0; /* green-200 */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  text-align: center;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 p-4 bg-red-200 border rounded text-center font-semibold">
              헤더
            </div>
            <div className="p-4 bg-green-200 border rounded text-center">
              콘텐츠 1
            </div>
            <div className="p-4 bg-green-200 border rounded text-center">
              콘텐츠 2
            </div>
            <div className="p-4 bg-green-200 border rounded text-center">
              콘텐츠 3
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid-cols-3</code>: 3개 컬럼으로 설정
          </li>
          <li>
            • <code>col-span-3</code>: 3개 컬럼에 걸쳐 확장
          </li>
          <li>• 헤더가 전체 너비를 차지하고 나머지는 균등 분할</li>
        </ul>
      </div>
    </div>
  );
}
