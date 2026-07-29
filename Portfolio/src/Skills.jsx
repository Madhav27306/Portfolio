import "./Skills.css";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C", "Java", "JavaScript", "Node.js", "SQL"],
  },
  {
    label: "DevOps / Cloud",
    skills: ["AWS", "VPC / EKS", "Docker", "Terraform", "CI/CD", "Linux"],
  },
  {
    label: "Security",
    skills: ["Splunk", "Wireshark", "Trivy", "Checkov", "MITRE ATT&CK"],
  },
  {
    label: "Frameworks",
    skills: ["React", "MongoDB", "PostgreSQL", "REST APIs"],
  },
];

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
            <span className="status-dot">●</span>{" "}
            <span className="service-name">madhav-gupta.service</span> - Systems,
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

          <div className="skills-grid" aria-label="Technical skills">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3 className="skill-group-title">{group.label}</h3>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
