"use client";

export default function StyleAdvancedPractice() {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">실습 영역 (TailwindCSS로 변환하세요)</h3>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-md font-medium mb-4 text-gray-600">복합 레이아웃 대시보드 컴포넌트 만들기:</h4>
        <div>
          {/* 여기에 TailwindCSS 클래스를 사용하여 복합 대시보드를 만들어보세요 */}
          <div className="">
            {/* Sidebar */}
            <div className="">
              <h3 className="">Dashboard</h3>
              <div className="">
                <div className="">Analytics</div>
                <div className="">Reports</div>
                <div className="">Settings</div>
              </div>
            </div>

            {/* Header */}
            <div className="">
              <h2 className="">Welcome Back!</h2>
              <p className="">Dashboard overview</p>
            </div>

            {/* Right Panel */}
            <div className="">
              <h3 className="">Quick Stats</h3>
              <div className="">Stats content</div>
            </div>

            {/* Stats Grid */}
            <div className="">
              <div className="">Revenue</div>
              <div className="">Orders</div>
              <div className="">Uptime</div>
              <div className="">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
