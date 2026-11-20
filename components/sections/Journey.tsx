import { Landmark, FileText, Wallet } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Tasks from "@/components/client/Tasks";

const ICONS = { wallet: Wallet, file: FileText, landmark: Landmark };

// Perjalanan PKL: tiga tahap besar dan daftar tugas (accordion)
export default function Journey() {
  const { stages, tasks, pkl } = portfolio;
  return (
    <section id="perjalanan" aria-labelledby="judul-perjalanan" className="section wrap">
      <p className="eyebrow">
        Perjalanan PKL · {pkl.duration} · {pkl.place}
      </p>
      <h2 id="judul-perjalanan" className="h2" style={{ marginBottom: 36 }}>
        Dari loket sampai setoran<span className="dot">.</span>
      </h2>

      <ol className="stages">
        {stages.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <li key={s.no} className={`stage${s.dark ? " dark" : ""}`}>
              <span className="num" aria-hidden="true">{s.no}</span>
              <Icon className="ico" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <p className="mono" style={{ marginTop: 10, fontSize: "0.78rem" }}>
                Tugas {String(s.tasks[0]).padStart(2, "0")}–{String(s.tasks[1]).padStart(2, "0")}
              </p>
            </li>
          );
        })}
      </ol>

      <Tasks tasks={tasks} />
    </section>
  );
}
