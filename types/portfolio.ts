// Tipe data seluruh isi portofolio. Isi datanya ada di data/portfolio.ts.

export type Task = {
  no: number; // 1–9
  text: string;
  tag: "Pelayanan" | "Keuangan" | "Pengarsipan" | "Pemeriksaan" | "Dokumen";
};

export type Stage = {
  no: string; // "01"
  title: string;
  icon: "wallet" | "file" | "landmark";
  summary: string;
  tasks: [number, number]; // rentang nomor tugas (inklusif)
  dark?: boolean;
};

export type Work = {
  id: string;
  tag: string; // label monospace di kartu
  title: string;
  peran: string;
  belajar: string;
  category: "Pelayanan" | "Keuangan";
  size: "large" | "wide" | "small";
  tone: "teal" | "paper" | "orange";
};

export type Portfolio = {
  profile: {
    name: string;
    shortName: string;
    initials: string;
    status: string;
    intro: string;
    location: string;
    email: string;
    email2: string | null;
  };
  about: {
    headline: string;
    body: string;
    values: { label: string; icon: "search" | "clock" | "shield" }[];
  };
  pkl: {
    place: string;
    duration: string;
  };
  stats: { pkl: string; tasks: number; skills: number };
  skills: string[]; // keahlian hard skill
  tasks: Task[];
  stages: Stage[];
  works: Work[];
  tools: { label: string; icon: "sheet" | "monitor" | "printer" | "qr" }[];
  education: { school: string; major: string; years: string };
  certification: string;
  glossary: { term: string; meaning: string }[];
};
