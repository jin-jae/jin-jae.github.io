"use client";

import { useState, useEffect } from "react";

export default function AnimatedDots() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>Now under construction{".".repeat(dotCount)}</span>
  );
}