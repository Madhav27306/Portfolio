import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Call to Action */}
        <div className="footer-left">
          <h2 className="footer-title">Let&apos;s build something great.</h2>
          <a href="mailto:gupta27madhav@gmail.com" className="btn-contact">
            Get in touch ↗
          </a>
        </div>

        {/* Links and Terminal Sign-off */}
        <div className="footer-right terminal-font">
          <div className="footer-links">
            <a
              href="https://github.com/Madhav27306"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/madhavgupta27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/SecurityResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="footer-terminal-meta">
            <span className="logout-text">logout</span>
            <span className="logout-text">Connection closed by foreign host.</span>
            <div className="copyright-row">
              <span>© {currentYear} Madhav Gupta.</span>
              <a href="#top" className="back-to-top" onClick={scrollToTop}>
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
