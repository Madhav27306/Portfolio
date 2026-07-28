import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <div className="terminal-window">
        {/* Fake macOS / Linux Window Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">madhav@macbook: ~</span>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body terminal-font">
          <div className="command-line">
            <span className="prompt">madhav@macbook ~ %</span> systemctl status
            developer.service
          </div>

          <div className="output-line title">
            <span className="status-dot">●</span> madhav-gupta.service - Systems,
            Security &amp; Full-Stack Engineer
          </div>
          <div className="output-line">
            <span className="label"> Loaded:</span> loaded
            (/usr/lib/systemd/system/madhav.service; enabled; preset: enabled)
          </div>
          <div className="output-line">
            <span className="label"> Active:</span>{" "}
            <span className="active-text">active (running)</span> since Wed
            2026-07-29
          </div>
          <div className="output-line">
            <span className="label"> Main PID:</span> 2028 (stony-brook-uni)
          </div>
          <div className="output-line">
            <span className="label"> Memory:</span> 3.66G (GPA)
          </div>
          <div className="output-line">
            <span className="label"> CGroup:</span>{" "}
            /system.slice/madhav-gupta.service
          </div>

          {/* Tech Stack Tree mapped from resume */}
          <div className="output-line tree">
            ├─ <span className="category">Core_Languages</span>: Python, C,
            Java, JavaScript (Node.js), SQL
          </div>
          <div className="output-line tree">
            ├─ <span className="category">DevOps_Cloud</span>: AWS (VPC/EKS),
            Docker, Terraform, CI/CD, Linux
          </div>
          <div className="output-line tree">
            ├─ <span className="category">Security_Tools</span>: Splunk,
            Wireshark, Trivy, Checkov, MITRE ATT&amp;CK
          </div>
          <div className="output-line tree">
            └─ <span className="category">Frameworks_DBs</span>: React.js,
            MongoDB, PostgreSQL, RESTful APIs
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
