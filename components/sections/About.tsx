import { Clock, Search, ShieldCheck } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const ICONS = { search: Search, clock: Clock, shield: ShieldCheck };

// Tentang: judul besar di kiri, ringkasan dan tiga nilai di kanan
export default function About() {
  const { about } = portfolio;
  return (
    <section id="tentang" aria-labelledby="judul-tentang" className="section wrap">
      <div className="about-grid">
        <div>
          <p className="eyebrow">Tentang saya</p>
          <h2 id="judul-tentang" className="h2">
            {about.headline}
          </h2>
        </div>
        <div>
          <p className="about-body">{about.body}</p>
          <ul className="values">
            {about.values.map((v) => {
              const Icon = ICONS[v.icon];
              return (
                <li key={v.label} className="value">
                  <Icon aria-hidden="true" />
                  {v.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
