import Link from "next/link";
import { AppShell, Section, StatusBadge } from "@/components/shell";
import { enterpriseDatasets } from "@/lib/mock-data";

export default function EnterpriseDatasetsPage() {
  return (
    <AppShell title="Enterprise Dataset Catalogue" subtitle="Enterprise portal">
      <Section eyebrow="Controlled data room" title="Available dataset products" description="Enterprise customers should browse approved dataset products and request access under licence controls.">
        <div className="threeColumn">
          {enterpriseDatasets.map((dataset) => (
            <Link key={dataset.id} href={`/enterprise/datasets/${dataset.id}`} className="card actionCard">
              <div className="cardNumber">{dataset.language}</div>
              <h3>{dataset.name}</h3>
              <p>{dataset.hours} · {dataset.speakers} speakers</p>
              <div className="taskMeta">
                <StatusBadge status={dataset.status} />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
