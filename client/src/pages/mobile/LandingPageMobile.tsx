import "../../styles/mobile/landingpagemobile.css";

export default function LandingPageMobile() {
  return (
    <div className="landing-mobile-bg">
      <header className="landing-mobile-topbar">
        <span className="mobile-logo">JD</span>
        <button
          className="mobile-burger-menu"
          type="button"
          aria-label="Ouvrir le menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <main className="landing-mobile-content">
        <div className="mobile-glow-lights">
          <div className="mobile-glow1" />
          <div className="mobile-glow2" />
          <div className="mobile-glow3" />
        </div>
        <div className="mobile-particles-container mobile-particles-behind">
          <div className="mobile-particle1" />
          <div className="mobile-particle2" />
          <div className="mobile-particle3" />
        </div>
        <div className="mobile-landing-page-text">
          <h1>Jonathan Dias</h1>
          <h2>Mon univers</h2>
        </div>
        <div className="mobile-particles-container mobile-particles-front">
          <div className="mobile-particle4" />
          <div className="mobile-particle5" />
        </div>
      </main>
      <footer className="landing-mobile-footer">
        <p>
          Pour une expérience immersive,
          <br />
          visitez ce site sur ordinateur
        </p>
      </footer>
    </div>
  );
}
