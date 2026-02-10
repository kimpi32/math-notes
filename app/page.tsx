import Link from "next/link";
import { subjects } from "@/lib/subjects";

const colorStyles: Record<string, { border: string; bg: string; hover: string; accent: string }> = {
  blue: {
    border: "border-blue-200",
    bg: "bg-blue-50/50",
    hover: "hover:border-blue-400 hover:shadow-blue-100",
    accent: "text-blue-600",
  },
  emerald: {
    border: "border-emerald-200",
    bg: "bg-emerald-50/50",
    hover: "hover:border-emerald-400 hover:shadow-emerald-100",
    accent: "text-emerald-600",
  },
  rose: {
    border: "border-rose-200",
    bg: "bg-rose-50/50",
    hover: "hover:border-rose-400 hover:shadow-rose-100",
    accent: "text-rose-600",
  },
  violet: {
    border: "border-violet-200",
    bg: "bg-violet-50/50",
    hover: "hover:border-violet-400 hover:shadow-violet-100",
    accent: "text-violet-600",
  },
  orange: {
    border: "border-orange-200",
    bg: "bg-orange-50/50",
    hover: "hover:border-orange-400 hover:shadow-orange-100",
    accent: "text-orange-600",
  },
  teal: {
    border: "border-teal-200",
    bg: "bg-teal-50/50",
    hover: "hover:border-teal-400 hover:shadow-teal-100",
    accent: "text-teal-600",
  },
  indigo: {
    border: "border-indigo-200",
    bg: "bg-indigo-50/50",
    hover: "hover:border-indigo-400 hover:shadow-indigo-100",
    accent: "text-indigo-600",
  },
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          수학 강의 노트
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          대학 수학 과정을 <strong className="text-gray-700">개념</strong>,{" "}
          <strong className="text-gray-700">정리</strong>,{" "}
          <strong className="text-gray-700">증명</strong>으로 체계적으로 정리합니다.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {subjects.map((subject) => {
          const style = colorStyles[subject.color] || colorStyles.blue;
          const totalItems = subject.chapters.reduce(
            (sum, ch) => sum + ch.concepts.length + ch.theorems.length + ch.proofs.length,
            0
          );
          return (
            <Link
              key={subject.id}
              href={`/${subject.id}`}
              className={`group block border-2 ${style.border} ${style.bg} rounded-2xl p-8 transition-all ${style.hover} hover:shadow-lg`}
            >
              <div className={`text-sm font-medium ${style.accent} mb-1`}>
                {subject.titleEn}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform">
                {subject.titleKo}
              </h2>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {subject.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>{subject.chapters.length}개 챕터</span>
                <span>{totalItems}개 항목</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            개념
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            정리
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            증명
          </span>
        </div>
      </div>
    </main>
  );
}
