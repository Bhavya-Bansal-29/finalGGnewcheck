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
      setTimeout(() => setBlinking(false), 400);
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
        initial={false}
        animate={blinking ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: coords.y - 12,
          left: coords.x - 12,
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.6)", // white fill with 60% opacity
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </AnimatePresence>
  );
};
