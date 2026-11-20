import Nav from "@/components/client/Nav";
import { FilterProvider } from "@/components/client/Filter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import WorksSection from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { portfolio } from "@/data/portfolio";

// Urutan: Hero, Tentang, Perjalanan, Karya, Keahlian, Kontak, Footer.
// FilterProvider membungkus Perjalanan dan Karya agar filter menyorot keduanya.
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <Nav initials={portfolio.profile.initials} brand={portfolio.profile.shortName} />
      <main id="konten" tabIndex={-1}>
        <Hero />
        <About />
        <FilterProvider>
          <Journey />
          <WorksSection />
        </FilterProvider>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
