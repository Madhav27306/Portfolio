import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">
          Let's build<br />something great.
        </h2>
        {/* Replace with your actual email */}
        <a href="mailto:gupta27madhav@gmail.com" className="email-link">
          Get in touch ↗ 
        </a>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://github.com/Madhav27306" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourlink" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
        
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Madhav Gupta.</p>
          <button onClick={scrollToTop} className="back-to-top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}