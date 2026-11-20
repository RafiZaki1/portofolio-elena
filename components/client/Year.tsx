"use client";

// Tahun berjalan dihitung di browser. Nilai awal dipakai sebelum JavaScript jalan.
import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
