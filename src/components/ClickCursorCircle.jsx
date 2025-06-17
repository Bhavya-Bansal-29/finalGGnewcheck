import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ClickCursorCircle = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 400); // faster blink
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cursor-circle"
        animate={{
          left: coords.x - 12,
          top: coords.y - 12,
          opacity: blinking ? [1, 0.2, 1] : 1,
          scale: blinking ? [1, 1.3, 1] : 1,
        }}
        transition={{
          duration: blinking ? 0.4 : 0.15,
          ease: "easeInOut",
        }}
        className="fixed z-[9999] w-6 h-6 rounded-full border-2 border-white pointer-events-none"
      />
    </AnimatePresence>
  );
};
