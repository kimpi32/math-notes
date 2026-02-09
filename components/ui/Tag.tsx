import { ContentType } from "@/lib/types";

const config: Record<ContentType, { label: string; bg: string; text: string }> = {
  concept: { label: "개념", bg: "bg-blue-100", text: "text-blue-700" },
  theorem: { label: "정리", bg: "bg-emerald-100", text: "text-emerald-700" },
  proof: { label: "증명", bg: "bg-purple-100", text: "text-purple-700" },
};

export function Tag({ type }: { type: ContentType }) {
  const c = config[type];
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${c.bg} ${c.text}`}
    >
      {c.label}
    </span>
  );
}
