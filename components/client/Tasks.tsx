"use client";

// Daftar 9 tugas dalam accordion native (details). Tanpa JavaScript tetap terbuka dan terbaca.
import { ChevronDown } from "lucide-react";
import type { Task } from "@/types/portfolio";
import { matches, taskCategory, useFilter } from "./Filter";

export default function Tasks({ tasks }: { tasks: Task[] }) {
  const { value } = useFilter();
  const shown = tasks.filter((t) => matches(value, taskCategory(t))).length;

  return (
    <div className="tasks">
      <details>
        <summary>
          Lihat {tasks.length} tugas
          <ChevronDown aria-hidden="true" />
        </summary>
        <p className="filter-status" aria-live="polite" style={{ marginTop: 10 }}>
          {value === "all" ? `Menampilkan semua ${tasks.length} tugas.` : `${shown} dari ${tasks.length} tugas cocok dengan filter.`}
        </p>
        <ol className="task-list">
          {tasks.map((t) => {
            const dim = !matches(value, taskCategory(t));
            const hit = value !== "all" && !dim;
            return (
              <li key={t.no} className={`task${hit ? " is-hit" : ""}${dim ? " is-dim" : ""}`}>
                <span className="no">{String(t.no).padStart(2, "0")}</span>
                <span>{t.text}</span>
                <span className="tag">{t.tag}</span>
              </li>
            );
          })}
        </ol>
      </details>
    </div>
  );
}
