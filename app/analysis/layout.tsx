import { getSubject } from "@/lib/subjects";
import { Sidebar } from "@/components/layout/Sidebar";
import { notFound } from "next/navigation";

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subject = getSubject("analysis");
  if (!subject) notFound();

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <Sidebar subject={subject} />
      <main className="flex-1 min-w-0 lg:ml-0">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
