import { ChevronDown, FileSpreadsheet, Monitor, Printer, QrCode } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const TOOL_ICONS = { sheet: FileSpreadsheet, monitor: Monitor, printer: Printer, qr: QrCode };

// Keahlian dan latar belakang: kartu bento kecil dengan angka dari data
export default function Skills() {
  const { tools, stats, skills, education, certification, glossary, pkl } = portfolio;

  return (
    <section id="keahlian" aria-labelledby="judul-keahlian" className="section wrap">
      <p className="eyebrow">Keahlian dan latar belakang</p>
      <h2 id="judul-keahlian" className="h2" style={{ marginBottom: 36 }}>
        Alat dan keahlian<span className="dot">.</span>
      </h2>

      <div className="mini">
        <article className="card span-2" aria-labelledby="alat">
          <p className="label" id="alat">Alat</p>
          <div className="tools">
            {tools.map((t) => {
              const Icon = TOOL_ICONS[t.icon];
              return (
                <div key={t.label}>
                  <Icon aria-hidden="true" />
                  {t.label}
                </div>
              );
            })}
          </div>
        </article>

        <article className="card dark" aria-label={`${pkl.duration} PKL`}>
          <span className="big-num">{stats.pkl.split(" ")[0]}</span>
          <p>bulan PKL</p>
        </article>

        <article className="card teal" aria-label={`${stats.tasks} tugas`}>
          <span className="big-num">{stats.tasks}</span>
          <p>tugas dijalankan</p>
        </article>

        <article className="card span-2" aria-labelledby="keahlian-list">
          <p className="label" id="keahlian-list">Keahlian</p>
          <ul className="skill-list">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>

        <article className="card span-2" aria-labelledby="pendidikan">
          <p className="label" id="pendidikan">Pendidikan</p>
          <p className="edu-name">{education.school}</p>
          <p className="muted">
            {education.major} · {education.years}
          </p>
        </article>

        <article className="card dashed span-2" aria-labelledby="sertifikasi">
          <p className="label" id="sertifikasi">Sertifikasi</p>
          <p className="muted">{certification}</p>
        </article>

        <details className="card glossary span-2">
          <summary>
            Glosarium singkatan
            <ChevronDown aria-hidden="true" />
          </summary>
          <dl>
            {glossary.map((g) => (
              <div key={g.term}>
                <dt>{g.term}</dt>
                <dd>{g.meaning}</dd>
              </div>
            ))}
          </dl>
        </details>
      </div>
    </section>
  );
}
