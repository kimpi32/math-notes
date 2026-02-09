import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Definition } from "@/components/content/Definition";
import { Example } from "@/components/content/Example";
import { Remark } from "@/components/content/Remark";

export const metadata = {
  title: "완비성 공리 - 해석학 - 수학 강의 노트",
};

export default function CompletenessPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "해석학", href: "/analysis" },
          { label: "1. 실수의 체계", href: "/analysis/ch01-real-numbers" },
          { label: "개념 - 완비성 공리" },
        ]}
      />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Tag type="concept" />
          <StatusBadge status="complete" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          완비성 공리
        </h1>
        <p className="text-sm text-gray-400">Completeness Axiom (Least Upper Bound Property)</p>
      </div>

      <Definition title="상계와 상한" number="1.3">
        <p>
          순서체 F의 부분집합 S가 <strong>위로 유계</strong>(bounded above)라 함은,
          모든 s &isin; S에 대하여 s &le; M인 원소 M &isin; F이 존재하는 것이다.
          이때 M을 S의 <strong>상계</strong>(upper bound)라 한다.
        </p>
        <p className="mt-2">
          S의 상계 중 가장 작은 것을 S의 <strong>상한</strong>(supremum) 또는
          <strong>최소상계</strong>(least upper bound)라 하고 sup S로 표기한다.
        </p>
      </Definition>

      <Definition title="완비성 공리" number="1.4">
        <p>
          실수의 공집합이 아닌 부분집합 S가 위로 유계이면,
          sup S가 실수로서 존재한다.
        </p>
        <p className="mt-2">
          이것이 실수를 유리수와 구별짓는 핵심 성질이다.
        </p>
      </Definition>

      <Example title="유리수는 완비적이지 않다">
        <p>
          집합 S = &#123;q &isin; &#8474; : q&sup2; &lt; 2&#125;는 유리수에서 위로 유계이지만,
          sup S = &radic;2는 유리수가 아니다. 따라서 유리수 체계는 완비적이지 않다.
        </p>
      </Example>

      <Remark>
        <p>
          완비성 공리는 실해석학의 모든 주요 정리들의 근간이 된다.
          아르키메데스 성질, 볼차노-바이어슈트라스 정리, 중간값 정리 등은
          모두 완비성 공리에 기반한다.
        </p>
      </Remark>
    </>
  );
}
