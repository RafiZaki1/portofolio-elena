import { portfolio } from "@/data/portfolio";
import Year from "@/components/client/Year";

// Footer sederhana: nama dan tahun berjalan. Tanpa tombol kembali ke atas.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>© <Year /> {portfolio.profile.name}</p>
      </div>
    </footer>
  );
}
