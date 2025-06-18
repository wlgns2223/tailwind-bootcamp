export default function FlexAdvancedAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header, .footer {
  flex-shrink: 0;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 0.25rem;
}

.header { background-color: #3b82f6; color: white; }
.footer { background-color: #4b5563; color: white; }

.main-section {
  display: flex;
  flex: 1;
  gap: 1rem;
  margin-top: 1rem;
}

.sidebar {
  width: 25%;
  background-color: #d1d5db; /* gray-300 */
  padding: 1rem;
  border-radius: 0.25rem;
}

.content {
  flex: 1;
  background-color: #f3f4f6; /* gray-100 */
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="h-80 border-2 border-dashed border-gray-300 p-4">
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0">
                <div className="bg-blue-500 text-white p-4 text-center font-bold rounded">
                  헤더
                </div>
              </div>
              <div className="flex flex-1 gap-4 mt-4">
                <div className="w-1/4">
                  <div className="bg-gray-300 h-full p-4 rounded">사이드바</div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 h-full p-4 rounded flex items-center justify-center">
                    메인 콘텐츠
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 mt-4">
                <div className="bg-gray-600 text-white p-4 text-center font-bold rounded">
                  푸터
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>flex-col</code>: 세로 방향 플렉스 레이아웃
          </li>
          <li>
            • <code>flex-1</code>: 남은 공간을 모두 차지
          </li>
          <li>
            • <code>flex-shrink-0</code>: 크기 축소 방지
          </li>
          <li>
            • <code>w-1/4</code>: 너비 25% (1/4)
          </li>
          <li>• 중첩된 플렉스 레이아웃으로 복잡한 구조 구현</li>
        </ul>
      </div>
    </div>
  );
}
