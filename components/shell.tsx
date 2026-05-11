import Link from "next/link";
import { ReactNode } from "react";

const primaryNav = [
  { href: "/", label: "Overview" },
  { href: "/contributor/dashboard", label: "Contributor" },
  { href: "/reviewer/dashboard", label: "Reviewer" },
  { href: "/admin/dashboard", label: "Admin" },
  { href: "/enterprise/datasets", label: "Enterprise" },
];

export function AppShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <Link href="/" className="brand">
            <div className="brandMark">S</div>
            <div>
              <div className="brandTitle">SpeechInfra HK</div>
              <div className="brandSubtitle">AI Speech Data Platform</div>
            </div>
          </Link>
          <nav className="nav">
            {primaryNav.map((item) => (
              <Link key={item.href} className="navLink" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container">
        {title ? (
          <section className="pageHeader">
            <small>{subtitle}</small>
            <h1>{title}</h1>
          </section>
        ) : null}
        {children}
      </main>
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <small>{eyebrow}</small>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const tone = normalized.includes("approved") || normalized.includes("active")
    ? "success"
    : normalized.includes("pending") || normalized.includes("review") || normalized.includes("candidate")
      ? "warning"
      : "";

  return <span className={`badge ${tone}`}>{status}</span>;
}
