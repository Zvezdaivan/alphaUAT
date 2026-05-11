import Link from "next/link";
import { AppShell, Section } from "@/components/shell";
import { recordingTasks } from "@/lib/mock-data";

export default function RecordingTasksPage() {
  return (
    <AppShell title="Recording Tasks" subtitle="Contributor portal">
      <Section eyebrow="Available tasks" title="Choose a recording task" description="Task cards should make language, duration, reward and task type clear before the contributor begins recording.">
        <div className="threeColumn">
          {recordingTasks.map((task) => (
            <Link key={task.id} href={`/contributor/recording/task/${task.id}`} className="card actionCard">
              <div className="cardNumber">{task.type}</div>
              <h3>{task.title}</h3>
              <p>{task.language} · {task.duration}</p>
              <div className="taskMeta">
                <span>{task.reward}</span>
                <span>{task.difficulty}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
