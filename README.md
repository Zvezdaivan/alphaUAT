# SpeechInfra HK Frontend Prototype

A first-pass Next.js frontend prototype for a Hong Kong-based AI speech data infrastructure platform.

## What is included

- Enterprise-style landing page
- Contributor onboarding flow
- Consent Centre interaction
- Recording Studio mockup
- Dataset processing pipeline
- Enterprise dataset catalogue
- Hong Kong deployment architecture section

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current status

This is a frontend-only prototype. It intentionally uses mock data and no backend integration yet.

## Recommended next steps

1. Split the single page into reusable components
2. Add App Router routes for contributor, reviewer, admin and enterprise portals
3. Implement real authentication
4. Implement MediaRecorder-based audio recording
5. Implement signed URL upload flow
6. Connect consent and contributor APIs
7. Add reviewer dashboard and dataset management pages

## Product principle

Do not build this as an “audio upload and export” site. Build it so every audio clip carries:

- consent
- provenance
- quality
- review
- eligibility
- release status
- licence status
