import { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "../components/layout/Header";
import { ThreeColumnLayout } from "../components/layout/ThreeColumnLayout";
import { HomeLeftAside } from "../components/home/HomeLeftAside";
import { HomeRightAside } from "../components/home/HomeRightAside";
import { MobileHero } from "../components/home/MobileHero";
import { AboutSection } from "../components/home/AboutSection";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { ToolsSection } from "../components/home/ToolsSection";
import { ContactSection } from "../components/home/ContactSection";

export default function Home() {
  const location = useLocation();

  // Si se llega con un hash (p. ej. desde la vista de un proyecto: /#contacto),
  // React Router puede confirmar el pathname y el hash en dos actualizaciones
  // separadas: atado a location.hash (no a []) para no perder la segunda.
  // El salto es instantáneo a propósito: justo al montar, las imágenes y los
  // Reveal todavía están acomodando el layout, y eso corta a mitad de camino
  // el scroll suave nativo (scroll-behavior: smooth de index.css).
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, [location.hash]);

  return (
    <>
      <Header />
      <ThreeColumnLayout
        left={<HomeLeftAside />}
        center={
          <div className="px-5 xl:px-14">
            <MobileHero />
            <AboutSection />
            <div className="mt-[72px] xl:mt-[96px]">
              <ProjectsSection />
            </div>
            <div className="mt-[72px] xl:mt-[96px]">
              <ToolsSection />
            </div>
            <div className="mt-[72px] xl:mt-[96px]">
              <ContactSection />
            </div>
          </div>
        }
        right={<HomeRightAside />}
      />
    </>
  );
}
