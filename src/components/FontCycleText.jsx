import { useState, useEffect } from "react";
import gsap from "gsap";

export default function FontCycleText() {
const fonts = [
  "'Anton', sans-serif",              // Bold, condensed display
  "'Playfair Display', serif",        // Elegant serif
  "'Roboto Mono', monospace",         // Monospace technical look
  "'Pacifico', cursive",              // Handwritten script
  "'Bebas Neue', sans-serif",         // Clean display sans
  "'Lobster', cursive",               // Decorative script
  "'Fjalla One', sans-serif",         // Heavy all caps
  "'Caveat', cursive",                // Light handwriting
  "'Abril Fatface', serif",           // Dramatic display serif
  "'Rubik Mono One', sans-serif",     // Ultra-bold mono sans
];



  const [currentFont, setCurrentFont] = useState(fonts[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % fonts.length;
      setCurrentFont(fonts[index]);
    }, 400);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCurrentFont("Helvetica Neue");
    }, 7000);

    gsap.fromTo(
      "#brand-name",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundColor: `black` }} // Adjust path to your image
    >
      <h1 id="brand-name"
        style={{ fontFamily: currentFont }}
        className="text-6xl font-bold text-white">
            <span className="opacity-0 animate-fade-in"> Hi, We're</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Momentum
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Media
            </span>
          </h1>
    </div>
  );
}
