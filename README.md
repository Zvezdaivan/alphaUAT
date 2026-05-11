# SpeechInfra HK Frontend MVP

A multi-page Next.js frontend MVP for a Hong Kong-based AI speech data infrastructure platform.

## What is included

### Public prototype

- Enterprise-style landing page
- Contributor onboarding explanation
- Consent Centre preview
- Recording Studio preview
- Dataset processing pipeline
- Enterprise dataset catalogue preview
- Hong Kong deployment architecture section

### App routes now included

```text
/
/contributor/dashboard
/contributor/consent
/contributor/recording/tasks
/contributor/recording/task/[taskId]
/contributor/submissions
/reviewer/dashboard
/reviewer/clip/[clipId]
/admin/dashboard
/enterprise/datasets
/enterprise/datasets/[datasetId]
```

### Role flows now represented

- Contributor dashboard and task flow
- Structured consent flow
- Reviewer queue and clip review page
- Admin operations dashboard
- Enterprise dataset catalogue and data-room style detail page

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current status

This is still a frontend-only MVP using mock data. It is now structured for backend integration rather than remaining a single landing-page prototype.

## Recommended next implementation steps

1. Add route guards and real authentication
2. Implement MediaRecorder-based audio recording
3. Implement signed URL upload flow
4. Connect contributor, consent and task APIs
5. Add reviewer decision mutations
6. Add admin task creation and dataset builder pages
7. Add enterprise data room access control
8. Add compliance routes and audit log screens

## Product principle

Do not build this as an “audio upload and export” site. Build it so every audio clip carries:

- consent
- provenance
- quality
- review
- eligibility
- release status
- licence status
