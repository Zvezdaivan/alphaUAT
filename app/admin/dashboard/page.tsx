import { Database, FileCheck, ShieldCheck, Users } from "lucide-react";
import { AppShell, Section } from "@/components/shell";
import { adminMetrics, enterpriseDatasets } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <AppShell title="Admin Dashboard" subtitle="Data operations">
      <section className="metricsGrid">
        {adminMetrics.slice(0, 4).map((metric, index) => {
          const icons = [Users, Database, FileCheck, ShieldCheck];
          const Icon = icons[index];
          return (
            <div key={metric.label} className="card metricCard">
              <div className="metricIcon"><Icon size={20} /></div>
              <div>
                <div className="metricValue">{metric.value}</div>
                <div className="metricLabel">{metric.label}</div>
              </div>
            </div>
          );
        })}
      </section>

      <Section eyebrow="Operational metrics" title="Platform health">
        <div className="threeColumn">
          {adminMetrics.slice(4).map((metric) => (
            <div key={metric.label} className="card">
              <div className="metricValue">{metric.value}</div>
              <div className="metricLabel">{metric.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Dataset factory" title="Active dataset releases">
        <div className="tableWrap">
          <table>
            <thead>
              <tr><th>Dataset</th><th>Language</th><th>Hours</th><th>Speakers</th><th>Status</th></tr>
            </thead>
            <tbody>
              {enterpriseDatasets.map((dataset) => (
                <tr key={dataset.id}>
                  <td>{dataset.name}</td>
                  <td>{dataset.language}</td>
                  <td>{dataset.hours}</td>
                  <td>{dataset.speakers}</td>
                  <td>{dataset.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </AppShell>
  );
}
