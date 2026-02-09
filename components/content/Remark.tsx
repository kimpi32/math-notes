import { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export function Remark({ title, children }: Props) {
  return (
    <div className="my-6 border-l-4 border-gray-300 bg-gray-50/50 rounded-r-lg p-5">
      <div className="font-semibold text-gray-500 mb-2 text-sm">
        <span className="inline-block bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs mr-2">
          참고
        </span>
        {title}
      </div>
      <div className="text-gray-600 leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </div>
  );
}
