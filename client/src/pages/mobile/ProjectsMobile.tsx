import { Canvas } from "@react-three/fiber";
import Planet from "../../components/Planet";
import { planetData } from "../../components/PlanetData";
import "../../styles/mobile/projectsmobile.css";

export default function ProjectsMobile() {
  return (
    <div className="mobile-projects-bg">
      <header className="mobile-projects-topbar">
        <span className="mobile-logo">JD</span>
        <h2>Mes planètes / projets</h2>
      </header>
      <main className="mobile-projects-content">
        <div className="mobile-projects-grid">
          {planetData.map((planet, idx) => (
            <div key={planet.id} className="mobile-project-block">
              <div className="mobile-planet-3d-wrap">
                <Canvas camera={{ position: [0, 0, 3] }}>
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[5, 5, 5]} />
                  <Planet
                    name={planet.name}
                    description={planet.description}
                    langage={planet.Langages}
                    texture={planet.texture}
                    position={[0, 0, 0]}
                    scale={1.2}
                    link={planet.link}
                    scrollProgress={0}
                    index={idx}
                    disableHover={true}
                  />
                </Canvas>
              </div>
              <div className="mobile-planet-info-card">
                <h3>{planet.name}</h3>
                <p>{planet.description}</p>
                <div className="mobile-planet-techs">
                  {planet.Langages?.map((lang) => (
                    <span key={lang} className="mobile-tech-badge">
                      {lang}
                    </span>
                  ))}
                </div>
                {planet.link && (
                  <a
                    href={planet.link}
                    className="mobile-planet-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
