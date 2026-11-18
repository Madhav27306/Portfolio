import "./Projects.css";
import InteractiveTerminal from "./InteractiveTerminal";

const projects = [
  {
    id: "soc-lab",
    path: "~/projects/soc-detection-lab",
    date: "Security Operations",
    title: "SOC Detection Lab",
    description:
      "Built a local security operations environment to detect and analyze real attack behavior. Ran simulated network reconnaissance to capture .pcap telemetry in Wireshark and mapped the offensive behavior to the MITRE ATT&CK framework. Isolated attacker (Kali Linux) and victim (Ubuntu) traffic with UTM virtualization, then deployed a Splunk Enterprise SIEM pipeline with Universal Forwarders parsing and indexing system authentication logs from a headless server.",
    tags: [
      "Splunk Enterprise",
      "Wireshark",
      "MITRE ATT&CK",
      "UTM",
      "Kali Linux",
      "Ubuntu",
    ],
    sourceUrl: "https://github.com/Madhav27306/siem-threat-detection-lab",
    terminal: {
      command: "splunk search 'sourcetype=linux_secure failed'",
      outputLines: [
        "Indexing /var/log/auth.log via Universal Forwarder...",
        "<span style='color: #4ade80'>[OK]</span> SIEM pipeline connected.",
        "<br/># MITRE ATT&amp;CK mapping",
        "<span style='color: #fbbf24'>[ALERT]</span> T1110 Brute Force — sshd auth failures",
        "<span style='color: #60a5fa'>&gt; PCAP captured | host=ubuntu-victim</span>",
      ],
    },
  },
  {
    id: "devsecops",
    path: "~/projects/devsecops-pipeline",
    date: "Cloud Security / CI/CD",
    title: "End-to-End DevSecOps Cloud Pipeline",
    description:
      "Engineered an automated CI/CD pipeline via GitHub Actions, integrating Trivy and npm audit for Software Composition Analysis to proactively block critical CVEs from reaching production. Provisioned secure AWS infrastructure (VPC, EKS) using Terraform and integrated Checkov to scan IaC manifests for misconfigurations before deployment. Containerized a 3-tier web application (React, Node.js, PostgreSQL) with multi-stage Docker builds and enforced non-root execution to minimize the container attack surface.",
    tags: [
      "GitHub Actions",
      "Trivy",
      "Terraform",
      "AWS (VPC/EKS)",
      "Checkov",
      "Docker",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    terminal: {
      command: "gh run view --job=security-scan",
      outputLines: [
        "Running Checkov + Trivy + npm audit...",
        "<span style='color: #4ade80'>[OK]</span> IaC scan: 0 misconfigurations",
        "<span style='color: #4ade80'>[OK]</span> Container scan: non-root enforced",
        "<span style='color: #f87171'>[BLOCK]</span> Critical CVE gated from deploy",
        "<span style='color: #60a5fa'>&gt; Pipeline status: FAIL-CLOSED</span>",
      ],
    },
  },
  {
    id: "clm-timesheet",
    path: "~/projects/clm-timesheet-automator",
    date: "Chrome Extension",
    title: "CLM Timesheet Automator",
    description:
      "Full-stack Chrome extension (JavaScript, HTML, CSS, SheetJS) that automates university timesheet data entry, saving 10 hours a week of manual work. Headless record injection via direct API calls runs 95% faster than UI automation, with an AI-assisted real-time DOM validation gatekeeper and XSS-sanitized session storage protecting university PII.",
    tags: ["JavaScript", "HTML", "CSS", "SheetJS", "Chrome Extensions"],
    terminal: {
      command: "chrome --load-extension=./clm-timesheet",
      outputLines: [
        "Injecting timesheet rows via API...",
        "<span style='color: #4ade80'>[OK]</span> DOM validation gatekeeper active",
        "<span style='color: #4ade80'>[OK]</span> Session storage XSS-sanitized",
        "<span style='color: #60a5fa'>&gt; Manual entry time saved: ~10 hrs/week</span>",
      ],
    },
  },
  {
    id: "job-pipeline",
    path: "~/projects/job-application-pipeline",
    date: "Automation / Workflows",
    title: "Automated Job Application Pipeline",
    description:
      "Fully automated, zero-cost pipeline using n8n, Apify, and the Gemini API that continuously scrapes fresh tech internships, evaluates each posting for F-1 CPT/OPT sponsorship compatibility, and dynamically rewrites the resume HTML in Google Docs to tailor each application. Debugged end to end with AI assistance (invalid JSON output, a Google Drive API 404, JSON-wrapped HTML breaking rendering, truncated prompts) and scaled to process batches of 100+ listings per execution on schedule triggers.",
    tags: ["n8n", "Apify", "Gemini API", "Google Docs API", "JavaScript"],
    terminal: {
      command: "n8n execute --id=job-pipeline",
      outputLines: [
        "Scraping internship postings via Apify...",
        "<span style='color: #4ade80'>[OK]</span> CPT/OPT sponsorship filter applied",
        "<span style='color: #4ade80'>[OK]</span> Resume HTML tailored in Google Docs",
        "<span style='color: #60a5fa'>&gt; Batch complete: 100+ listings processed</span>",
      ],
    },
  },
  {
    id: "federated-learning",
    path: "~/projects/secure-federated-learning",
    date: "Research Simulation",
    title: "Secure Federated Learning",
    description:
      "Research simulation evaluating Krum and Trimmed Mean aggregation against data poisoning attacks, built with Python, Ray, and Flower. Fixed Ray process hangups and deadlocks plus memory leaks in weight aggregation across a 13-run sweep over 20 rounds.",
    tags: ["Python", "Ray", "Flower"],
    terminal: {
      command: "python simulate_krum.py --rounds 20 --runs 13",
      outputLines: [
        "Starting federated aggregation sweep...",
        "<span style='color: #4ade80'>[OK]</span> Krum / Trimmed Mean defenses loaded",
        "<span style='color: #fbbf24'>[FIX]</span> Ray deadlock + memory leak resolved",
        "<span style='color: #60a5fa'>&gt; 13-run sweep complete across 20 rounds</span>",
      ],
    },
  },
  {
    id: "astra",
    path: "~/projects/astra",
    date: "Aug 2025 – Dec 2025",
    title: "astra Interpreter",
    description:
      "Built an end-to-end interpreter for an ML-style language. Engineered lexical analysis, AST parsing, and runtime evaluation with strict semantic checks. Implemented complex data structures, control flow, and user-defined functions with true lexical scoping via an explicit call stack.",
    tags: ["PLY (Lex/Yacc)", "AST Parsing", "Compiler Construction", "Python"],
    sourceUrl: "https://github.com/Madhav27306/astra",
    terminal: {
      command: "astra -E script.ast",
      outputLines: [
        "AST GENERATED SUCCESSFULLY...",
        "EVALUATING SYNTAX TREE...",
        "<br/># Testing Lexical Scoping",
        "<span style='color: #4ade80'>PASS:</span> Lexical scope preserved.",
        "<span style='color: #4ade80'>PASS:</span> Control flow evaluation.",
        "<span style='color: #60a5fa'>&gt; Output: [1, 2, \"astra\"]</span>",
      ],
    },
  },
  {
    id: "formflow",
    path: "~/projects/formflow",
    date: "48-Hour Code-A-Site Hackathon",
    title: "FormFlow",
    description:
      "A real-time exercise form analysis platform. Turns a laptop camera into an AI coaching assistant that scores rep fluidity via MediaPipe Pose, catching form faults mid-set. Utilizes MongoDB Change Streams to instantly broadcast form failures to workout friend groups via Socket.IO.",
    tags: [
      "React / Vite",
      "Node.js / Express",
      "MongoDB Change Streams",
      "Socket.IO",
      "MediaPipe Pose",
    ],
    sourceUrl: "https://github.com/FormFlow26/CodeASite26Project",
    liveUrl: "https://code-a-site26-project.vercel.app",
    terminal: {
      command: "npm run dev --workspace=formflow",
      outputLines: [
        "Starting FormFlow API &amp; Web UI...",
        "<span style='color: #4ade80'>[OK]</span> MediaPipe Pose Engine initialized.",
        "<span style='color: #4ade80'>[OK]</span> MongoDB Change Stream connected.",
        "<br/># Monitoring Session: User \"Madhav\"",
        "[PHASE] IDLE -&gt; DESCENDING -&gt; BOTTOM",
        "<span style='color: #fbbf24'>⚠️ [FAULT] knee_valgus detected during Squat!</span>",
        "[EMIT] Broadcasting WIPEOUT_EVENT to room: group:StonyBrook_Lifters",
        "<span style='color: #f87171'>&gt; Rep Fluidity Score: 42/100 (Aborted)</span>",
      ],
    },
  },
];

export default function Projects() {
  return (
    <div className="projects-list" id="projects">
      {projects.map((project) => (
        <article className="project-ide" key={project.id}>
          <div className="ide-header">
            <div className="ide-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <p className="ide-title">madhav@macbook: {project.path}</p>
          </div>

          <div className="ide-body">
            <div className="ide-info">
              <p className="project-date">{project.date}</p>
              <h2>{project.title}</h2>
              <p className="project-desc">{project.description}</p>

              <div className="tech-stack">
                {project.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.sourceUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn live-btn"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      View Source Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>

            <InteractiveTerminal
              title={`madhav@macbook: ${project.path}`}
              command={project.terminal.command}
              outputLines={project.terminal.outputLines}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
