import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuBurger from "../assets/images/menuBurger.svg";
import "../styles/topBar.css";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav className="topbar-container">
      <Link to="/" className="topbar-title">
        <h3>
          DIAS Jonathan | <span className="text-orange">Portfolio</span>
        </h3>
      </Link>
      <button type="button" className="button" onClick={toggleMenu}>
        <img src={menuBurger} alt="Menu" className="menu-burger" />
      </button>
      {menuOpen && (
        <div className="topbar-fullscreen-menu">
          <button
            type="button"
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            &times;
          </button>
          <ul className="topbar-menu-list">
            <li>
              <Link className="menu-link" to="/" onClick={toggleMenu}>
                Mon univers
              </Link>
            </li>
            {isMobile && (
              <li>
                <Link className="menu-link" to="/projets" onClick={toggleMenu}>
                  Mes projets
                </Link>
              </li>
            )}
            <li>
              <Link className="menu-link" to="/a-propos" onClick={toggleMenu}>
                À propos
              </Link>
            </li>
            <li>
              <Link
                className="menu-link"
                to="/me-contacter"
                onClick={toggleMenu}
              >
                Me contacter
              </Link>
            </li>
            <li>
              <Link
                className="menu-link legal-link"
                to="/mentions-legales"
                onClick={toggleMenu}
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default TopBar;
