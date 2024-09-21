"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  //   const [hoverSize, setHoverSize] = useState({ width: 0, height: 0 });

  const springConfig = { damping: 40, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // const handleMouseEnter = (e) => {
    //   const target = e.target;
    //   if (
    //     target.tagName.toLowerCase() === "button" ||
    //     target.tagName.toLowerCase() === "a"
    //   ) {
    //     setIsHovering(true);
    //     const rect = target.getBoundingClientRect();
    //     setHoverSize({ width: rect.width, height: rect.height });
    //   }
    // };

    // const handleMouseLeave = () => {
    //   setIsHovering(false);
    // };

    window.addEventListener("mousemove", moveCursor);
    // document.querySelectorAll("button, a").forEach((el) => {
    //   el.addEventListener("mouseenter", handleMouseEnter);
    //   el.addEventListener("mouseleave", handleMouseLeave);
    // });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      //   document.querySelectorAll("button, a").forEach((el) => {
      //     // el.removeEventListener("mouseenter", handleMouseEnter);
      //     el.removeEventListener("mouseleave", handleMouseLeave);
      //   });
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="absolute rounded-full border border-primary"
        style={{
          width: isHovering ? hoverSize.width + 4 : 24,
          height: isHovering ? hoverSize.height + 4 : 24,
          x: isHovering ? -(hoverSize.width / 2 + 2) : -12,
          y: isHovering ? -(hoverSize.height / 2 + 2) : -12,
          scale: 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        animate={{
          scale: isHovering ? 1 : [1, 1.1, 1],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: isHovering ? 0 : Infinity,
        }}
      />
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-primary"
        style={{
          x: -3,
          y: -3,
        }}
      />
    </motion.div>
  );
}
