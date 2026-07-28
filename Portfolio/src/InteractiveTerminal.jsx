import { useEffect, useRef, useState } from "react";
import "./InteractiveTerminal.css";

const InteractiveTerminal = ({ title, command, outputLines }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    timersRef.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const showOutput = () => {
    let lineIndex = 0;

    const lineInterval = setInterval(() => {
      const line = outputLines.at(lineIndex);
      if (line !== undefined) {
        setVisibleLines((prev) => [...prev, line]);
      }

      lineIndex += 1;

      if (lineIndex >= outputLines.length) {
        clearInterval(lineInterval);
        timersRef.current = timersRef.current.filter((id) => id !== lineInterval);
        setIsFinished(true);
        setIsRunning(false);
      }
    }, 600);

    timersRef.current.push(lineInterval);
  };

  const handleRun = () => {
    if (isRunning || isFinished) return;

    clearTimers();
    setIsRunning(true);
    setDisplayedCommand("");
    setVisibleLines([]);

    let cmdIndex = 0;

    const typeInterval = setInterval(() => {
      setDisplayedCommand(command.slice(0, cmdIndex + 1));
      cmdIndex += 1;

      if (cmdIndex >= command.length) {
        clearInterval(typeInterval);
        timersRef.current = timersRef.current.filter((id) => id !== typeInterval);
        showOutput();
      }
    }, 50);

    timersRef.current.push(typeInterval);
  };

  const handleReset = () => {
    clearTimers();
    setIsRunning(false);
    setIsFinished(false);
    setDisplayedCommand("");
    setVisibleLines([]);
  };

  return (
    <div className="interactive-terminal">
      <div className="term-header">
        <div className="term-title">{title}</div>
        <div className="term-actions">
          {isFinished && (
            <button type="button" onClick={handleReset} className="term-btn reset">
              Reset
            </button>
          )}
          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning || isFinished}
            className={`term-btn run ${isRunning ? "running" : ""}`}
          >
            {isRunning ? "Executing..." : isFinished ? "Done" : "Run"}
          </button>
        </div>
      </div>

      <div className="term-body terminal-font">
        <div className="term-line">
          <span className="prompt">$</span> {displayedCommand}
          {isRunning && !visibleLines.length && <span className="cursor">_</span>}
        </div>

        {visibleLines.map((line, index) => (
          <div
            key={`line-${index}`}
            className="term-line output"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}

        {isFinished && (
          <div className="term-line">
            <span className="cursor">_</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
