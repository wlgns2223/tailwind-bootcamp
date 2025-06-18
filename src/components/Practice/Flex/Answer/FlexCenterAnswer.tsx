export default function FlexCenterAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
}

.item {
  padding: 1rem;
  background-color: #bfdbfe; /* blue-200 */
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="h-40 border-2 border-dashed border-gray-300">
            <div className="flex justify-center items-center h-full">
              <div className="p-4 bg-blue-200 rounded-lg shadow">
                중앙 정렬된 박스
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>justify-center</code>: 수평 중앙 정렬
          </li>
          <li>
            • <code>items-center</code>: 수직 중앙 정렬
          </li>
          <li>
            • <code>h-full</code>: 부모 요소의 전체 높이 사용
          </li>
        </ul>
      </div>
    </div>
  );
}
