"use client";

// Navigasi pil sticky: logo stempel "EN", link section (aktif mengikuti scroll), tombol tema, dan menu di HP.
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const LINKS = [
  { id: "tentang", label: "Tentang" },
  { id: "perjalanan", label: "Perjalanan" },
  { id: "karya", label: "Karya" },
  { id: "kontak", label: "Kontak" },
];

export default function Nav({ initials, brand }: { initials: string; brand: string }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(current === "dark" || (!current && system) ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* diblokir: berlaku untuk sesi ini */
    }
  }

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Navigasi utama">
        <a href="#beranda" className="brand" aria-label={`${brand}, kembali ke awal`}>
          <span className="stamp-mark" aria-hidden="true">{initials}</span>
          <span>{brand}<span className="dot">.</span></span>
        </a>

        <div className="nav-right">
          <ul id="nav-links" className={`nav-links${open ? " open" : ""}`}>
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className="icon-btn theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}>
            <Sun className="i-sun" aria-hidden="true" />
            <Moon className="i-moon" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
