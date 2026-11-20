"use client";

// Karya: bento grid. Filter di atas grid menyorot kartu yang cocok.
import { Landmark, FileText, Wallet } from "lucide-react";
import type { Work } from "@/types/portfolio";
import { FilterBar, filterLabel, matches, useFilter } from "./Filter";

const FILTERS = [
  { value: "all" as const, label: "Semua" },
  { value: "Pelayanan" as const, label: "Pelayanan" },
  { value: "Keuangan" as const, label: "Keuangan" },
];

export default function Works({ works, flow }: { works: Work[]; flow: string[] }) {
  const { value } = useFilter();
  const shown = works.filter((w) => matches(value, w.category)).length;
  const icons = [Wallet, FileText, Landmark];

  return (
    <>
      <div className="head-row">
        <FilterBar options={FILTERS} />
      </div>
      <p className="filter-status" aria-live="polite" style={{ marginTop: -24, marginBottom: 24 }}>
        {value === "all" ? `Menampilkan semua ${works.length} karya.` : `${shown} dari ${works.length} karya cocok dengan "${filterLabel(value)}".`}
      </p>

      <div className="bento">
        {works.map((w, i) => {
          const Icon = icons[i % icons.length];
          const dim = !matches(value, w.category);
          const hit = value !== "all" && !dim;
          const classes = [
            "work",
            w.size === "large" ? "large" : "",
            w.tone === "orange" ? "orange" : "",
            dim ? "is-dim" : "",
            hit ? "is-hit" : "",
          ].join(" ");
          return (
            <article key={w.id} className={classes} aria-labelledby={`work-${w.id}`}>
              <Icon className="ico" aria-hidden="true" />
              <span className="wtag">{w.tag}</span>
              {w.size === "large" && (
                <div className="flow" aria-label="Alur pelayanan: QRIS, STTS, SPPT">
                  {flow.map((step, idx) => (
                    <span key={step} style={{ display: "contents" }}>
                      <span className={`step${idx === 1 ? " accent" : ""}`}>{step}</span>
                      {idx < flow.length - 1 && <span className="arrow" aria-hidden="true">→</span>}
                    </span>
                  ))}
                </div>
              )}
              <h3 id={`work-${w.id}`}>{w.title}</h3>
              <p className="wtxt">
                <span className="wlabel">Peran: </span>
                {w.peran}
              </p>
              <p className="wtxt">
                <span className="wlabel">Pembelajaran: </span>
                {w.belajar}
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
}
