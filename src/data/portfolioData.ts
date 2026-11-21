export interface HeroRole {
  id: string;
  prompt: string;
  roleIndex: string;
  roleTitle: string;
  summary: string;
  accent: string;
  keywords: string[];
}

export interface InterestItem {
  id: string;
  label: string;
  detail: string;
  relatedSection: 'skills' | 'projects' | 'experience';
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  badgeText: string;
  badgeVariant: 'active' | 'score';
  accentColor: string;
}

export interface HardSkill {
  name: string;
  detail: string;
  tags: string[];
}

export interface ToolkitItem {
  name: string;
  subtitle: string;
  dotColor: string;
}

export interface SoftSkill {
  title: string;
  description: string;
}

export interface ExperienceCue {
  id: string;
  cueCode: string;
  period: string;
  rolePill: string;
  title: string;
  description: string;
  venue: string;
  highlights: string[];
  signalChain: string[];
}

export interface ProjectItem {
  id: string;
  category: 'ai' | 'av';
  badgeOverlay: string;
  title: string;
  description: string;
  stack: string[];
  actionLabel: string;
  actionHref: string;
  isExternal: boolean;
  iconType: 'layers' | 'terminal' | 'waveform';
  architectureNotes: string[];
  statusLabel: string;
}

export const HERO_ROLES: HeroRole[] = [
  {
    id: 'ai-swe',
    prompt: 'Explore AI agents & software engineering works',
    roleIndex: '01 / 03',
    roleTitle: 'S1 Teknik Informatika ITPLN',
    summary:
      'Exploring AI agents, automation workflows, and Python / web systems. Bridging deep computational logic with live creative technology.',
    accent: '#3B82F6',
    keywords: ['ai', 'agent', 'python', 'software', 'web', 'code', 'itpln'],
  },
  {
    id: 'foh-audio',
    prompt: 'Inspect FOH audio engineering & music direction setups',
    roleIndex: '02 / 03',
    roleTitle: 'FOH Audio Engineer & Music Director',
    summary:
      'Front-of-House sound engineering, live mixing, and technical direction for large-scale cultural festivals and live performances.',
    accent: '#EF4444',
    keywords: ['foh', 'audio', 'sound', 'music', 'festival', 'mixing'],
  },
  {
    id: 'live-visual',
    prompt: 'Load live visual operator & multimedia stage logs',
    roleIndex: '03 / 03',
    roleTitle: 'Live Visual & Multimedia Operator',
    summary:
      'Real-time stage visual operation, cue synchronization, and multimedia show control for concerts and institutional expos.',
    accent: '#10B981',
    keywords: ['visual', 'stage', 'live', 'multimedia', 'cue', 'expo'],
  },
];

export const MARQUEE_ITEMS = [
  { label: 'INFORMATICS ENGINEERING', muted: false },
  { label: 'AI AGENTS & AUTOMATION', muted: true },
  { label: 'FOH AUDIO ENGINEER', muted: false },
  { label: 'LIVE VISUAL OPERATOR', muted: true },
  { label: 'CYBER SECURITY', muted: false },
  { label: 'EVENT TECHNICAL DIRECTOR', muted: true },
];

export const INTEREST_ITEMS: InterestItem[] = [
  {
    id: 'cyber-security',
    label: 'Cyber Security',
    detail: 'Fokus pada keamanan jaringan, analisis kerentanan dasar, dan praktik secure coding.',
    relatedSection: 'skills',
  },
  {
    id: 'software-eng',
    label: 'Software Eng',
    detail: 'Membangun alur otomasi AI berbasis Python, CLI tools, serta antarmuka web modern.',
    relatedSection: 'projects',
  },
  {
    id: 'multimedia-ops',
    label: 'Multimedia Ops',
    detail: 'Manajemen visual panggung real-time dan sinkronisasi konten multimedia untuk acara besar.',
    relatedSection: 'experience',
  },
  {
    id: 'stage-foh',
    label: 'Stage & FOH Audio',
    detail: 'Pengoperasian konsol Front-of-House, balancing akustik panggung, dan koordinasi teknis live show.',
    relatedSection: 'experience',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'Institut Teknologi PLN (ITPLN)',
    program: 'S1 Teknik Informatika',
    period: 'Sep 2026 – Sekarang',
    badgeText: 'Mahasiswa Aktif',
    badgeVariant: 'active',
    accentColor: '#3B82F6',
  },
  {
    institution: 'SMA Negeri 3 Bandung',
    program: 'Jurusan Matematika & Ilmu Alam (IPA)',
    period: 'Jun 2023 – Mei 2026',
    badgeText: 'Nilai: 86.10 / 100',
    badgeVariant: 'score',
    accentColor: '#60A5FA',
  },
];

export const HARD_SKILLS: HardSkill[] = [
  {
    name: 'Python',
    detail: 'Pengembangan skrip otomasi AI, pemrosesan data, & logika pemrograman',
    tags: ['Automation', 'AI Workflows', 'CLI'],
  },
  {
    name: 'Dasar Web Dev',
    detail: 'HTML5, CSS3, JavaScript, dan arsitektur web interaktif',
    tags: ['TypeScript', 'React', 'Responsive UI'],
  },
  {
    name: 'Event Management',
    detail: 'Perencanaan alur teknis produksi, rundown, dan koordinasi kru',
    tags: ['Showcalling', 'Rundown', 'Logistics'],
  },
  {
    name: 'FOH Engineer',
    detail: 'Front-of-House audio mixing, sound tuning, & live visual operation',
    tags: ['Digital Console', 'Gain Staging', 'Visual Sync'],
  },
];

export const CORE_TOOLKIT: ToolkitItem[] = [
  {
    name: 'Microsoft Word',
    subtitle: 'Documentation & Briefs',
    dotColor: '#2B579A',
  },
  {
    name: 'Microsoft Excel',
    subtitle: 'Data & Event Cue Sheets',
    dotColor: '#217346',
  },
  {
    name: 'Microsoft PowerPoint',
    subtitle: 'Visual Deck & Presentation',
    dotColor: '#C43E1C',
  },
  {
    name: 'Git & GitHub',
    subtitle: 'Version Control & Repositories',
    dotColor: '#F3F4F6',
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: 'Analytical Thinking',
    description: 'Memecah masalah arsitektur kode maupun troubleshooting sinyal panggung.',
  },
  {
    title: 'Problem Solving',
    description: 'Pengambilan keputusan cepat saat live show berlangsung dan error handling.',
  },
  {
    title: 'Komunikasi Teknis',
    description: 'Menjembatani bahasa kebutuhan tim kreatif, talent, dan kru teknik panggung.',
  },
  {
    title: 'Adaptabilitas Tinggi',
    description: 'Cepat menguasai AI toolkits baru dan dinamika produksi lapangan.',
  },
];

export const EXPERIENCE_CUES: ExperienceCue[] = [
  {
    id: 'cue-01',
    cueCode: 'CUE 01',
    period: '2020 – 2026',
    rolePill: 'FOH Engineer & Crew',
    title: 'Festival Budaya 2025',
    description:
      'Berperan sebagai Music Director dan Technical Director yang mengawasi tata suara FOH serta integrasi teknis pertunjukan.',
    venue: 'Bandung Cultural Stage Production',
    highlights: [
      'Mengkoordinasikan seluruh alur cue audio dan transisi segmen pertunjukan secara real-time.',
      'Menyelaraskan soundcheck multi-instrumen tradisional dan modern agar output FOH tetap jernih.',
      'Memimpin sinkronisasi antar tim panggung, lighting, dan operator multimedia.',
    ],
    signalChain: ['Stage Mic Array', 'Digital FOH Console', 'Main PA Matrix', 'Show Cue Sheet'],
  },
  {
    id: 'cue-02',
    cueCode: 'CUE 02',
    period: '2025',
    rolePill: 'Multimedia Crew',
    title: '10th Muhibah Angklung',
    description:
      'Bertanggung jawab penuh sebagai operator visual untuk sinkronisasi konten panggung dan multimedia selama pertunjukan berlangsung.',
    venue: 'Muhibah Angklung Concert Showcase',
    highlights: [
      'Menjalankan playback visual LED latar sesuai tempo dan dinamika repertoar musik.',
      'Memastikan transisi layer visual berjalan mulus tanpa jeda selama pergantian nomor pertunjukan.',
      'Melakukan pre-show media verification dan backup redundancy untuk seluruh aset video.',
    ],
    signalChain: ['Media Server Deck', 'Cue Timeline Sync', 'HDMI/SDI Routing', 'Stage LED Wall'],
  },
  {
    id: 'cue-03',
    cueCode: 'CUE 03',
    period: '2025',
    rolePill: 'FOH Engineer & Crew',
    title: 'Kuliah Expo SMAN 3 Bandung',
    description:
      'Bertanggung jawab sebagai operator visual dan dukungan teknis Front-of-House selama rangkaian expo pendidikan berlangsung.',
    venue: 'SMAN 3 Bandung Main Hall',
    highlights: [
      'Mengelola routing audio presenter, panel diskusi, dan pemutaran materi video institusi.',
      'Menangani troubleshooting cepat di lapangan untuk perangkat presentasi dan mikrofon nirkabel.',
      'Menjaga konsistensi visual layar utama sepanjang sesi acara dari pembukaan hingga penutupan.',
    ],
    signalChain: ['Wireless Vocal RF', 'FOH Mixer Bus', 'Presentation Switcher', 'Main Projector'],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'ai-agent-lab',
    category: 'ai',
    badgeOverlay: 'AI Agent Lab · 2026',
    title: 'AI Agent Workflow & Automation Lab',
    description:
      'Eksperimen perancangan alur kerja AI agents menggunakan Python untuk otomasi tugas riset, pengelolaan dokumen, dan asisten produktivitas cerdas.',
    stack: ['Python', 'AI Agents', 'Automation'],
    actionLabel: 'Inspect Repo ↗',
    actionHref: 'https://github.com/kevinvinvin14',
    isExternal: true,
    iconType: 'layers',
    statusLabel: 'Active Research & Prototyping',
    architectureNotes: [
      'Modular Python task orchestration pipelines for repeatable research and document summarization.',
      'Structured prompt routing and deterministic output validation steps for reliable automation.',
      'Designed to minimize manual context-switching between local files and structured briefs.',
    ],
  },
  {
    id: 'python-cli-utilities',
    category: 'ai',
    badgeOverlay: 'Utilities · 2026',
    title: 'Python Scripting & CLI Utilities',
    description:
      'Kumpulan implementasi algoritma komputasi, otomasi skrip harian, dan utilitas berbasis command line interface menggunakan Python modern.',
    stack: ['Python', 'Algorithms', 'CLI / Terminal'],
    actionLabel: 'Inspect Repo ↗',
    actionHref: 'https://github.com/kevinvinvin14',
    isExternal: true,
    iconType: 'terminal',
    statusLabel: 'Open Source Toolkit',
    architectureNotes: [
      'Clean command-line interfaces for batch file organization, text parsing, and data formatting.',
      'Focus on readable modular functions, predictable error handling, and zero-bloat execution.',
      'Version-controlled workflows maintained via Git and GitHub repositories.',
    ],
  },
  {
    id: 'live-visual-foh-system',
    category: 'av',
    badgeOverlay: 'Live Production · 2025',
    title: 'Live Visual & FOH Show Control System',
    description:
      'Manajemen tata cue visual, sinkronisasi timeline multimedia, dan routing audio FOH untuk pertunjukan musik serta festival budaya berskala besar.',
    stack: ['FOH Audio', 'Visual Cueing', 'Technical Direction'],
    actionLabel: 'Inspect Cue Logs ↓',
    actionHref: '#experience',
    isExternal: false,
    iconType: 'waveform',
    statusLabel: 'Field-Tested Show Architecture',
    architectureNotes: [
      'Unified Excel cue-sheet master linking audio channels, stage cues, and visual playback triggers.',
      'Redundant media playback strategy to prevent dropped frames during high-stakes live festivals.',
      'Tested across multi-act cultural stages including Festival Budaya 2025 and 10th Muhibah Angklung.',
    ],
  },
];
