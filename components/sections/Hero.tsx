import { portfolio } from "@/data/portfolio";

// Hero: teks di kiri, printer dengan struk "Bukti Portofolio" dan stempel di kanan.
// Angka di struk dihitung dari data.
export default function Hero() {
  const { profile, stats, pkl } = portfolio;
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="beranda" aria-labelledby="judul-hero" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="badge">
            <i aria-hidden="true" />
            {profile.status}
          </p>

          <h1 id="judul-hero" className="name">
            {first}
            <span className="last">
              {last}
              <span className="dot">.</span>
            </span>
          </h1>

          <p className="hero-lead">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#kontak" className="btn btn-primary">
              Hubungi saya
            </a>
            <a href="#karya" className="btn btn-outline">
              Lihat karya
            </a>
          </div>
        </div>

        <div className="printer" aria-label="Ilustrasi printer yang mencetak bukti portofolio">
          <div className="printer-body" aria-hidden="true">
            <span className="slot" />
          </div>
          <div className="paper">
            <div className="receipt" role="group" aria-label="Bukti portofolio">
              <p className="receipt-title mono">BUKTI PORTOFOLIO</p>
              <div className="receipt-row mono"><b>PKL</b><span>{pkl.duration.toUpperCase()}</span></div>
              <div className="receipt-row mono"><b>TUGAS</b><span>{stats.tasks}</span></div>
              <div className="receipt-row mono"><b>KEAHLIAN</b><span>{stats.skills}</span></div>
              <div className="receipt-row mono"><b>STATUS</b><span>SIAP</span></div>
              <p className="receipt-foot mono">{portfolio.education.school.toUpperCase()}</p>
            </div>
          </div>
          <div className="stamp-seal" aria-hidden="true">
            <div>
              <span className="small">SIAP</span>
              <span className="big">OK</span>
              <span className="small">KERJA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ribbon-wrap">
        <div className="ribbon" aria-hidden="true">
          <div className="ribbon-track">
            {[0, 1].map((n) => (
              <span key={n} style={{ display: "inline-flex", gap: 28 }}>
                {portfolio.skills.slice(0, 3).map((s) => (
                  <span key={`${n}-${s}`} className="mono" style={{ fontSize: "0.92rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {s} <i>✱</i>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
