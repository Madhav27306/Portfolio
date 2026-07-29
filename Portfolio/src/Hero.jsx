import { useHexDecode } from "./hooks/useHexDecode";
import "./Hero.css";

const HERO_HEADLINE =
  "> Computer Science @ Stony Brook | Cybersecurity & AppSec";

const Hero = () => {
  const headline = useHexDecode(HERO_HEADLINE, 300);

  return (
    <section className="hero-container">
      {/* Dynamic Background Grid */}
      <div className="hero-grid-bg"></div>

      <div className="hero-content">
        {/* Availability Pill */}
        <div className="status-pill">
          <span className="pulse-dot"></span>
          <span className="status-text">
            Available Fall 2026 / Summer 2027
          </span>
        </div>

        <h1
          className="hero-terminal terminal-font"
          aria-label="Computer Science at Stony Brook, Cybersecurity and AppSec"
        >
          {headline}
          <span
            className={`blinking-cursor ${
              headline === HERO_HEADLINE ? "visible" : ""
            }`}
            aria-hidden="true"
          >
            _
          </span>
        </h1>

        <p className="hero-bio">
          I break software to understand exactly how systems fit together. Focused
          on low-level architecture, network interactions, and secure-by-default
          development. Currently building SOC detection environments and OWASP
          remediations using Splunk, React, and Linux.
        </p>

        {/* Call to Actions */}
        <div className="hero-actions">
          <a href="#showcase" className="btn-primary">
            View Systems
          </a>
          <a
            href="/SecurityResume.pdf"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              window.open("/SecurityResume.pdf", "_blank", "noopener,noreferrer");
            }}
          >
            cat resume.pdf
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
