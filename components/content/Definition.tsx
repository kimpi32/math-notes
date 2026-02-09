import { ReactNode } from "react";

interface Props {
  title: string;
  number?: string;
  children: ReactNode;
}

export function Definition({ title, number, children }: Props) {
  return (
    <div className="my-6 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-lg p-5">
      <div className="font-semibold text-blue-800 mb-2 text-sm uppercase tracking-wide">
        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs mr-2">
          정의
        </span>
        {number && <span className="text-blue-400 mr-1">{number}</span>}
        {title}
      </div>
      <div className="text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}
