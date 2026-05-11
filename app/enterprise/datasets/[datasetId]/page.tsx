import { notFound } from "next/navigation";
import { AppShell, Section, StatusBadge } from "@/components/shell";
import { enterpriseDatasets } from "@/lib/mock-data";

export default async function EnterpriseDatasetDetailPage({ params }: { params: Promise<{ datasetId: string }> }) {
  const { datasetId } = await params;
  const dataset = enterpriseDatasets.find((item) => item.id === datasetId);

  if (!dataset) {
    notFound();
  }

  return (
    <AppShell title={dataset.name} subtitle="Enterprise portal">
      <Section eyebrow="Dataset detail" title="Controlled licence package" description="This page is designed to become the future enterprise data room for approved buyers.">
        <div className="twoColumn">
          <div className="card">
            <h3>Dataset summary</h3>
            <div className="taskDetails">
              <div className="detailRow"><span>Language</span><strong>{dataset.language}</strong></div>
              <div className="detailRow"><span>Total hours</span><strong>{dataset.hours}</strong></div>
              <div className="detailRow"><span>Speakers</span><strong>{dataset.speakers}</strong></div>
              <div className="detailRow"><span>Status</span><StatusBadge status={dataset.status} /></div>
            </div>
          </div>
          <div className="card">
            <h3>Data room contents</h3>
            <ul className="documentList">
              <li>Dataset card</li>
              <li>Data dictionary</li>
              <li>Quality report</li>
              <li>Consent summary</li>
              <li>Collection methodology</li>
              <li>Licence terms</li>
            </ul>
            <div className="buttonRow">
              <button className="primaryButton darkButton">Request sample pack</button>
              <button className="secondaryButton lightButton">Request licence review</button>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
