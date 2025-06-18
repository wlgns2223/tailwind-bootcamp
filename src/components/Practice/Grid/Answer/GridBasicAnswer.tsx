export default function GridBasicAnswer() {
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

.item {
  padding: 1rem;
  background-color: #dbeafe; /* blue-100 */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  text-align: center;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-100 border rounded text-center">
              아이템 1
            </div>
            <div className="p-4 bg-blue-100 border rounded text-center">
              아이템 2
            </div>
            <div className="p-4 bg-blue-100 border rounded text-center">
              아이템 3
            </div>
            <div className="p-4 bg-blue-100 border rounded text-center">
              아이템 4
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid</code>: Grid 레이아웃 적용
          </li>
          <li>
            • <code>grid-cols-2</code>: 2개 컬럼으로 설정
          </li>
          <li>
            • <code>gap-4</code>: 아이템 간 간격 1rem
          </li>
        </ul>
      </div>
    </div>
  );
}
