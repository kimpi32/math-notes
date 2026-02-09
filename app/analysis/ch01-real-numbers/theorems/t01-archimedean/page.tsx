import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Theorem } from "@/components/content/Theorem";
import { Proof } from "@/components/content/Proof";
import { Remark } from "@/components/content/Remark";
import Link from "next/link";

export const metadata = {
  title: "아르키메데스 성질 - 해석학 - 수학 강의 노트",
};

export default function ArchimedeanPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "해석학", href: "/analysis" },
          { label: "1. 실수의 체계", href: "/analysis/ch01-real-numbers" },
          { label: "정리 - 아르키메데스 성질" },
        ]}
      />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Tag type="theorem" />
          <StatusBadge status="complete" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          아르키메데스 성질
        </h1>
        <p className="text-sm text-gray-400">Archimedean Property</p>
      </div>

      <Theorem title="아르키메데스 성질" number="1.1">
        <p>
          임의의 실수 <em>x</em>, <em>y</em> &gt; 0에 대하여, <em>nx</em> &gt; <em>y</em>를 만족하는
          자연수 <em>n</em>이 존재한다.
        </p>
      </Theorem>

      <Proof>
        <p>
          귀류법을 사용한다. 모든 자연수 <em>n</em>에 대하여 <em>nx</em> &le; <em>y</em>라 가정하자.
        </p>
        <p>
          집합 S = &#123;nx : n &isin; &#8469;&#125;는 위로 유계이므로,
          완비성 공리에 의해 &alpha; = sup S가 존재한다.
        </p>
        <p>
          &alpha; - x는 S의 상계가 아니므로, 어떤 m &isin; &#8469;에 대해
          mx &gt; &alpha; - x이다.
        </p>
        <p>
          따라서 (m+1)x &gt; &alpha;인데, (m+1)x &isin; S이므로
          이는 &alpha; = sup S에 모순이다.
        </p>
      </Proof>

      <Remark>
        <p>
          이 정리는 실수의 완비성 공리로부터 직접 따라 나온다.
          직관적으로, 아무리 작은 양수라도 충분히 많이 더하면 임의로 큰 수를 넘을 수 있다는 것이다.
        </p>
        <p className="mt-2">
          관련 개념:{" "}
          <Link href="/analysis/ch01-real-numbers/concepts/c02-completeness" className="text-blue-600 hover:underline">
            완비성 공리
          </Link>
        </p>
      </Remark>
    </>
  );
}
