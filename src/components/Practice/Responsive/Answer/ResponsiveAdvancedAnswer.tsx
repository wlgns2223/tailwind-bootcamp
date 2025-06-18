export default function ResponsiveAdvancedAnswer() {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          반응형 웹사이트
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          화면 크기에 따라 자동으로 조정되는 레이아웃
        </p>
      </header>

      {/* Navigation */}
      <nav className="mb-8 bg-blue-600 rounded-lg p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-white text-xl font-semibold mb-4 md:mb-0">
            로고
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              홈
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              서비스
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              소개
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              연락처
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">서비스 1</h3>
            <p className="text-gray-600 mb-4">
              모바일에서 데스크톱까지 완벽하게 동작하는 반응형 서비스입니다.
            </p>
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              자세히 보기
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">서비스 2</h3>
            <p className="text-gray-600 mb-4">
              다양한 화면 크기에 최적화된 사용자 경험을 제공합니다.
            </p>
            <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              자세히 보기
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
          <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">서비스 3</h3>
            <p className="text-gray-600 mb-4">
              반응형 디자인으로 어떤 기기에서도 최적의 성능을 보장합니다.
            </p>
            <button className="w-full sm:w-auto bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              자세히 보기
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          주요 특징
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              📱
            </div>
            <h3 className="font-semibold mb-2">모바일 우선</h3>
            <p className="text-sm text-gray-600">
              모바일 기기에서 최적화된 경험
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              💻
            </div>
            <h3 className="font-semibold mb-2">데스크톱 지원</h3>
            <p className="text-sm text-gray-600">
              큰 화면에서도 완벽한 레이아웃
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ⚡
            </div>
            <h3 className="font-semibold mb-2">빠른 로딩</h3>
            <p className="text-sm text-gray-600">최적화된 성능으로 빠른 로딩</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🎨
            </div>
            <h3 className="font-semibold mb-2">아름다운 디자인</h3>
            <p className="text-sm text-gray-600">모든 기기에서 일관된 디자인</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white rounded-lg p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-3">회사 정보</h4>
            <p className="text-gray-300 text-sm">
              반응형 웹 디자인을 통해 최상의 사용자 경험을 제공합니다.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">연락처</h4>
            <p className="text-gray-300 text-sm">이메일: contact@example.com</p>
            <p className="text-gray-300 text-sm">전화: 02-1234-5678</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">소셜 미디어</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 반응형 웹사이트. 모든 권리 보유.
          </p>
        </div>
      </footer>
    </div>
  );
}
