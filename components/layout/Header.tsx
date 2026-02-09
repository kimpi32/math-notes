import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl">&#x1D4DC;</span>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">
                수학 강의 노트
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">Mathematics Lecture Notes</p>
            </div>
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <Link
              href="/analysis"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              해석학
            </Link>
            <Link
              href="/linear-algebra"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              선형대수
            </Link>
            <Link
              href="/category-theory"
              className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
            >
              범주론
            </Link>
            <Link
              href="/higher-category-theory"
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
            >
              고차 범주론
            </Link>
            <Link
              href="/algebraic-geometry"
              className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
            >
              대수기하
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
