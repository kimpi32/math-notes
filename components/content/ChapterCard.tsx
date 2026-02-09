import Link from "next/link";
import { Chapter } from "@/lib/types";

export function ChapterCard({
  chapter,
  subjectId,
  accentColor,
}: {
  chapter: Chapter;
  subjectId: string;
  accentColor: string;
}) {
  const total = chapter.concepts.length + chapter.theorems.length + chapter.proofs.length;

  return (
    <Link
      href={`/${subjectId}/${chapter.id}`}
      className="group block border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <span className={`text-xs font-medium ${accentColor}`}>
          Chapter {chapter.number}
        </span>
        <span className="text-xs text-gray-300">{total}개 항목</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:translate-x-0.5 transition-transform">
        {chapter.titleKo}
      </h3>
      {chapter.titleEn && (
        <p className="text-xs text-gray-400 mb-3">{chapter.titleEn}</p>
      )}
      {chapter.description && (
        <p className="text-sm text-gray-500 mb-4">{chapter.description}</p>
      )}
      <div className="flex items-center gap-3 text-xs">
        {chapter.concepts.length > 0 && (
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-gray-400">개념 {chapter.concepts.length}</span>
          </span>
        )}
        {chapter.theorems.length > 0 && (
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-gray-400">정리 {chapter.theorems.length}</span>
          </span>
        )}
        {chapter.proofs.length > 0 && (
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-gray-400">증명 {chapter.proofs.length}</span>
          </span>
        )}
      </div>
    </Link>
  );
}
