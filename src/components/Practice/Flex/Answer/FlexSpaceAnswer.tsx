export default function FlexSpaceAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.left { background-color: #fecaca; } /* red-200 */
.center { background-color: #fef3c7; } /* yellow-200 */
.right { background-color: #bbf7d0; } /* green-200 */`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="border-2 border-dashed border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className="px-6 py-3 bg-red-200 rounded-lg font-semibold">
                좌측
              </div>
              <div className="px-6 py-3 bg-yellow-200 rounded-lg font-semibold">
                중앙
              </div>
              <div className="px-6 py-3 bg-green-200 rounded-lg font-semibold">
                우측
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>justify-between</code>: 첫 번째와 마지막 아이템을 양 끝에,
            나머지는 균등 배치
          </li>
          <li>
            • <code>items-center</code>: 수직 중앙 정렬
          </li>
          <li>• 각 아이템에 다른 배경색으로 구분</li>
        </ul>
      </div>
    </div>
  );
}
