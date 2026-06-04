import "./Hero.css";
import { useState, useEffect } from "react";

 function ScrambleText({ text }) {
        const [displayText, setDisplayText] = useState(text);
        const chars = "01X8FA4000lw$a0$sp<>{}[]*^%~&#@";

        
        const scramble = () => {
        let iteration = 0;
        
        // Changed to 20ms for a smoother, higher frame rate
        const interval = setInterval(() => {
        setDisplayText((prev) => 
            prev
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 4; 
            }, 20);
        };

    useEffect(() => {
        scramble();
    }, []);
    
    return (
        <span className="scramble-span">
        {displayText}
        </span>
    );
    }

function Hero(){


    return (
    <section className="hero">
      <div className="hero-content">
        <h1><ScrambleText text="From Assembly to React." /></h1>
        <p className="subtitle"><ScrambleText text="Systems & Frontend Engineer" /></p>
        <p className="description">
          <ScrambleText text="Bridging the gap between low-level architecture and high-performance interactive interfaces." />
        </p>
      </div>
    </section>
  );
}

export default Hero;