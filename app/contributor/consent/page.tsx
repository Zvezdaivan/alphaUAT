"use client";

import { useMemo, useState } from "react";
import { AppShell, Section } from "@/components/shell";
import { consentScopes } from "@/lib/mock-data";

export default function ContributorConsentPage() {
  const [checkedScopes, setCheckedScopes] = useState<string[]>([
    "Internal processing",
    "Transcription",
    "AI training",
    "Commercial licensing",
  ]);

  const eligibility = useMemo(() => {
    return checkedScopes.includes("AI training") && checkedScopes.includes("Commercial licensing")
      ? "Commercially eligible"
      : "Restricted";
  }, [checkedScopes]);

  function toggleScope(scope: string) {
    setCheckedScopes((current) =>
      current.includes(scope) ? current.filter((item) => item !== scope) : [...current, scope],
    );
  }

  return (
    <AppShell title="Consent Centre" subtitle="Contributor portal">
      <Section eyebrow="Consent" title="Structured contributor consent" description="This page models consent as a versioned data object, not only as a legal document.">
        <div className="consentGrid">
          <div className="card">
            <h3>Contributor Consent v1.0</h3>
            <p>Your recordings may be processed, transcribed, annotated and included in AI training datasets only where your selected scopes allow it.</p>
            <div className="scopeList">
              {consentScopes.map((scope) => (
                <label key={scope} className="scopeRow">
                  <span>{scope}</span>
                  <input type="checkbox" checked={checkedScopes.includes(scope)} onChange={() => toggleScope(scope)} />
                </label>
              ))}
            </div>
          </div>
          <div className="card subtleCard">
            <h3>System record generated</h3>
            <div className="systemRecordList">
              <div className="systemRecordRow"><span>consent_id</span><strong>cns_2026_000128</strong></div>
              <div className="systemRecordRow"><span>contributor_id</span><strong>spk_hk_004512</strong></div>
              <div className="systemRecordRow"><span>consent_version</span><strong>v1.0-hk-en-tc</strong></div>
              <div className="systemRecordRow"><span>document_hash</span><strong>sha256: 84fc...91ab</strong></div>
              <div className="systemRecordRow"><span>eligibility</span><strong>{eligibility}</strong></div>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
