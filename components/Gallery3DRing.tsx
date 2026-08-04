"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  Github,
  Play,
  Pause,
  RotateCcw,
  SlidersHorizontal,
  Grid,
  Circle,
  X,
  ChevronRight,
  MoveHorizontal
} from "lucide-react";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  featured?: boolean;
  category?: string;
  highlights?: string[];
};

export type LayoutMode = "gallery" | "flat";

interface Gallery3DRingProps {
  items: ProjectItem[];
  className?: string;
}

export default function Gallery3DRing({ items, className = "" }: Gallery3DRingProps) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("gallery");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Control sliders for 3D flat arc mode
  const [cardWidth, setCardWidth] = useState<number>(290);
  const [orbitRadius, setOrbitRadius] = useState<number>(420);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.2);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(false);

  // 3D rotation angles
  const [rotY, setRotY] = useState<number>(0);
  const [rotX, setRotX] = useState<number>(5);

  // Drag & Inertia state
  const isDragging = useRef<boolean>(false);
  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);
  const isHovered = useRef<boolean>(false);

  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setAutoRotate(false);
      }
      const handleChange = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
        if (e.matches) setAutoRotate(false);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(240);
        setOrbitRadius(280);
      } else if (width < 1024) {
        setCardWidth(270);
        setOrbitRadius(360);
      } else {
        setCardWidth(290);
        setOrbitRadius(440);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 16.66;
      lastTime = currentTime;

      if (!isDragging.current && layoutMode === "flat") {
        if (Math.abs(velocity.current.x) > 0.01 || Math.abs(velocity.current.y) > 0.01) {
          setRotY((prev) => prev + velocity.current.x * delta);
          setRotX((prev) => Math.max(-30, Math.min(30, prev - velocity.current.y * delta)));
          velocity.current.x *= 0.93;
          velocity.current.y *= 0.93;
        } else if (autoRotate && !isHovered.current && !reducedMotion) {
          setRotY((prev) => (prev + rotationSpeed * delta) % 360);
        }
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [autoRotate, rotationSpeed, layoutMode, reducedMotion]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (layoutMode === "gallery") return;
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    lastPos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || layoutMode === "gallery") return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    const sensitivity = 0.35;
    setRotY((prev) => prev + dx * sensitivity);
    setRotX((prev) => Math.max(-30, Math.min(30, prev - dy * sensitivity)));

    velocity.current = { x: dx * sensitivity, y: dy * sensitivity };
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (layoutMode === "gallery") return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    velocity.current.x += delta * 0.05;
  };

  const handleResetView = () => {
    setRotY(0);
    setRotX(5);
    velocity.current = { x: 0, y: 0 };
  };

  const totalItems = items.length;
  const angleStep = 360 / Math.max(1, totalItems);

  return (
    <div className={`relative w-full overflow-hidden select-none py-2 ${className}`}>
      {/* Top Layout Switcher Controls */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 mb-5 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md shadow-sm text-xs font-semibold">
          <button
            onClick={() => setLayoutMode("gallery")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              layoutMode === "gallery"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
            }`}
          >
            <Grid size={14} />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => setLayoutMode("flat")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              layoutMode === "flat"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
            }`}
          >
            <Circle size={14} />
            <span>3D Flat Arc</span>
          </button>
        </div>

        {layoutMode === "flat" && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-1.5 rounded-lg border transition-all text-xs flex items-center gap-1 font-medium ${
                autoRotate
                  ? "bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              title={autoRotate ? "Pause Spin" : "Play Spin"}
            >
              {autoRotate ? <Pause size={13} /> : <Play size={13} />}
              <span className="hidden sm:inline">{autoRotate ? "Auto Spin" : "Paused"}</span>
            </button>

            <button
              onClick={handleResetView}
              className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-xs"
              title="Reset View"
            >
              <RotateCcw size={13} />
            </button>

            <button
              onClick={() => setShowControls(!showControls)}
              className={`p-1.5 rounded-lg border transition-all text-xs flex items-center gap-1 font-medium ${
                showControls
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              title="Adjust Settings"
            >
              <SlidersHorizontal size={13} />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        )}
      </div>

      {layoutMode === "flat" && showControls && (
        <div className="relative z-30 max-w-xl mx-auto px-4 mb-5">
          <div className="p-3.5 rounded-xl bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl shadow-xl text-xs grid grid-cols-1 sm:grid-cols-3 gap-3 text-zinc-300">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between font-medium">
                <span>Card Width</span>
                <span className="text-orange-400">{cardWidth}px</span>
              </div>
              <input
                type="range"
                min="200"
                max="380"
                step="10"
                value={cardWidth}
                onChange={(e) => setCardWidth(Number(e.target.value))}
                className="accent-orange-500 cursor-pointer h-1 bg-zinc-800 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between font-medium">
                <span>3D Radius</span>
                <span className="text-orange-400">{orbitRadius}px</span>
              </div>
              <input
                type="range"
                min="240"
                max="600"
                step="15"
                value={orbitRadius}
                onChange={(e) => setOrbitRadius(Number(e.target.value))}
                className="accent-orange-500 cursor-pointer h-1 bg-zinc-800 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between font-medium">
                <span>Speed</span>
                <span className="text-orange-400">{rotationSpeed.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.05"
                value={rotationSpeed}
                onChange={(e) => setRotationSpeed(Number(e.target.value))}
                className="accent-orange-500 cursor-pointer h-1 bg-zinc-800 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {layoutMode === "flat" && (
        <div className="relative z-20 flex justify-center mb-3 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-[10px] text-zinc-400 backdrop-blur-sm">
            <MoveHorizontal size={12} className="text-orange-400 animate-pulse" />
            <span>Drag horizontally or scroll wheel to rotate 3D arc</span>
          </div>
        </div>
      )}

      {/* Layout rendering */}
      {layoutMode === "gallery" ? (
        /* Compact Sleek Gallery Grid View */
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
          {items.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/90 border border-zinc-800/80 hover:border-orange-500/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Sleeker, slightly lower aspect ratio image container */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-3 bg-zinc-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-2.5 left-2.5 bg-orange-500/90 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md uppercase tracking-wider">
                      <Sparkles size={10} /> Featured
                    </div>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-zinc-800/60 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] px-2 py-0.5 font-medium rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[11px] font-bold text-orange-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 whitespace-nowrap">
                  Details <ChevronRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* 3D Flat Arc View */
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          className="relative w-full h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative transition-transform duration-100 ease-out"
            style={{
              width: `${cardWidth}px`,
              height: `${cardWidth * 1.2}px`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`
            }}
          >
            {items.map((project, idx) => {
              const itemAngle = idx * angleStep;
              const rad = (itemAngle * Math.PI) / 180;
              const xOffset = Math.sin(rad) * orbitRadius * 0.9;
              const zOffset = Math.cos(rad) * (orbitRadius * 0.35);
              const rotYOffset = Math.sin(rad) * 25;
              const cardTransform = `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotYOffset}deg)`;

              const normRotY = ((rotY % 360) + 360) % 360;
              const angleFromCamera = Math.abs(((itemAngle + normRotY + 180) % 360) - 180);
              const opacity = Math.max(0.4, 1 - angleFromCamera / 240);

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 transition-transform duration-700 ease-out group cursor-pointer"
                  style={{
                    transform: cardTransform,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-2xl p-3.5 bg-zinc-900/90 dark:bg-zinc-950/95 border border-zinc-800 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-orange-500/60"
                    style={{ opacity }}
                  >
                    <div className="relative w-full h-36 rounded-xl overflow-hidden bg-zinc-950 mb-2.5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {project.featured && (
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                          <Sparkles size={10} /> Featured
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1 line-clamp-1 group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed mb-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-1.5">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] px-1.5 py-0.5 font-medium rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-orange-400 flex items-center gap-0.5">
                          Details <ChevronRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all z-10"
            >
              <X size={16} />
            </button>

            <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-5 bg-zinc-950">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              {selectedProject.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-400 mb-2">
                  <Sparkles size={13} /> Featured Project
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg font-bold text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md hover:shadow-orange-500/20 transition-all hover:scale-[1.01]"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-all"
                >
                  <Github size={15} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
