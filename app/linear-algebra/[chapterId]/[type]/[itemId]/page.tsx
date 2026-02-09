import { getSubject } from "@/lib/subjects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { notFound } from "next/navigation";

const typeLabel: Record<string, string> = {
  concepts: "개념",
  theorems: "정리",
  proofs: "증명",
};

export function generateStaticParams() {
  const subject = getSubject("linear-algebra");
  const params: { chapterId: string; type: string; itemId: string }[] = [];
  for (const ch of subject?.chapters ?? []) {
    for (const type of ["concepts", "theorems", "proofs"] as const) {
      for (const item of ch[type]) {
        params.push({ chapterId: ch.id, type, itemId: item.id });
      }
    }
  }
  return params;
}

export default async function ContentItemPage({
  params,
}: {
  params: Promise<{ chapterId: string; type: string; itemId: string }>;
}) {
  const { chapterId, type, itemId } = await params;
  const subject = getSubject("linear-algebra");
  const chapter = subject?.chapters.find((c) => c.id === chapterId);
  if (!chapter) notFound();

  const validTypes = ["concepts", "theorems", "proofs"] as const;
  if (!validTypes.includes(type as (typeof validTypes)[number])) notFound();

  const items = chapter[type as (typeof validTypes)[number]];
  const item = items.find((i) => i.id === itemId);
  if (!item) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "선형대수", href: "/linear-algebra" },
          {
            label: `${chapter.number}. ${chapter.titleKo}`,
            href: `/linear-algebra/${chapterId}`,
          },
          { label: `${typeLabel[type]} - ${item.titleKo}` },
        ]}
      />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Tag type={item.type} />
          <StatusBadge status={item.status} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {item.titleKo}
        </h1>
        {item.titleEn && (
          <p className="text-sm text-gray-400">{item.titleEn}</p>
        )}
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
        <p className="text-gray-400 text-sm mb-2">
          이 콘텐츠는 아직 작성되지 않았습니다.
        </p>
        <p className="text-gray-300 text-xs">
          내용이 추가되면 여기에 정의, 정리, 증명 등이 표시됩니다.
        </p>
      </div>
    </>
  );
}
