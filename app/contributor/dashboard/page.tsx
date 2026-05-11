import Link from "next/link";
import { BarChart3, FileCheck, Mic, ShieldCheck } from "lucide-react";
import { AppShell, Section, StatusBadge } from "@/components/shell";
import { contributorSummary, submissions } from "@/lib/mock-data";

export default function ContributorDashboardPage() {
  return (
    <AppShell title="Contributor Dashboard" subtitle="Contributor portal">
      <section className="metricsGrid">
        <div className="card metricCard">
          <div className="metricIcon"><ShieldCheck size={20} /></div>
          <div>
            <div className="metricValue">{contributorSummary.consentStatus}</div>
            <div className="metricLabel">Consent status</div>
          </div>
        </div>
        <div className="card metricCard">
          <div className="metricIcon"><FileCheck size={20} /></div>
          <div>
            <div className="metricValue">{contributorSummary.approvedClips}</div>
            <div className="metricLabel">Approved clips</div>
          </div>
        </div>
        <div className="card metricCard">
          <div className="metricIcon"><BarChart3 size={20} /></div>
          <div>
            <div className="metricValue">{contributorSummary.qualityScore}</div>
            <div className="metricLabel">Quality score</div>
          </div>
        </div>
        <div className="card metricCard">
          <div className="metricIcon"><Mic size={20} /></div>
          <div>
            <div className="metricValue">{contributorSummary.estimatedRewards}</div>
            <div className="metricLabel">Estimated rewards</div>
          </div>
        </div>
      </section>

      <Section eyebrow="Next actions" title={`Welcome, ${contributorSummary.name}`} description="Your dashboard should always show the next highest-value action required to keep data commercially eligible.">
        <div className="threeColumn">
          <Link href="/contributor/consent" className="card actionCard">
            <ShieldCheck size={22} />
            <h3>Review consent</h3>
            <p>Confirm active AI training and commercial licensing scopes.</p>
          </Link>
          <Link href="/contributor/recording/tasks" className="card actionCard">
            <Mic size={22} />
            <h3>Start recording</h3>
            <p>Choose available speech tasks and submit new clips.</p>
          </Link>
          <Link href="/contributor/submissions" className="card actionCard">
            <FileCheck size={22} />
            <h3>View submissions</h3>
            <p>Track clip status, review result and reward outcome.</p>
          </Link>
        </div>
      </Section>

      <Section eyebrow="Recent submissions" title="Latest activity">
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Clip ID</th>
                <th>Task</th>
                <th>Language</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Reward</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td>{submission.id}</td>
                  <td>{submission.task}</td>
                  <td>{submission.language}</td>
                  <td>{submission.duration}</td>
                  <td><StatusBadge status={submission.status} /></td>
                  <td>{submission.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </AppShell>
  );
}
