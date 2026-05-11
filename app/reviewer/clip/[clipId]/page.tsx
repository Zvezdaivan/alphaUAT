import { notFound } from "next/navigation";
import { AppShell, Section } from "@/components/shell";
import { reviewQueue } from "@/lib/mock-data";

export default async function ReviewerClipPage({ params }: { params: Promise<{ clipId: string }> }) {
  const { clipId } = await params;
  const clip = reviewQueue.find((item) => item.id === clipId);

  if (!clip) {
    notFound();
  }

  return (
    <AppShell title={`Review ${clip.id}`} subtitle="Reviewer workbench">
      <Section eyebrow="Clip review" title="Audio, transcript and decision panel" description="This screen is the future home of waveform playback, transcript editing and sensitive-data flagging.">
        <div className="twoColumn">
          <div className="card">
            <h3>Audio panel</h3>
            <div className="audioPlaceholder">Waveform / audio player placeholder</div>
            <div className="taskDetails">
              <div className="detailRow"><span>Language</span><strong>{clip.language}</strong></div>
              <div className="detailRow"><span>Task</span><strong>{clip.task}</strong></div>
              <div className="detailRow"><span>Quality</span><strong>{clip.quality}</strong></div>
              <div className="detailRow"><span>Flag</span><strong>{clip.flag}</strong></div>
            </div>
          </div>
          <div className="card">
            <h3>Transcript editor</h3>
            <textarea className="textarea" defaultValue="Auto-generated transcript will appear here for reviewer correction." />
            <div className="buttonRow">
              <button className="primaryButton darkButton">Approve</button>
              <button className="secondaryButton lightButton">Needs correction</button>
              <button className="secondaryButton lightButton">Reject</button>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
