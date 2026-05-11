"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  Building2,
  Database,
  Download,
  FileCheck,
  KeyRound,
  Layers3,
  Lock,
  Mic,
  Search,
  ShieldCheck,
  UploadCloud,
  Users,
  Workflow,
} from "lucide-react";

const onboardingSteps = [
  {
    number: "01",
    title: "Register",
    description: "Create account and select a language community.",
  },
  {
    number: "02",
    title: "Consent",
    description: "Accept AI training and commercial licensing scopes.",
  },
  {
    number: "03",
    title: "Mic Test",
    description: "Check permission, volume, noise and browser readiness.",
  },
  {
    number: "04",
    title: "Record",
    description: "Complete scripted, free speech or dialogue tasks.",
  },
];

const consentScopes = [
  "Internal processing",
  "Transcription",
  "Annotation",
  "AI training",
  "Commercial licensing",
  "International clients",
];

const pipelineSteps = [
  {
    title: "Upload",
    description: "Browser recording or file upload",
    icon: UploadCloud,
  },
  {
    title: "Validate",
    description: "Format, duration, file hash, abuse scan",
    icon: ShieldCheck,
  },
  {
    title: "VAD & QC",
    description: "Speech detection, noise, clipping, SNR",
    icon: BarChart3,
  },
  {
    title: "ASR",
    description: "Automatic transcription and confidence score",
    icon: Mic,
  },
  {
    title: "Review",
    description: "Human transcript and sensitive-data review",
    icon: FileCheck,
  },
  {
    title: "Eligibility",
    description: "Consent + quality + review + withdrawal rules",
    icon: KeyRound,
  },
  {
    title: "Dataset",
    description: "Metadata, data card, licence package",
    icon: Database,
  },
];

const datasets = [
  {
    name: "HK Cantonese Customer Service Pack",
    hours: "180 hrs",
    speakers: "420",
    status: "Release Candidate",
    risk: "Low",
  },
  {
    name: "Southeast Asian Accent English Pack",
    hours: "95 hrs",
    speakers: "260",
    status: "Reviewing",
    risk: "Medium",
  },
  {
    name: "Indonesian Domestic Helper Speech Pack",
    hours: "70 hrs",
    speakers: "190",
    status: "Dataset Candidate",
    risk: "Low",
  },
];

const navItems = [
  "Overview",
  "Contributor",
  "Consent",
  "Recording",
  "Pipeline",
  "Enterprise",
  "Infrastructure",
];

function MetricCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Mic;
  value: string;
  label: string;
}) {
  return (
    <div className="card metricCard">
      <div className="metricIcon">
        <Icon size={20} />
      </div>
      <div>
        <div className="metricValue">{value}</div>
        <div className="metricLabel">{label}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [checkedScopes, setCheckedScopes] = useState<string[]>([
    "AI training",
    "Commercial licensing",
  ]);

  const commercialEligibility = useMemo(() => {
    const eligible =
      checkedScopes.includes("AI training") &&
      checkedScopes.includes("Commercial licensing");
    return eligible ? "Potentially eligible" : "Restricted";
  }, [checkedScopes]);

  function toggleScope(scope: string) {
    setCheckedScopes((current) =>
      current.includes(scope)
        ? current.filter((item) => item !== scope)
        : [...current, scope],
    );
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandMark">S</div>
            <div>
              <div className="brandTitle">SpeechInfra HK</div>
              <div className="brandSubtitle">AI Speech Data Platform</div>
            </div>
          </div>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item} className="navLink" href={`#${item}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" id="Overview">
          <div className="heroGrid">
            <div>
              <span className="eyebrow">
                Hong Kong-based AI speech data infrastructure
              </span>
              <h1>
                Consent-backed speech datasets for underrepresented AI
                languages.
              </h1>
              <p>
                A frontend prototype for collecting, governing, processing,
                reviewing, packaging and licensing multilingual speech data for
                AI training.
              </p>
              <div className="buttonRow">
                <button className="primaryButton">Start contributor flow</button>
                <button className="secondaryButton">View enterprise portal</button>
              </div>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelTitle">Live governance snapshot</div>
              <div className="metricList">
                <div className="metricPanel">
                  <small>Consent coverage</small>
                  <strong>98.4%</strong>
                </div>
                <div className="metricPanel">
                  <small>Commercial eligible clips</small>
                  <strong>72,410</strong>
                </div>
                <div className="metricPanel">
                  <small>Human reviewed hours</small>
                  <strong>1,248</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="metricsGrid">
          <MetricCard icon={BarChart3} value="1,248" label="Accepted audio hours" />
          <MetricCard icon={Users} value="4,860" label="Active contributors" />
          <MetricCard icon={ShieldCheck} value="98.4%" label="Consent-backed clips" />
          <MetricCard icon={Database} value="12" label="Enterprise datasets" />
        </section>

        <section className="section" id="Contributor">
          <div className="sectionHeader">
            <small>Contributor portal</small>
            <h2>Contributor onboarding and speech submission flow</h2>
            <p>
              Recording should not open immediately. Contributors should first
              be qualified, consented, microphone-tested and then assigned
              structured tasks.
            </p>
          </div>
          <div className="cardsGrid">
            {onboardingSteps.map((step) => (
              <article key={step.number} className="card">
                <div className="cardNumber">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="Consent">
          <div className="sectionHeader">
            <small>Consent as infrastructure</small>
            <h2>Consent Centre template</h2>
            <p>
              Each clip should be linked to a consent version, consent scope,
              timestamp, legal document hash and withdrawal status.
            </p>
          </div>
          <div className="consentGrid">
            <div className="card">
              <h3>Contributor Consent v1.0</h3>
              <p>
                Your recordings may be processed, transcribed, quality-checked
                and included in AI training datasets only where your selected
                scopes allow it.
              </p>
              <div className="scopeList">
                {consentScopes.map((scope) => (
                  <label key={scope} className="scopeRow">
                    <span>{scope}</span>
                    <input
                      type="checkbox"
                      checked={checkedScopes.includes(scope)}
                      onChange={() => toggleScope(scope)}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="card" style={{ background: "#f1f5f9" }}>
              <h3>System record generated</h3>
              <div className="systemRecordList">
                <div className="systemRecordRow">
                  <span>consent_id</span>
                  <strong>cns_2026_000128</strong>
                </div>
                <div className="systemRecordRow">
                  <span>contributor_id</span>
                  <strong>spk_hk_004512</strong>
                </div>
                <div className="systemRecordRow">
                  <span>consent_version</span>
                  <strong>v1.0-hk-en-tc</strong>
                </div>
                <div className="systemRecordRow">
                  <span>document_hash</span>
                  <strong>sha256: 84fc...91ab</strong>
                </div>
                <div className="systemRecordRow">
                  <span>commercial_eligibility</span>
                  <strong>{commercialEligibility}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="Recording">
          <div className="sectionHeader">
            <small>Recording studio</small>
            <h2>Browser-based recording task template</h2>
            <p>
              The first version should simulate the task flow before backend
              upload and real MediaRecorder integration are connected.
            </p>
          </div>
          <div className="card recordingPanel">
            <div className="recorderBox">
              <Mic size={48} />
              <h3>Read this sentence</h3>
              <p>「請用自然語氣描述你今日返工或者返學途中見到嘅一件事。」</p>
              <div className="buttonRow" style={{ justifyContent: "center" }}>
                <button className="primaryButton" style={{ background: "#0f172a", color: "white" }}>
                  Start Recording
                </button>
                <button className="secondaryButton" style={{ background: "white", color: "#0f172a", border: "1px solid #e2e8f0" }}>
                  Upload Sample
                </button>
              </div>
            </div>
            <div className="taskDetails">
              <div className="detailRow">
                <span>Task type</span>
                <strong>Free speech prompt</strong>
              </div>
              <div className="detailRow">
                <span>Target language</span>
                <strong>Cantonese</strong>
              </div>
              <div className="detailRow">
                <span>Minimum duration</span>
                <strong>30 seconds</strong>
              </div>
              <div className="detailRow">
                <span>Reward</span>
                <strong>HKD 8.00 after approval</strong>
              </div>
              <div className="detailRow">
                <span>Status</span>
                <strong>Ready to record</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="Pipeline">
          <div className="sectionHeader">
            <small>Dataset pipeline</small>
            <h2>From raw audio to commercial dataset candidate</h2>
            <p>
              A clip becomes commercially usable only after consent, QC,
              transcription, human review and eligibility checks.
            </p>
          </div>
          <div className="pipeline">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="card pipelineStep">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <h3>
                    <Icon size={18} style={{ marginRight: 8, verticalAlign: "middle" }} />
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="Enterprise">
          <div className="sectionHeader">
            <small>Enterprise portal</small>
            <h2>Dataset catalogue and licensing dashboard</h2>
            <p>
              The buyer side should feel like a controlled data room, not an
              open download marketplace.
            </p>
          </div>
          <div className="card">
            <div className="buttonRow" style={{ marginTop: 0, justifyContent: "space-between" }}>
              <button className="secondaryButton" style={{ background: "white", color: "#0f172a", border: "1px solid #e2e8f0" }}>
                <Search size={16} style={{ marginRight: 8, verticalAlign: "middle" }} />
                Search language, domain, accent...
              </button>
              <button className="primaryButton" style={{ background: "#0f172a", color: "white" }}>
                <Download size={16} style={{ marginRight: 8, verticalAlign: "middle" }} />
                Request sample pack
              </button>
            </div>
            <div className="tableWrap" style={{ marginTop: 18 }}>
              <table>
                <thead>
                  <tr>
                    <th>Dataset</th>
                    <th>Hours</th>
                    <th>Speakers</th>
                    <th>Status</th>
                    <th>Buyer Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {datasets.map((dataset) => (
                    <tr key={dataset.name}>
                      <td>
                        <strong>{dataset.name}</strong>
                      </td>
                      <td>{dataset.hours}</td>
                      <td>{dataset.speakers}</td>
                      <td>
                        <span className="badge">{dataset.status}</span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            dataset.risk === "Low" ? "success" : "warning"
                          }`}
                        >
                          {dataset.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="Infrastructure">
          <div className="sectionHeader">
            <small>Infrastructure</small>
            <h2>Hong Kong deployment architecture</h2>
            <p>
              Public frontend, protected API, private data layer, isolated AI
              processing and controlled enterprise delivery.
            </p>
          </div>
          <div className="card architecture">
            <div className="architectureCanvas">
              <div className="architectureRow">
                <div className="architectureNode">Contributors</div>
                <div className="architectureNode">Frontend Web App</div>
                <div className="architectureNode">API Gateway</div>
                <div className="architectureNode">App Services</div>
                <div className="architectureNode">Private Data Layer</div>
              </div>
              <div className="architectureRow">
                <div className="architectureNode muted">Consent</div>
                <div className="architectureNode muted">Recording</div>
                <div className="architectureNode muted">AI Processing</div>
                <div className="architectureNode muted">Human Review</div>
                <div className="architectureNode muted">Dataset Factory</div>
              </div>
              <div className="architectureRow">
                <div className="architectureNode">Audit Logs</div>
                <div className="architectureNode">Security Controls</div>
                <div className="architectureNode">Enterprise Portal</div>
                <div className="architectureNode">Licensing</div>
                <div className="architectureNode">Secure Delivery</div>
              </div>
            </div>
          </div>
          <div className="threeColumn" style={{ marginTop: 16 }}>
            <MetricCard icon={Lock} value="5" label="Security zones" />
            <MetricCard icon={Layers3} value="11" label="Core product modules" />
            <MetricCard icon={Workflow} value="7" label="Governance gates" />
          </div>
        </section>

        <section className="footerCallout">
          <div>
            <h2>Next engineering milestone</h2>
            <p>
              Convert this UI prototype into a real MVP by wiring
              authentication, consent versioning, MediaRecorder upload,
              PostgreSQL schema, object storage and reviewer workflow.
            </p>
          </div>
          <div className="calloutNote">
            <strong>Build rule:</strong> Do not build “audio upload and export”.
            Build “consent + provenance + quality + review + eligibility +
            licence status” for every clip.
          </div>
        </section>
      </main>
    </div>
  );
}
