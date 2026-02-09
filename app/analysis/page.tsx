import { getSubject } from "@/lib/subjects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ChapterCard } from "@/components/content/ChapterCard";
import { notFound } from "next/navigation";

export const metadata = {
  title: "해석학 - 수학 강의 노트",
};

export default function AnalysisPage() {
  const subject = getSubject("analysis");
  if (!subject) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "해석학" }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {subject.titleKo}
        </h1>
        <p className="text-sm text-blue-500 font-medium mb-3">
          {subject.titleEn}
        </p>
        <p className="text-gray-500">{subject.description}</p>
      </div>
      <div className="grid gap-4">
        {subject.chapters.map((ch) => (
          <ChapterCard
            key={ch.id}
            chapter={ch}
            subjectId="analysis"
            accentColor="text-blue-500"
          />
        ))}
      </div>
    </>
  );
}
