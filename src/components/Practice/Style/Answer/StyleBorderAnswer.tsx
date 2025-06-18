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
  gap: 1rem;
}

.rounded-box {
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem; /* rounded-lg */
  text-align: center;
}

.thick-border {
  border: 4px solid #3b82f6; /* border-4 border-blue-500 */
}

.dashed-border {
  border: 2px dashed #9ca3af; /* border-2 border-dashed border-gray-400 */
}

.shadow-box {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white border rounded-lg text-center">
              둥근 모서리
            </div>
            <div className="p-4 bg-white border-4 border-blue-500 text-center">
              두꺼운 테두리
            </div>
            <div className="p-4 bg-white border-2 border-dashed border-gray-400 text-center">
              점선 테두리
            </div>
            <div className="p-4 bg-white border shadow-lg text-center">
              그림자 효과
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>rounded-lg</code>: 둥근 모서리
          </li>
          <li>
            • <code>border-4</code>: 두꺼운 테두리
          </li>
          <li>
            • <code>border-dashed</code>: 점선 스타일
          </li>
          <li>
            • <code>shadow-lg</code>: 큰 그림자
          </li>
        </ul>
      </div>
    </div>
  );
}
