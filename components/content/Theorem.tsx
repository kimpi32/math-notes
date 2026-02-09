import { ReactNode } from "react";

interface Props {
  title: string;
  number?: string;
  children: ReactNode;
}

export function Theorem({ title, number, children }: Props) {
  return (
    <div className="my-6 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-r-lg p-5">
      <div className="font-semibold text-emerald-800 mb-2 text-sm uppercase tracking-wide">
        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs mr-2">
          정리
        </span>
        {number && <span className="text-emerald-400 mr-1">{number}</span>}
        {title}
      </div>
      <div className="text-gray-800 leading-relaxed italic">{children}</div>
    </div>
  );
}
