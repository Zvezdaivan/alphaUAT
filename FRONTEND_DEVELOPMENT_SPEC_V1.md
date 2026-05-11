# Frontend Development Specification v1.0

## Hong Kong AI Speech Data Infrastructure Platform

Prepared for: Product, Engineering, UI/UX, Compliance and Business Teams  
Product Stage: MVP → Enterprise-Ready Foundation  
Jurisdiction Assumption: Hong Kong SAR  
Frontend Stack Assumption: Next.js / React / TypeScript  
Version: 1.0  
Date: 2026

---

# 1. Purpose of This Specification

This document defines the frontend development specification for the Hong Kong-based AI Speech Data Infrastructure Platform.

The objective is to translate the business architecture into a practical frontend product that can be built by engineers and reviewed by product, compliance, and commercial stakeholders.

The platform is not merely a recording website. The frontend must support a full data supply chain:

1. Contributor acquisition
2. Contributor registration
3. Consent capture
4. Speech recording
5. Audio upload
6. Upload status tracking
7. Contributor reward tracking
8. Admin review workflow
9. Dataset management interface
10. Enterprise client data room
11. Compliance and audit visibility

The frontend must be designed around one core principle:

**Every audio clip must have consent, provenance, quality, review, eligibility, release, and licence status.**

---

# 2. Product Scope

## 2.1 MVP Frontend Scope

The MVP frontend should include:

- Public landing page
- Contributor registration and login
- Contributor profile setup
- Consent Centre
- Recording task dashboard
- Browser recording interface
- Audio upload interface
- Contributor submission history
- Basic reward / payout status page
- Admin dashboard
- Reviewer workbench
- Dataset candidate view
- Enterprise sample request page
- Basic enterprise data room page

---

## 2.2 Out of Scope for MVP

The following should be excluded from MVP unless specifically required:

- Fully automated marketplace checkout
- Real-time audio streaming
- Mobile native app
- Advanced waveform editing
- Full self-serve enterprise payment
- Complex multilingual CMS
- Advanced analytics dashboard
- Public dataset marketplace
- API key management portal
- Automated legal contract generation

These can be added in Phase 2 or Phase 3.

---

# 3. Recommended Frontend Technology Stack

## 3.1 Core Framework

Recommended:

- Next.js
- React
- TypeScript

Reason:

- Strong routing model
- Good SEO for public pages
- Server-side rendering where needed
- Easy API integration
- Good enterprise maintainability

---

## 3.2 Styling

Recommended:

- TailwindCSS
- ShadCN UI
- Lucide React icons
- Framer Motion for limited animations

Design principles:

- Professional SaaS style
- Enterprise trust over consumer gimmick
- Clear compliance language
- Clean dashboard UI
- Mobile-friendly contributor flow
- Desktop-optimised admin and enterprise portals

---

## 3.3 Suggested Libraries

| Purpose         | Recommended Library                            |
| --------------- | ---------------------------------------------- |
| Forms           | React Hook Form                                |
| Validation      | Zod                                            |
| API fetching    | TanStack Query                                 |
| Global state    | Zustand or React Context                       |
| Tables          | TanStack Table                                 |
| Charts          | Recharts                                       |
| Audio recording | MediaRecorder API wrapper                      |
| File upload     | Uppy or custom signed URL upload               |
| Authentication  | Auth0 / Supabase Auth / custom JWT integration |
| i18n            | next-intl / react-i18next                      |
| Date handling   | date-fns                                       |

---

# 4. User Roles

The frontend must support multiple user types.

## 4.1 Public Visitor

Can access:

- Landing page
- About page
- Contributor information
- Enterprise information
- Privacy policy
- Terms
- Contact / enquiry form

Cannot access:

- Recording tools
- Dataset portal
- Admin system

---

## 4.2 Contributor

Can access:

- Contributor dashboard
- Profile setup
- Consent Centre
- Recording tasks
- Upload history
- Review status
- Reward status
- Withdrawal request page
- Privacy Centre

---

## 4.3 Reviewer

Can access:

- Reviewer workbench
- Pending audio clips
- Transcript correction interface
- Sensitive-data flagging
- Audio approval / rejection workflow

Cannot access:

- Enterprise contracts
- Payment settings
- System admin settings

---

## 4.4 Data Operations Manager

Can access:

- Task management
- Contributor quality dashboard
- Dataset candidate pool
- Review performance
- Dataset preparation tools

---

## 4.5 Compliance Manager

Can access:

- Consent records
- Withdrawal requests
- Audit logs
- Buyer due diligence records
- Dataset release eligibility
- Policy version management

---

## 4.6 Enterprise Client

Can access:

- Enterprise dashboard
- Approved sample packs
- Dataset documentation
- Licence status
- Secure download links
- Support / enquiry page

---

## 4.7 System Administrator

Can access:

- User management
- Role permissions
- System settings
- Audit logs
- Security events
- Platform configuration

---

# 5. Information Architecture

## 5.1 Public Website Routes

```text
/
/about
/for-contributors
/for-enterprise
/languages
/pricing
/contact
/privacy
/terms
/cookie-policy
/ai-training-disclosure
```

## 5.2 Authentication Routes

```text
/auth/login
/auth/register
/auth/forgot-password
/auth/reset-password
/auth/verify-email
/auth/logout
```

## 5.3 Contributor Routes

```text
/contributor/dashboard
/contributor/profile
/contributor/consent
/contributor/recording/tasks
/contributor/recording/task/[taskId]
/contributor/recording/upload/[clipId]
/contributor/submissions
/contributor/rewards
/contributor/privacy-centre
/contributor/withdrawal
/contributor/settings
```

## 5.4 Reviewer Routes

```text
/reviewer/dashboard
/reviewer/queue
/reviewer/clip/[clipId]
/reviewer/transcripts
/reviewer/flags
/reviewer/performance
```

## 5.5 Admin / Data Operations Routes

```text
/admin/dashboard
/admin/contributors
/admin/contributors/[contributorId]
/admin/tasks
/admin/tasks/new
/admin/clips
/admin/clips/[clipId]
/admin/datasets
/admin/datasets/new
/admin/datasets/[datasetId]
/admin/reviewers
/admin/reports
```

## 5.6 Compliance Routes

```text
/compliance/dashboard
/compliance/consent-records
/compliance/consent-versions
/compliance/withdrawal-requests
/compliance/audit-logs
/compliance/buyer-risk-reviews
/compliance/dataset-release-approvals
/compliance/policies
```

## 5.7 Enterprise Routes

```text
/enterprise/login
/enterprise/dashboard
/enterprise/datasets
/enterprise/datasets/[datasetId]
/enterprise/sample-packs
/enterprise/data-room/[dataRoomId]
/enterprise/licences
/enterprise/downloads
/enterprise/support
```

---

# 6. Frontend Application Structure

```text
src/
  app/
    page.tsx
    about/
    for-contributors/
    for-enterprise/
    auth/
    contributor/
    reviewer/
    admin/
    compliance/
    enterprise/
  components/
    common/
    layout/
    forms/
    audio/
    consent/
    dashboard/
    dataset/
    enterprise/
    review/
    compliance/
  hooks/
    useAuth.ts
    useRecorder.ts
    useUpload.ts
    useConsent.ts
    useContributor.ts
    useTasks.ts
    useReviewQueue.ts
  lib/
    api.ts
    auth.ts
    validation.ts
    upload.ts
    audio.ts
    permissions.ts
    formatting.ts
  types/
    user.ts
    contributor.ts
    consent.ts
    task.ts
    clip.ts
    dataset.ts
    enterprise.ts
  stores/
    authStore.ts
    recorderStore.ts
    uiStore.ts
  styles/
    globals.css
```

---

# 7. Design System Requirements

## 7.1 Visual Style

The platform should look like a professional enterprise SaaS product.

Recommended style:

- White / slate base
- Rounded cards
- Clear status badges
- Minimal animations
- Strong spacing
- Professional dashboard layouts
- Clear hierarchy between public, contributor, admin, and enterprise sections

## 7.2 Core UI Components

```text
Button
Input
Textarea
Select
Checkbox
RadioGroup
Modal
Drawer
Card
StatusBadge
ProgressStepper
AlertBanner
DataTable
AudioPlayer
WaveformPreview
FileUploader
ConsentCheckboxGroup
TaskCard
ClipStatusCard
DatasetCard
MetricCard
AuditLogRow
SecureDownloadCard
```

## 7.3 Status Badge System

### Clip Statuses

```text
draft
uploaded
validating
processing
pending_review
needs_correction
approved
rejected
dataset_candidate
released
licensed
withdrawn
suppressed
```

### Consent Statuses

```text
not_started
pending_acceptance
active
partially_active
withdrawn
expired
```

### Dataset Statuses

```text
draft
internal_review
compliance_review
release_candidate
sample_pack
commercial_release
licensed
expired
archived
```

### Buyer Risk Statuses

```text
not_reviewed
low
medium
high
prohibited
approved_with_restrictions
rejected
```

---

# 8-30. Functional Modules

The remaining sections of the specification cover:

- Public website pages and CTA structure
- Contributor onboarding, dashboard, profile, consent, recording, upload, submissions, rewards, privacy and withdrawal
- Reviewer workbench, queue, clip review, and sensitive data flagging
- Admin/data operations dashboards, task/clip/dataset management
- Compliance dashboards, consent versioning, withdrawal workflow, immutable audit log UX
- Enterprise dashboard, dataset catalogue, data room, and secure signed URL download UX
- API contracts for auth, contributor, consent, recording, reviewer, admin, compliance, and enterprise surfaces
- State management guidance (Zustand + TanStack Query)
- Audio hooks (`useRecorder`, `useUpload`) and state responsibilities
- Validation, accessibility, i18n, security, analytics, and error handling requirements
- MVP acceptance criteria, Phase 2 enhancements, sprint-by-sprint build order, and final product principle

> Note: This condensed section intentionally preserves all architectural intent while reducing duplication in this repository copy. If needed, the full section-by-section draft can be expanded in a follow-up revision.

---

# Final Frontend Product Principle

The frontend should never communicate the product as a simple “record your voice and earn money” website.

It should communicate trust, structure and purpose:

- Contributors understand how their data may be used
- Enterprise buyers understand why the data is commercially safe
- Reviewers understand what makes a clip acceptable
- Compliance users can trace consent and withdrawal status
- Admin users can manage datasets as controlled commercial products

**A contributor-friendly recording platform on the surface, and a consent-governed AI dataset production system underneath.**
