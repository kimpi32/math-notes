"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Subject } from "@/lib/types";

const typeLabels: Record<string, { label: string; color: string }> = {
  concepts: { label: "개념", color: "text-blue-600" },
  theorems: { label: "정리", color: "text-emerald-600" },
  proofs: { label: "증명", color: "text-purple-600" },
};

export function Sidebar({ subject }: { subject: Subject }) {
  const pathname = usePathname();
  const [openChapters, setOpenChapters] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    const ch = subject.chapters.find((c) =>
      pathname.includes(`/${c.id}`)
    );
    if (ch) initial.add(ch.id);
    return initial;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const colorMap: Record<string, string> = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    rose: "text-rose-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
  };

  const sidebarContent = (
    <nav className="py-4 px-3 space-y-1 overflow-y-auto h-full">
      <Link
        href={`/${subject.id}`}
        className={`block px-3 py-2 rounded-lg text-sm font-bold mb-3 ${
          colorMap[subject.color] || "text-gray-900"
        } hover:bg-gray-100 transition-colors`}
      >
        {subject.titleKo}
        <span className="block text-xs font-normal text-gray-400">
          {subject.titleEn}
        </span>
      </Link>
      {subject.chapters.map((ch) => {
        const isOpen = openChapters.has(ch.id);
        const isActive = pathname.includes(`/${ch.id}`);
        return (
          <div key={ch.id}>
            <button
              onClick={() => toggleChapter(ch.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-left">
                <span className="text-xs text-gray-400 mr-1.5">
                  {ch.number}.
                </span>
                {ch.titleKo}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                <Link
                  href={`/${subject.id}/${ch.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-2 py-1.5 text-xs rounded hover:bg-gray-50 ${
                    pathname === `/${subject.id}/${ch.id}`
                      ? "font-medium text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  챕터 개요
                </Link>
                {(["concepts", "theorems", "proofs"] as const).map((type) => {
                  const items = ch[type];
                  if (items.length === 0) return null;
                  const { label, color } = typeLabels[type];
                  return (
                    <Link
                      key={type}
                      href={`/${subject.id}/${ch.id}#${type}`}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-2 py-1.5 text-xs rounded hover:bg-gray-50 text-gray-500`}
                    >
                      <span className={color}>{label}</span>
                      <span className="text-gray-300 ml-1">
                        ({items.length})
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
