export default function GridComplexAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  height: 100%;
}

.featured {
  grid-column: span 4;
  grid-row: span 2;
  background-color: #3b82f6; /* blue-500 */
  color: white;
}

.article {
  grid-column: span 2;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.ad {
  grid-column: span 2;
  grid-row: span 2;
  background-color: #fca5a5; /* red-300 */
  font-weight: bold;
}

.article1 { background-color: #fef3c7; } /* yellow-200 */
.article2 { background-color: #bbf7d0; } /* green-200 */
.article3 { background-color: #e9d5ff; } /* purple-200 */
.article4 { background-color: #c7d2fe; } /* indigo-200 */`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="h-96">
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-full">
              <div className="col-span-4 row-span-2 p-4 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                주요 기사
              </div>
              <div className="col-span-2 p-4 bg-yellow-200 rounded-lg flex items-center justify-center font-semibold">
                기사 1
              </div>
              <div className="col-span-2 p-4 bg-green-200 rounded-lg flex items-center justify-center font-semibold">
                기사 2
              </div>
              <div className="col-span-2 p-4 bg-purple-200 rounded-lg flex items-center justify-center font-semibold">
                기사 3
              </div>
              <div className="col-span-2 row-span-2 p-4 bg-red-300 rounded-lg flex items-center justify-center font-bold">
                광고
              </div>
              <div className="col-span-2 p-4 bg-indigo-200 rounded-lg flex items-center justify-center font-semibold">
                기사 4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid-cols-6</code>: 6개 컬럼의 정교한 그리드
          </li>
          <li>
            • <code>grid-rows-4</code>: 4개 행으로 구성
          </li>
          <li>
            • 다양한 <code>col-span</code>, <code>row-span</code> 조합
          </li>
          <li>• 실제 매거진 레이아웃과 같은 복잡한 구조</li>
          <li>• 중요도에 따른 크기 차별화</li>
        </ul>
      </div>
    </div>
  );
}
