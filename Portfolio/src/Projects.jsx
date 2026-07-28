import "./Projects.css";
import InteractiveTerminal from "./InteractiveTerminal";

export default function Projects() {
  return (
    <section className="projects-track" id="projects">
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
              Built an end-to-end interpreter for an ML-style language. Engineered
              lexical analysis, AST parsing, and runtime evaluation with strict
              semantic checks. Implemented complex data structures, control flow,
              and user-defined functions with true lexical scoping via an explicit
              call stack.
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

          <InteractiveTerminal
            title="madhav@macbook: ~/projects/astra"
            command="astra -E script.ast"
            outputLines={[
              "AST GENERATED SUCCESSFULLY...",
              "EVALUATING SYNTAX TREE...",
              "<br/># Testing Lexical Scoping",
              "<span style='color: #4ade80'>PASS:</span> Lexical scope preserved.",
              "<span style='color: #4ade80'>PASS:</span> Control flow evaluation.",
              "<span style='color: #60a5fa'>&gt; Output: [1, 2, \"astra\"]</span>",
            ]}
          />
        </div>
      </div>

      <div className="project-panel" id="panel-2">
        <div className="project-ide">
          <div className="ide-header">
            <div className="ide-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <p className="ide-title">madhav@macbook: ~/projects/formflow</p>
          </div>

          <div className="ide-body">
            <div className="ide-info">
              <p className="project-date">48-Hour Code-A-Site Hackathon</p>
              <h2>FormFlow</h2>
              <p className="project-desc">
                A real-time exercise form analysis platform. Turns a laptop camera
                into an AI coaching assistant that scores rep fluidity via MediaPipe
                Pose, catching form faults mid-set. Utilizes MongoDB Change Streams
                to instantly broadcast form failures to workout friend groups via
                Socket.IO.
              </p>

              <div className="tech-stack">
                <span className="tech-tag">React / Vite</span>
                <span className="tech-tag">Node.js / Express</span>
                <span className="tech-tag">MongoDB Change Streams</span>
                <span className="tech-tag">Socket.IO</span>
                <span className="tech-tag">MediaPipe Pose</span>
              </div>

              <a
                href="https://github.com/FormFlow26/CodeASite26Project"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View Source Code ↗
              </a>
            </div>

            <InteractiveTerminal
              title="madhav@macbook: ~/projects/formflow"
              command="npm run dev --workspace=formflow"
              outputLines={[
                "Starting FormFlow API &amp; Web UI...",
                "<span style='color: #4ade80'>[OK]</span> MediaPipe Pose Engine initialized.",
                "<span style='color: #4ade80'>[OK]</span> MongoDB Change Stream connected.",
                "<br/># Monitoring Session: User \"Madhav\"",
                "[PHASE] IDLE -&gt; DESCENDING -&gt; BOTTOM",
                "<span style='color: #fbbf24'>⚠️ [FAULT] knee_valgus detected during Squat!</span>",
                "[EMIT] Broadcasting WIPEOUT_EVENT to room: group:StonyBrook_Lifters",
                "<span style='color: #f87171'>&gt; Rep Fluidity Score: 42/100 (Aborted)</span>",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
