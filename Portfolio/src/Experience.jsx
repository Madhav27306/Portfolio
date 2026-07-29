import "./Experience.css";

const experiences = [
  {
    role: "Student Assistant — Campus Planning, Design & Construction",
    organization: "Stony Brook University",
    location: "Stony Brook, NY",
    duration: "Sep 2025 – Present",
    type: "On-site",
    active: true,
    bullets: [
      "Supporting administrative and operational workflows across campus planning and facility infrastructure projects.",
      "Assisting with documentation, task tracking, and coordination between planning teams and university staff.",
    ],
    tags: ["Administrative Support", "Documentation", "Workflow Operations"],
  },
  {
    role: "Undergraduate Teaching Assistant (Calculus II - AMS 161)",
    organization: "Stony Brook University",
    location: "Stony Brook, NY",
    duration: "Aug 2025 – Dec 2025",
    type: "Academic Support",
    bullets: [
      "Supported course instruction for 200+ undergraduate students covering integration techniques, sequences, and series.",
      "Led weekly recitation sessions and office hours, breaking down complex problem-solving strategies to boost comprehension.",
      "Graded assignments and examinations with 100% accuracy and provided detailed feedback.",
    ],
    tags: [
      "Technical Communication",
      "Course Instruction",
      "Academic Mentorship",
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    organization: "Manras Technologies",
    location: "Zirakpur, India",
    duration: "Jun 2025 – Aug 2025",
    type: "Internship",
    bullets: [
      "Developed and refined 60+ Visualforce pages and dynamic PDF generation templates for enterprise client real estate projects (Adani Group).",
      "Optimized CRM data models, record types, and validation rules, reducing form input errors by 20% and improving overall system reliability.",
      "Provided technical support and resolved software update / troubleshooting tickets on time with 100% documentation accuracy.",
    ],
    tags: [
      "Salesforce / Dynamics CRM",
      "Visualforce",
      "HTML/CSS",
      "Apex",
      "JavaScript",
      "Data Modeling",
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-panel" id="experience">
      <div className="experience-shell">
        <header className="experience-heading">
          <p className="experience-command">
            <span aria-hidden="true">$</span> systemctl status experience.service
          </p>
          <p className="experience-summary">
            <span className="experience-status-dot" aria-hidden="true">
              ●
            </span>
            experience.service — professional and academic runtime
          </p>
        </header>

        <ol className="experience-list">
          {experiences.map((experience, index) => (
            <li className="experience-card" key={experience.role}>
              <div className="experience-card-header">
                <div className="experience-role-block">
                  <span className="experience-index">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <h2 className="experience-role">{experience.role}</h2>
                </div>
                <time className="experience-date">{experience.duration}</time>
              </div>

              <div className="experience-meta">
                <span>{experience.organization}</span>
                <span aria-hidden="true">/</span>
                <span>{experience.location}</span>
                <span className="experience-type">{experience.type}</span>
                {experience.active && (
                  <span className="experience-active">
                    <span aria-hidden="true">●</span> Active
                  </span>
                )}
              </div>

              <ul className="experience-bullets">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div
                className="experience-tags"
                aria-label={`${experience.role} skills`}
              >
                {experience.tags.map((tag) => (
                  <span className="experience-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
