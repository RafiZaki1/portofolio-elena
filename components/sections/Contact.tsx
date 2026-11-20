import { portfolio } from "@/data/portfolio";
import CopyEmail from "@/components/client/CopyEmail";

// Kontak: kartu gelap, judul besar, email monospace dengan tombol salin.
// Hanya email yang ditampilkan, sesuai data.
export default function Contact() {
  const { profile } = portfolio;
  return (
    <section id="kontak" aria-labelledby="judul-kontak" className="wrap" style={{ paddingTop: 0 }}>
      <div className="contact">
        <div className="stamp-corner" aria-hidden="true">
          <span>
            JOMBANG
            <b>PKL</b>
            JATIM
          </span>
        </div>

        <p className="eyebrow" style={{ color: "#e8917a" }}>Kontak</p>
        <h2 id="judul-kontak">
          Mari bekerja
          <br />
          sama<span className="dot">.</span>
        </h2>

        <div className="email-row">
          <a href={`mailto:${profile.email}`} className="email">
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Kirim email
          </a>
        </div>

        <p className="muted" style={{ color: "#a8b0ae", marginTop: 26 }}>
          {profile.location}
        </p>
      </div>
    </section>
  );
}
