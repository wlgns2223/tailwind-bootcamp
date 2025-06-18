export default function FlexBasicAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.container {
  display: flex;
}

.item {
  padding: 1rem;
  background-color: #dbeafe; /* blue-100 */
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 0.25rem;
  margin: 0.5rem;
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-white">
          <div className="flex">
            <div className="p-4 bg-blue-100 border rounded m-2">아이템 1</div>
            <div className="p-4 bg-blue-100 border rounded m-2">아이템 2</div>
            <div className="p-4 bg-blue-100 border rounded m-2">아이템 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
