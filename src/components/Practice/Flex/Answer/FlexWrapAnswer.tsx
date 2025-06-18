export default function FlexWrapAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.item {
  padding: 0.5rem 1rem;
  background-color: #e9d5ff; /* purple-200 */
  border-radius: 0.25rem;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="w-80 border-2 border-dashed border-gray-300 p-4">
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 1</div>
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 2</div>
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 3</div>
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 4</div>
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 5</div>
              <div className="px-4 py-2 bg-purple-200 rounded">아이템 6</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>flex-wrap</code>: 아이템이 넘칠 때 다음 줄로 감싸기
          </li>
          <li>
            • <code>gap-2</code>: 아이템 간 간격 0.5rem
          </li>
          <li>• 컨테이너 너비가 제한적일 때 자동으로 줄바꿈</li>
        </ul>
      </div>
    </div>
  );
}
