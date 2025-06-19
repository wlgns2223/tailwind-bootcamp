export default function StyleBorderAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
}

.card-base {
  position: relative;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.multi-border {
  border: 3px solid #ef4444; /* border-3 border-red-500 */
  border-top: 6px solid #3b82f6; /* border-t-6 border-blue-500 */
  border-bottom: 6px solid #10b981; /* border-b-6 border-green-500 */
}

.inset-border {
  border: 4px inset #8b5cf6; /* border-4 border-inset border-purple-500 */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.outline-style {
  border: 2px solid transparent;
  outline: 3px solid #f59e0b; /* outline outline-amber-500 */
  outline-offset: 4px;
}

.complex-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-2 gap-6 p-6">
            <div className="relative p-6 bg-white rounded-2xl text-center min-h-[120px] flex flex-col justify-center border-3 border-red-500 border-t-6 border-t-blue-500 border-b-6 border-b-green-500">
              <span className="font-semibold text-gray-700">다색 테두리</span>
              <span className="text-xs text-gray-500 mt-1">Multi-Border</span>
            </div>
            <div
              className="relative p-6 bg-white rounded-2xl text-center min-h-[120px] flex flex-col justify-center border-4 border-purple-500"
              style={{ borderStyle: "inset", boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <span className="font-semibold text-gray-700">인셋 테두리</span>
              <span className="text-xs text-gray-500 mt-1">Inset Border</span>
            </div>
            <div className="relative p-6 bg-white rounded-2xl text-center min-h-[120px] flex flex-col justify-center border-2 border-transparent outline-3 outline-amber-500 outline-offset-4">
              <span className="font-semibold text-gray-700">아웃라인 스타일</span>
              <span className="text-xs text-gray-500 mt-1">Outline Style</span>
            </div>
            <div
              className="relative p-6 bg-white rounded-2xl text-center min-h-[120px] flex flex-col justify-center shadow-lg shadow-gray-500/20"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="font-semibold text-gray-700">복합 그림자</span>
              <span className="text-xs text-gray-500 mt-1">Complex Shadow</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>border-t-6 border-b-6</code>: 상하 테두리 두께 차별화
          </li>
          <li>
            • <code>border-inset</code>: 내부로 들어간 테두리 효과
          </li>
          <li>
            • <code>outline-offset-4</code>: 아웃라인과 요소 간격
          </li>
          <li>
            • <code>complex shadow</code>: 다중 그림자 효과 조합
          </li>
        </ul>
      </div>
    </div>
  );
}
