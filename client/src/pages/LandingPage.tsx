import "../styles/landingPage.css";
import EndPage from "../components/EndPage";
import GalaxyScene from "../components/GalaxyScene";
import { planetData } from "../components/PlanetData";
import ScrollIndicator from "../components/ScrollIndicator";
import useScrollProgress from "../hook/useScrollProgress";

function LandingPage() {
  const lastPlanetZ = Math.min(...planetData.map((p) => p.position[2]));
  const endPageOffset = 50;
  const blockScrollOffset = 80;
  const maxScroll = Math.abs(lastPlanetZ) + blockScrollOffset;
  const scrollProgress = useScrollProgress(maxScroll);
  const showEndPage = scrollProgress >= Math.abs(lastPlanetZ) + endPageOffset;

  const fadeOut = 1 - scrollProgress * 2;
  const hiddenStyle = {
    opacity: Math.max(fadeOut, 0),
    transform: `scale(${1 - scrollProgress * 0.2})`,
    filter: `blur(${scrollProgress * 10}px)`,
    transition: "opacity 0.3s, transform 0.3s, filter 0.3s",
  };

  const gradientStyle = {
    opacity: Math.max(fadeOut, 0),
    transition: "opacity 0.3s",
  };

  return (
    <section className="landing-page">
      <div className="galaxy-canvas">
        <GalaxyScene scrollProgress={scrollProgress} />
      </div>
      {showEndPage && (
        <EndPage scrollProgress={scrollProgress} planetData={planetData} />
      )}
      <div className="gradient-overlay" style={gradientStyle} />

      <div className="landing-page-content" style={hiddenStyle}>
        <div className="glow-lights">
          <div className="glow1" />
          <div className="glow2" />
          <div className="glow3" />
        </div>
        <div className="particles-container particles-behind">
          <div className="particle1" />
          <div className="particle2" />
          <div className="particle3" />
        </div>
        <div className="landing-page-text">
          <h1>DIAS Jonathan</h1>
          <h2>Mon univers</h2>
        </div>
        <div className="particles-container particles-front">
          <div className="particle4" />
          <div className="particle5" />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default LandingPage;
