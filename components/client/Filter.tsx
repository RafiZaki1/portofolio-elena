"use client";

// State filter bersama: tombol di atas kartu Karya juga menyorot daftar tugas.
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "@/types/portfolio";

export type Category = "Pelayanan" | "Keuangan";
export type FilterValue = "all" | Category;

type Ctx = { value: FilterValue; set: (v: FilterValue) => void };
const FilterContext = createContext<Ctx>({ value: "all", set: () => undefined });

export function FilterProvider({ children }: { children: ReactNode }) {
  const [value, set] = useState<FilterValue>("all");
  return <FilterContext.Provider value={{ value, set }}>{children}</FilterContext.Provider>;
}

export function useFilter() {
  return useContext(FilterContext);
}

// Kategori sebuah tugas, dari tag-nya
export function taskCategory(task: Task): Category {
  return task.tag === "Keuangan" || task.tag === "Pengarsipan" ? "Keuangan" : "Pelayanan";
}

export function matches(filter: FilterValue, category: Category) {
  return filter === "all" || filter === category;
}

// Tombol filter dengan aria-pressed. Status jumlah hasil ditulis oleh komponen pemakainya.
export function FilterBar({ options }: { options: { value: FilterValue; label: string }[] }) {
  const { value, set } = useFilter();
  return (
    <div className="filters" role="group" aria-label="Filter berdasarkan kategori">
      {options.map((o) => (
        <button key={o.value} type="button" className="filter" aria-pressed={value === o.value} onClick={() => set(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function filterLabel(value: FilterValue) {
  return value === "all" ? "Semua" : value;
}
