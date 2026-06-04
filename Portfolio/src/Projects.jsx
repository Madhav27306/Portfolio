import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-track">
      
      <div className="project-ide" id="panel-1">
        <div className="ide-header">
          <div className="ide-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <p className="ide-title">madhav@macbook: ~/projects/astra</p>
        </div>


        <div className="ide-body">

          <div className="ide-info">
            <p className="project-date">Aug 2025 – Dec 2025</p>
            <h2>astra Interpreter</h2>
            <p className="project-desc">
              Built an end-to-end interpreter for an ML-style language. Engineered lexical analysis, AST parsing, and runtime evaluation with strict semantic checks. Implemented complex data structures, control flow, and user-defined functions with true lexical scoping via an explicit call stack.
            </p>
            
            <div className="tech-stack">
              <span className="tech-tag">PLY (Lex/Yacc)</span>
              <span className="tech-tag">AST Parsing</span>
              <span className="tech-tag">Compiler Construction</span>
              <span className="tech-tag">Python</span>
            </div>

            <a 
              href="https://github.com/Madhav27306/astra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-btn"
            >
              View Source Code ↗
            </a>
          </div>

          <div className="ide-terminal">
            <p className="cmd"><span>$</span> astra -E script.ast</p>
            <p className="output">AST GENERATED SUCCESSFULLY...</p>
            <p className="output">EVALUATING SYNTAX TREE...</p>
            <br />
            <p className="code-comment"># Testing Lexical Scoping</p>
            <p className="output success">PASS: Lexical scope preserved.</p>
            <p className="output success">PASS: Control flow evaluation.</p>
            <p className="output return">{`> Output: [1, 2, "astra"]`}</p>
            <span className="cursor">_</span>
          </div>

        </div>
      </div>
     

    </section>
  );
}