export default function GridAreaAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  height: 16rem;
}

.header {
  grid-column: span 4;
  background-color: #bfdbfe; /* blue-200 */
}

.sidebar {
  grid-row: span 1;
  background-color: #fef3c7; /* yellow-200 */
}

.main {
  grid-column: span 3;
  background-color: #bbf7d0; /* green-200 */
}

.footer {
  grid-column: span 4;
  background-color: #d1d5db; /* gray-300 */
}

.item {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-64">
            <div className="col-span-4 p-4 bg-blue-200 border rounded flex items-center justify-center font-semibold">
              헤더
            </div>
            <div className="row-span-1 p-4 bg-yellow-200 border rounded flex items-center justify-center">
              사이드바
            </div>
            <div className="col-span-3 p-4 bg-green-200 border rounded flex items-center justify-center">
              메인
            </div>
            <div className="col-span-4 p-4 bg-gray-300 border rounded flex items-center justify-center font-semibold">
              푸터
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid-rows-3</code>: 3개 행으로 설정
          </li>
          <li>
            • <code>col-span-4</code>: 4개 컬럼에 걸쳐 확장
          </li>
          <li>
            • <code>row-span-1</code>: 1개 행에 걸쳐 확장
          </li>
          <li>• 전형적인 웹 레이아웃 구조 구현</li>
        </ul>
      </div>
    </div>
  );
}
