"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.5 });

  const trailX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="fixed z-[999] pointer-events-none rounded-full border border-white/20"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicking ? 40 : 32,
          height: clicking ? 40 : 32,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Main cursor dot */}
      <motion.div
        className="fixed z-[1000] pointer-events-none rounded-full bg-white"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicking ? 6 : 5,
          height: clicking ? 6 : 5,
          transition: "width 0.1s, height 0.1s",
        }}
      />
    </>
  );
}
