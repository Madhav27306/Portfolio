import "./Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-shell">
        <header className="education-heading">
          <p className="education-command">
            <span aria-hidden="true">$</span> cat ~/education/stony-brook.md
          </p>
          <p className="education-summary">
            Degree, GPA, and expected graduation — recruiter-readable.
          </p>
        </header>

        <article className="education-card">
          <div className="education-card-header">
            <div>
              <h2 className="education-school">Stony Brook University</h2>
              <p className="education-degree">B.S. in Computer Science</p>
            </div>
            <div className="education-meta-block">
              <time className="education-date">Expected May 2028</time>
              <span className="education-location">Stony Brook, NY</span>
            </div>
          </div>

          <div className="education-stats">
            <span className="education-stat">
              GPA <strong>3.68 / 4.00</strong>
            </span>
            <span className="education-stat accent">Dean&apos;s List</span>
          </div>

          <div className="education-coursework">
            <h3>Related Coursework</h3>
            <div className="education-chips">
              {[
                "Data Structures & Algorithms",
                "Computer Networks",
                "Compiler Design",
                "Database Systems",
                "Systems Fundamentals",
                "Software Development",
                "Objects & Design",
              ].map((course) => (
                <span className="education-chip" key={course}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
