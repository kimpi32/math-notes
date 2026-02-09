import { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export function Proof({ title = "증명", children }: Props) {
  return (
    <div className="my-6 border-l-4 border-purple-400 bg-purple-50/30 rounded-r-lg p-5">
      <div className="font-semibold text-purple-700 mb-2 text-sm">
        <span className="inline-block bg-purple-100 text-purple-600 px-2 py-0.5 rounded text-xs mr-2">
          증명
        </span>
        {title !== "증명" && title}
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
      <div className="text-right mt-2 text-gray-800 text-lg select-none">
        &#9632;
      </div>
    </div>
  );
}
