import { getSubject } from "@/lib/subjects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ContentItem, ContentType } from "@/lib/types";

function ItemCard({ item, href }: { item: ContentItem; href: string }) {
  const borderColors: Record<ContentType, string> = {
    concept: "border-l-blue-400",
    theorem: "border-l-emerald-400",
    proof: "border-l-purple-400",
  };
  return (
    <Link
      href={href}
      className={`block border border-gray-200 border-l-4 ${borderColors[item.type]} rounded-lg p-4 hover:shadow-sm hover:border-gray-300 transition-all`}
    >
      <div className="flex items-center justify-between mb-1">
        <Tag type={item.type} />
        <StatusBadge status={item.status} />
      </div>
      <h4 className="font-medium text-gray-900 mt-2">{item.titleKo}</h4>
      {item.titleEn && (
        <p className="text-xs text-gray-400 mt-0.5">{item.titleEn}</p>
      )}
    </Link>
  );
}

export default function Ch00Page() {
  const subject = getSubject("analysis");
  const chapter = subject?.chapters.find((c) => c.id === "ch00-foundations");
  if (!chapter) notFound();

  const sections = [
    { key: "concepts" as const, label: "개념 Concepts", items: chapter.concepts },
    { key: "theorems" as const, label: "정리 Theorems", items: chapter.theorems },
    { key: "proofs" as const, label: "증명 Proofs", items: chapter.proofs },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "해석학", href: "/analysis" },
          { label: "0. 기초와 표기법" },
        ]}
      />
      <div className="mb-8">
        <p className="text-sm text-blue-500 font-medium mb-1">Chapter 0</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          기초와 표기법
        </h1>
        <p className="text-sm text-gray-400 mb-3">Foundations and Notation</p>
        <p className="text-gray-500">
          증명 방법론, 집합론 기초, 논리 기호 — 해석학 전반에서 반복적으로 사용되는 도구들
        </p>
      </div>

      {sections.map(
        ({ key, label, items }) =>
          items.length > 0 && (
            <section key={key} id={key} className="mb-10">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-100 pb-2">
                {label}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {items.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    href={`/analysis/ch00-foundations/${key}/${item.id}`}
                  />
                ))}
              </div>
            </section>
          )
      )}
    </>
  );
}
