import { notFound } from "next/navigation";
import { Mic } from "lucide-react";
import { AppShell, Section } from "@/components/shell";
import { recordingTasks } from "@/lib/mock-data";

export default async function RecordingTaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const task = recordingTasks.find((item) => item.id === taskId);

  if (!task) {
    notFound();
  }

  return (
    <AppShell title="Recording Studio" subtitle="Contributor portal">
      <Section eyebrow="Task session" title={task.title} description="This screen is ready to receive the real MediaRecorder hook and signed upload flow in the next implementation stage.">
        <div className="card recordingPanel">
          <div className="recorderBox">
            <Mic size={48} />
            <h3>Read this prompt naturally</h3>
            <p>「請用自然語氣描述你今日返工或者返學途中見到嘅一件事。」</p>
            <div className="buttonRow" style={{ justifyContent: "center" }}>
              <button className="primaryButton darkButton">Start Recording</button>
              <button className="secondaryButton lightButton">Upload Sample</button>
            </div>
          </div>
          <div className="taskDetails">
            <div className="detailRow"><span>Task type</span><strong>{task.type}</strong></div>
            <div className="detailRow"><span>Target language</span><strong>{task.language}</strong></div>
            <div className="detailRow"><span>Duration</span><strong>{task.duration}</strong></div>
            <div className="detailRow"><span>Reward</span><strong>{task.reward} after approval</strong></div>
            <div className="detailRow"><span>Status</span><strong>Ready to record</strong></div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
