import { ReactNode } from "react";

interface Props {
  id?: string;
  title?: string;
  children: ReactNode;
}

export function Example({ id, title, children }: Props) {
  return (
    <div id={id} className="my-6 border-l-4 border-amber-400 bg-amber-50/50 rounded-r-lg p-5 scroll-mt-20">
      <div className="font-semibold text-amber-700 mb-2 text-sm">
        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs mr-2">
          예제
        </span>
        {title}
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
