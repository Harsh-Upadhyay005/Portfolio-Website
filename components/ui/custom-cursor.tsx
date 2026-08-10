"use client";

import React, { useEffect, useRef, useState } from "react";

export type CometMode = "classic" | "dotted" | "fire";

const modeNames: Record<CometMode, string> = {
  classic: "Classic Comet",
  dotted: "Dotted Trail",
  fire: "Fire Comet",
};

interface Dot {
  x: number;
  y: number;
  life: number;
}

export default function CustomCursor() {
  const [mode, setMode] = useState<CometMode>("classic");
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const lastPos = useRef({ x: -100, y: -100 });
  const lastDotPos = useRef({ x: -100, y: -100 });
  const modeRef = useRef<CometMode>("classic");

  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const savedMode = localStorage.getItem("comet_cursor_mode") as CometMode | null;
    if (savedMode && modeNames[savedMode]) {
      setMode(savedMode);
      modeRef.current = savedMode;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const TRAIL_LENGTH = 24;
    const points = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const updateChain = (ease: number) => {
      const { x: mouseX, y: mouseY } = mousePos.current;
      points[0].x += (mouseX - points[0].x) * ease;
      points[0].y += (mouseY - points[0].y) * ease;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * ease;
        points[i].y += (points[i - 1].y - points[i].y) * ease;
      }
    };

    let animFrameId: number;

    const draw = () => {
      const { x: mouseX, y: mouseY } = mousePos.current;
      const currentMode = modeRef.current;
      const head = headRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (head) {
        head.style.left = `${mouseX}px`;
        head.style.top = `${mouseY}px`;
      }

      if (currentMode === "classic") {
        if (head) {
          head.style.background =
            "radial-gradient(circle,#fff 0%,#00f0ff 60%,transparent 75%)";
        }
        updateChain(0.45);
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const t = i / points.length;
          const width = Math.max(0.5, 7 * (1 - t));
          const alpha = Math.max(0, 1 - t * 1.1);
          const hue = 190 + t * 70;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(${hue},100%,65%,${alpha})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.shadowBlur = 14;
          ctx.shadowColor = `hsla(${hue},100%,60%,${alpha})`;
          ctx.stroke();
        }
      }

      if (currentMode === "dotted") {
        if (head) {
          head.style.background =
            "radial-gradient(circle,#fff 0%,#39ff14 60%,transparent 75%)";
        }
        const dist = Math.hypot(
          mouseX - lastDotPos.current.x,
          mouseY - lastDotPos.current.y
        );
        if (dist > 10) {
          dotsRef.current.push({ x: mouseX, y: mouseY, life: 1 });
          lastDotPos.current = { x: mouseX, y: mouseY };
        }
        dotsRef.current.forEach((d) => (d.life -= 0.025));
        for (let i = dotsRef.current.length - 1; i >= 0; i--) {
          if (dotsRef.current[i].life <= 0) dotsRef.current.splice(i, 1);
        }
        dotsRef.current.forEach((d) => {
          const size = Math.max(1, 6 * d.life);
          ctx.beginPath();
          ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(110,100%,55%,${d.life})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(110,100%,55%,${d.life})`;
          ctx.fill();
        });
      }

      if (currentMode === "fire") {
        if (head) {
          head.style.background =
            "radial-gradient(circle,#fff 0%,#ffcc00 50%,transparent 75%)";
        }
        updateChain(0.4);
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const t = i / points.length;
          const width = Math.max(0.5, 9 * (1 - t));
          const alpha = Math.max(0, 1 - t * 1.1);
          const hue = 50 - t * 50;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(${hue},100%,55%,${alpha})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.shadowBlur = 16;
          ctx.shadowColor = `hsla(${hue},100%,50%,${alpha})`;
          ctx.stroke();
        }
      }

      lastPos.current = { x: mouseX, y: mouseY };
      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (isMobile) return null;

  const changeMode = (newMode: CometMode) => {
    setMode(newMode);
    modeRef.current = newMode;
    dotsRef.current = [];
    if (typeof window !== "undefined") {
      localStorage.setItem("comet_cursor_mode", newMode);
    }
  };

  return (
    <>
      {/* Hide native cursor on desktop */}
      <style dangerouslySetInnerHTML={{
        __html: `
          *, *::before, *::after {
            cursor: none !important;
          }
        `
      }} />

      {/* Canvas for Comet Trails */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9990]"
      />

      {/* Glowing Head Dot */}
      <div
        ref={headRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-lg"
      />

      {/* Floating Mode Switcher Button & Menu */}
      <div className="fixed bottom-5 right-5 z-[10000] flex flex-col items-end gap-2 pointer-events-auto select-none">
        {showControls && (
          <div className="flex flex-wrap items-center gap-1.5 p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            {(Object.keys(modeNames) as CometMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => changeMode(m)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  mode === m
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md scale-105 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {modeNames[m]}
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowControls((prev) => !prev)}
          className="flex items-center gap-2 px-3.5 py-2 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/15 text-xs text-white rounded-full shadow-xl transition-all hover:scale-105"
          title="Change Cursor Trail"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Trail: <strong className="text-cyan-400 font-semibold">{modeNames[mode]}</strong></span>
          <span className="text-[10px] text-white/50">{showControls ? "▲" : "▼"}</span>
        </button>
      </div>
    </>
  );
}