import { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import "./Showcase.css";

const tabs = [
  {
    id: "projects",
    label: "🛠️ Featured Projects",
  },
  {
    id: "experience",
    label: "💼 Work Experience",
  },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const selectAdjacentTab = (event, currentIndex) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    const nextTab = tabs.at(nextIndex);

    if (!nextTab) return;
    setActiveTab(nextTab.id);
    requestAnimationFrame(() => {
      document.getElementById(`${nextTab.id}-tab`)?.focus();
    });
  };

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-shell">
        <div className="showcase-tabs" role="tablist" aria-label="Portfolio">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                type="button"
                className={`showcase-tab ${isActive ? "active" : ""}`}
                id={`${tab.id}-tab`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => selectAdjacentTab(event, index)}
                key={tab.id}
              >
                [ {tab.label} ]
              </button>
            );
          })}
        </div>

        <div
          className="showcase-content"
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          tabIndex={0}
          key={activeTab}
        >
          {activeTab === "projects" ? <Projects /> : <Experience />}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
