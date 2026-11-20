// SATU-SATUNYA sumber isi konten. Komponen tidak menulis teks konten langsung.
// Angka statistik (tugas, keahlian) dihitung dari daftar di bawah, bukan diketik manual.

import type { Portfolio } from "@/types/portfolio";

const tasks: Portfolio["tasks"] = [
  { no: 1, text: "Melayani pembayaran PBB via QRIS", tag: "Pelayanan" },
  { no: 2, text: "Mencetak STTS (Surat Tanda Terima Setoran)", tag: "Keuangan" },
  { no: 3, text: "Mencocokkan data dengan SPPT berdasarkan NOP", tag: "Pemeriksaan" },
  { no: 4, text: "Membantu blangko pengurangan dan mutasi", tag: "Dokumen" },
  { no: 5, text: "Mengecek berkas wajib pajak", tag: "Pemeriksaan" },
  { no: 6, text: "Menyiapkan slip setoran", tag: "Keuangan" },
  { no: 7, text: "Menyetor ke Bank Jatim", tag: "Keuangan" },
  { no: 8, text: "Mengarsipkan bukti setoran", tag: "Pengarsipan" },
  { no: 9, text: "Mencatat SK", tag: "Pengarsipan" },
];

export const portfolio: Portfolio = {
  profile: {
    name: "Elen Nuraini",
    shortName: "Elen",
    initials: "EN",
    status: "Terbuka untuk kerja dan magang",
    intro:
      "Calon profesional perbankan syariah — berpengalaman melayani pembayaran pajak dan mengelola setoran selama PKL 6 bulan.",
    location: "Jombang, Jawa Timur",
    email: "elennuraini2@gmail.com",
    email2: null,
  },

  about: {
    headline: "Teliti di loket, rapi di arsip.",
    body:
      "Siswi Layanan Perbankan Syariah di SMK Negeri 2 Mojokerto, tertarik pada keuangan dan administrasi. Selama PKL di BPKPD Kota Mojokerto, saya terbiasa berhadapan langsung dengan wajib pajak, dokumen, dan uang setoran.",
    values: [
      { label: "Teliti", icon: "search" },
      { label: "Disiplin", icon: "clock" },
      { label: "Bertanggung jawab", icon: "shield" },
    ],
  },

  pkl: {
    place: "BPKPD Kota Mojokerto",
    duration: "6 bulan",
  },

  // Dihitung dari data di bawah
  stats: {
    pkl: "6 bulan",
    tasks: tasks.length,
    skills: 5,
  },

  skills: [
    "Pelayanan pembayaran pajak",
    "Pengelolaan setoran",
    "Pengarsipan",
    "Pencatatan administrasi",
    "Pemeriksaan berkas",
  ],

  tasks,

  stages: [
    {
      no: "01",
      title: "Loket pembayaran",
      icon: "wallet",
      summary: "Melayani PBB via QRIS, cetak STTS, cocokkan dengan SPPT.",
      tasks: [1, 3],
    },
    {
      no: "02",
      title: "Berkas permohonan",
      icon: "file",
      summary: "Blangko pengurangan dan mutasi, cek berkas wajib pajak.",
      tasks: [4, 5],
    },
    {
      no: "03",
      title: "Setoran dan arsip",
      icon: "landmark",
      summary: "Slip setoran, setor ke Bank Jatim, arsip bukti, catat SK.",
      tasks: [6, 9],
      dark: true,
    },
  ],

  works: [
    {
      id: "pbb",
      tag: "Pelayanan · Pemeriksaan",
      title: "Pelayanan pembayaran PBB",
      peran: "Melayani pembayaran PBB via QRIS, mencetak STTS, dan mencocokkannya dengan SPPT berdasarkan NOP.",
      belajar: "Ketelitian data pajak dan melayani masyarakat secara langsung.",
      category: "Pelayanan",
      size: "large",
      tone: "teal",
    },
    {
      id: "permohonan",
      tag: "Dokumen · Pencatatan",
      title: "Permohonan wajib pajak",
      peran: "Membantu blangko pengurangan dan mutasi, serta mengecek kelengkapan berkas.",
      belajar: "Kelengkapan berkas dan pencatatan SK.",
      category: "Pelayanan",
      size: "wide",
      tone: "paper",
    },
    {
      id: "setoran",
      tag: "Keuangan · Arsip",
      title: "Setoran dan arsip penerimaan",
      peran: "Menyiapkan slip setoran, menyetor ke Bank Jatim, dan mengarsipkan bukti.",
      belajar: "Alur penerimaan setoran dan pengarsipan bukti.",
      category: "Keuangan",
      size: "small",
      tone: "orange",
    },
  ],

  tools: [
    { label: "Excel", icon: "sheet" },
    { label: "Komputer", icon: "monitor" },
    { label: "Printer", icon: "printer" },
    { label: "QRIS", icon: "qr" },
  ],

  education: {
    school: "SMK Negeri 2 Mojokerto",
    major: "Layanan Perbankan Syariah",
    years: "2024 – 2027",
  },

  certification: "Belum memiliki sertifikasi nasional — terbuka untuk pelatihan dan sertifikasi.",

  glossary: [
    { term: "PBB", meaning: "Pajak Bumi dan Bangunan" },
    { term: "SPPT", meaning: "Surat Pemberitahuan Pajak Terutang" },
    { term: "STTS", meaning: "Surat Tanda Terima Setoran" },
    { term: "NOP", meaning: "Nomor Objek Pajak" },
    { term: "QRIS", meaning: "Quick Response Code Indonesian Standard" },
    { term: "SK", meaning: "Surat Keputusan" },
    { term: "PKL", meaning: "Praktik Kerja Lapangan" },
    { term: "BPKPD", meaning: "Badan Pengelolaan Keuangan dan Pendapatan Daerah" },
  ],
};
