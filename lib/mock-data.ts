export const contributorSummary = {
  name: "Contributor 004512",
  consentStatus: "Active",
  profileCompleteness: 86,
  approvedClips: 42,
  pendingReview: 6,
  estimatedRewards: "HKD 336.00",
  qualityScore: 92,
};

export const recordingTasks = [
  {
    id: "task_free_cantonese_001",
    title: "Daily commute free speech",
    type: "Free speech",
    language: "Cantonese",
    reward: "HKD 8.00",
    duration: "30–60 sec",
    difficulty: "Easy",
  },
  {
    id: "task_scripted_cantonese_002",
    title: "Customer service sentence pack",
    type: "Scripted speech",
    language: "Cantonese",
    reward: "HKD 12.00",
    duration: "3 min",
    difficulty: "Medium",
  },
  {
    id: "task_english_accent_003",
    title: "Accent English call-centre phrases",
    type: "Scripted speech",
    language: "English",
    reward: "HKD 15.00",
    duration: "4 min",
    difficulty: "Medium",
  },
];

export const submissions = [
  {
    id: "clip_10021",
    task: "Daily commute free speech",
    language: "Cantonese",
    duration: "00:42",
    status: "Approved",
    reward: "HKD 8.00",
  },
  {
    id: "clip_10022",
    task: "Customer service sentence pack",
    language: "Cantonese",
    duration: "03:11",
    status: "Pending review",
    reward: "Pending",
  },
  {
    id: "clip_10023",
    task: "Accent English call-centre phrases",
    language: "English",
    duration: "04:02",
    status: "Needs correction",
    reward: "Pending",
  },
];

export const reviewQueue = [
  {
    id: "clip_10022",
    language: "Cantonese",
    task: "Customer service sentence pack",
    quality: 94,
    flag: "None",
  },
  {
    id: "clip_10031",
    language: "Indonesian",
    task: "Free speech prompt",
    quality: 88,
    flag: "Sensitive data check",
  },
  {
    id: "clip_10044",
    language: "English",
    task: "Accent phrases",
    quality: 91,
    flag: "Transcript correction",
  },
];

export const adminMetrics = [
  { label: "Total contributors", value: "4,860" },
  { label: "Uploaded hours", value: "1,742" },
  { label: "Approved hours", value: "1,248" },
  { label: "Pending review hours", value: "214" },
  { label: "Consent coverage", value: "98.4%" },
  { label: "Dataset candidates", value: "72,410 clips" },
];

export const enterpriseDatasets = [
  {
    id: "ds_hk_canto_001",
    name: "HK Cantonese Customer Service Pack",
    language: "Cantonese",
    hours: "180 hrs",
    speakers: "420",
    status: "Release Candidate",
  },
  {
    id: "ds_sea_eng_002",
    name: "Southeast Asian Accent English Pack",
    language: "English",
    hours: "95 hrs",
    speakers: "260",
    status: "Reviewing",
  },
  {
    id: "ds_idn_003",
    name: "Indonesian Domestic Helper Speech Pack",
    language: "Indonesian",
    hours: "70 hrs",
    speakers: "190",
    status: "Dataset Candidate",
  },
];

export const consentScopes = [
  "Internal processing",
  "Transcription",
  "Annotation",
  "AI training",
  "Commercial licensing",
  "International clients",
];
