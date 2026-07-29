import { useEffect, useState } from "react";

const HEX_CHARS = "0123456789ABCDEF";

/**
 * Reveals `target` after `delayMs` by scrambling unresolved glyphs as hex digits,
 * decoding left-to-right like a terminal stream.
 *
 * @param {string} target
 * @param {number} [delayMs=0]
 * @returns {string}
 */
export function useHexDecode(target, delayMs = 0) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let cancelled = false;
    let intervalId;
    let iteration = 0;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (cancelled) return;

        const next = Array.from(target, (char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return char;
          return HEX_CHARS.charAt(Math.floor(Math.random() * HEX_CHARS.length));
        }).join("");

        setDisplay(next);

        if (iteration >= target.length) {
          clearInterval(intervalId);
          setDisplay(target);
          return;
        }

        iteration += 1 / 3;
      }, 28);
    }, delayMs);

    return () => {
      cancelled = true;
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [target, delayMs]);

  return display;
}
