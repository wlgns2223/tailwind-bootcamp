"use client";

import { usePathname } from "next/navigation";

export default function TransitionNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "메인", icon: "🏠" },
    {
      label: "📚 강의 데모",
      children: [
        { href: "/flex-demo", label: "Flex", icon: "📦" },
        { href: "/grid-demo", label: "Grid", icon: "⚏" },
        { href: "/style-demo", label: "Style", icon: "🎨" },
        { href: "/responsive-demo", label: "Responsive", icon: "📱" },
        { href: "/effects-demo", label: "Effects", icon: "✨" },
        { href: "/gradient-demo", label: "Gradient", icon: "🌈" },
        { href: "/transition-demo", label: "Transition", icon: "🔄" },
      ],
    },
    {
      label: "🛠️ 실습 템플릿",
      children: [
        { href: "/flex-practice", label: "Flex", icon: "�" },
        { href: "/grid-practice", label: "Grid", icon: "⚏" },
        { href: "/style-practice", label: "Style", icon: "🎨" },
        { href: "/responsive-practice", label: "Responsive", icon: "📱" },
        { href: "/effects-practice", label: "Effects", icon: "✨" },
        { href: "/gradient-practice", label: "Gradient", icon: "🌈" },
        { href: "/transition-practice", label: "Transition", icon: "�" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-800">
            TailwindCSS 강의
          </div>
          <div className="flex space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.href ? (
                  // 단일 링크
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2
                      ${
                        pathname === item.href
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ) : (
                  // 드롭다운 메뉴
                  <>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 group-hover:bg-gray-100">
                      <span>{item.label}</span>
                      <span className="text-xs">▼</span>
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-48">
                      {item.children?.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg
                            ${
                              pathname === child.href
                                ? "bg-blue-500 text-white"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                            }`}
                        >
                          <span>{child.icon}</span>
                          <span>{child.label}</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
