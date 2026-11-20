import { portfolio } from "@/data/portfolio";
import Works from "@/components/client/Works";

// Karya: judul dan bento grid. Filter dan interaksinya ada di komponen client.
export default function WorksSection() {
  return (
    <section id="karya" aria-labelledby="judul-karya" className="section wrap">
      <div className="head-row" style={{ alignItems: "flex-end" }}>
        <div>
          <p className="eyebrow">Karya</p>
          <h2 id="judul-karya" className="h2" style={{ marginBottom: 0 }}>
            Hasil kerja pilihan<span className="dot">.</span>
          </h2>
        </div>
      </div>
      <Works works={portfolio.works} flow={["QRIS", "STTS", "SPPT"]} />
    </section>
  );
}
