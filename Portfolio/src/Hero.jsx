import { useHexDecode } from "./hooks/useHexDecode";
import "./Hero.css";

const Hero = () => {
  // Configurable delays so lines decode sequentially like a real terminal
  const title = useHexDecode("Hi, I'm Madhav.", 300);
  const tagline = useHexDecode("From Assembly to React.", 1200);
  const roles = useHexDecode("> Compilers | Cybersecurity | Full-Stack", 2200);

  return (
    <section className="hero-container">
      {/* Dynamic Background Grid */}
      <div className="hero-grid-bg"></div>

      <div className="hero-content">
        {/* Availability Pill */}
        <div className="status-pill">
          <span className="pulse-dot"></span>
          <span className="status-text">Available Fall 2026 / Summer 2027</span>
        </div>

        {/* Main Typography */}
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-tagline">{tagline}</h2>
        <p className="hero-roles terminal-font">
          {roles}
          <span className="blinking-cursor">_</span>
        </p>

        {/* Call to Actions */}
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Systems
          </a>
          <a
            href="/FMadhavGResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            cat resume.pdf
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
