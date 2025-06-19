export default function StyleAdvancedAnswer() {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h4 className="text-lg font-semibold mb-4 text-green-800">정답 해설</h4>

      <div className="mb-6">
        <h5 className="font-medium mb-2 text-gray-700">목표 CSS:</h5>
        <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  max-width: 80rem;
  min-height: 600px;
}

.sidebar-card {
  grid-row: 1 / -1;
  background-color: #4f46e5; /* bg-indigo-600 */
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  border: 2px solid #6366f1; /* border-indigo-500 */
}

.sidebar-card::before {
  content: '';
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-left: 6px solid #3b82f6;
  position: relative;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid #e5e7eb; /* border-gray-200 */
  position: relative;
}

.stat-card.revenue {
  border-color: #f59e0b; /* border-amber-500 */
  background-color: #fffbeb; /* bg-amber-50 */
}

.stat-card.orders {
  border-color: #06b6d4; /* border-cyan-500 */
  background-color: #ecfeff; /* bg-cyan-50 */
}

.stat-card.uptime {
  border-color: #10b981; /* border-emerald-500 */
  background-color: #ecfdf5; /* bg-emerald-50 */
}

.stat-card.support {
  border-color: #ef4444; /* border-red-500 */
  background-color: #fef2f2; /* bg-red-50 */
}`}
        </pre>
      </div>

      <div>
        <h5 className="font-medium mb-2 text-gray-700">실제 결과:</h5>
        <div className="p-4 border rounded bg-gray-100">
          <div className="grid grid-cols-4 grid-rows-3 gap-6 max-w-5xl min-h-[600px]">
            {/* Sidebar Card */}
            <div className="row-span-3 bg-indigo-600 border-2 border-indigo-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                    <span className="text-sm">Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                    <span className="text-sm">Settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header Section */}
            <div className="col-span-2 bg-white rounded-2xl p-8 shadow-lg border-l-6 border-blue-500 relative">
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Here's what's happening with your dashboard today.</p>
            </div>

            {/* Right Info Card */}
            <div className="row-span-3 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">124</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="col-span-2 row-span-2 grid grid-cols-2 gap-4">
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-600">$12.4k</div>
                <div className="text-sm text-gray-600 mt-1">Revenue</div>
              </div>
              <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600">2.4k</div>
                <div className="text-sm text-gray-600 mt-1">Orders</div>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600">98.2%</div>
                <div className="text-sm text-gray-600 mt-1">Uptime</div>
              </div>
              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600">156</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h6 className="font-medium text-yellow-800 mb-2">핵심 포인트:</h6>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • <code>grid-cols-4 grid-rows-3</code>: 복잡한 그리드 레이아웃
          </li>
          <li>
            • <code>row-span-3 col-span-2</code>: 그리드 아이템 영역 확장
          </li>
          <li>
            • <code>border-l-6</code>: 좌측 강조 테두리
          </li>
          <li>
            • <code>absolute positioning</code>: 절대 위치 장식 요소
          </li>
          <li>
            • <code>border-2 + bg-color-50</code>: 색상 코디네이션
          </li>
        </ul>
      </div>
    </div>
  );
}
