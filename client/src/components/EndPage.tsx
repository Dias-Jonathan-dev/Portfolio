import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/endpage.css";
import type { PlanetData } from "./PlanetData";

interface EndPageProps {
  scrollProgress: number;
  planetData: PlanetData[];
}

export default function EndPage({ scrollProgress, planetData }: EndPageProps) {
  const lastPlanetZ = Math.min(...planetData.map((p) => p.position[2]));
  const endPageOffset = 50;
  const show = scrollProgress >= Math.abs(lastPlanetZ) + endPageOffset;

  const navigate = useNavigate();

  // Désactive le scroll quand la page de fin est affichée
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Nettoyage au démontage
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="endpage-overlay">
      <h1>Merci pour votre visite</h1>
      <p>
        L'univers étant en perpétuelle expansion, <br /> il se pourrait que de
        nouvelles planètes fassent leur apparition...
      </p>
      <button
        type="button"
        className="endpage-contact-btn"
        onClick={() => navigate("/me-contacter")}
      >
        Me contacter
      </button>
    </div>
  );
}
