import Link from "next/link";
import { ClipboardCheck, FileWarning, Gauge, Languages } from "lucide-react";
import { AppShell, Section, StatusBadge } from "@/components/shell";
import { reviewQueue } from "@/lib/mock-data";

export default function ReviewerDashboardPage() {
  return (
    <AppShell title="Reviewer Dashboard" subtitle="Reviewer workbench">
      <section className="metricsGrid">
        <div className="card metricCard"><div className="metricIcon"><ClipboardCheck size={20} /></div><div><div className="metricValue">128</div><div className="metricLabel">Pending clips</div></div></div>
        <div className="card metricCard"><div className="metricIcon"><Gauge size={20} /></div><div><div className="metricValue">94%</div><div className="metricLabel">Approval rate</div></div></div>
        <div className="card metricCard"><div className="metricIcon"><FileWarning size={20} /></div><div><div className="metricValue">7</div><div className="metricLabel">Flagged clips</div></div></div>
        <div className="card metricCard"><div className="metricIcon"><Languages size={20} /></div><div><div className="metricValue">4</div><div className="metricLabel">Assigned languages</div></div></div>
      </section>

      <Section eyebrow="Review queue" title="Clips awaiting human review" description="Reviewers should focus on transcript accuracy, sensitive-data flags and final commercial suitability.">
        <div className="tableWrap">
          <table>
            <thead>
              <tr><th>Clip ID</th><th>Language</th><th>Task</th><th>Quality</th><th>Flag</th><th>Action</th></tr>
            </thead>
            <tbody>
              {reviewQueue.map((clip) => (
                <tr key={clip.id}>
                  <td>{clip.id}</td>
                  <td>{clip.language}</td>
                  <td>{clip.task}</td>
                  <td>{clip.quality}</td>
                  <td><StatusBadge status={clip.flag} /></td>
                  <td><Link href={`/reviewer/clip/${clip.id}`} className="tableLink">Open review</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </AppShell>
  );
}
