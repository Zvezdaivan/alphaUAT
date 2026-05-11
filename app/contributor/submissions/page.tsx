import { AppShell, Section, StatusBadge } from "@/components/shell";
import { submissions } from "@/lib/mock-data";

export default function ContributorSubmissionsPage() {
  return (
    <AppShell title="Submissions" subtitle="Contributor portal">
      <Section eyebrow="Submission history" title="Track clip status and rewards">
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
