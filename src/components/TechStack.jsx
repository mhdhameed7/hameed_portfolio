import React, { useRef, useEffect } from "react";

// You can customize the icons, colors, and names here.
// Icons are sourced from simpleicons.org
const techStack = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", color: "#00C7B7" },
  { name: "Terminal", icon: "https://cdn.simpleicons.org/gnometerminal/4EAA25", color: "#4EAA25" },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rotX = useRef(0.3);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0.005);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const lastMX = useRef(0);
  const lastMY = useRef(0);
  const dragVX = useRef(0);
  const dragVY = useRef(0);
  const rafId = useRef();
  const itemEls = useRef([]);

  const RADIUS = 160;
  const n = techStack.length;

  // Fibonacci sphere positions algorithm to evenly distribute icons
  const positions = useRef([]);
  
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, [n]);

  function project(pos, rx, ry) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = pos.x * cosY - pos.z * sinY;
    const z1 = pos.x * sinY + pos.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y2 = pos.y * cosX - z1 * sinX;
    const z2 = pos.y * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
  }

  useEffect(() => {
    const els = itemEls.current;

    function render() {
      if (!isDragging.current && !isHovered.current) {
        rotY.current += velY.current;
        rotX.current += velX.current;
        velX.current *= 0.97;
        velY.current = velY.current * 0.99 + 0.005 * 0.01;
        if (rotX.current > 0.6) velX.current -= 0.0005;
        if (rotX.current < -0.1) velX.current += 0.0005;
      } else if (isHovered.current && !isDragging.current) {
        velX.current *= 0.95;
        velY.current *= 0.95;
        rotY.current += velY.current;
        rotX.current += velX.current;
      }

      const projected = positions.current.map((pos, i) => ({
        el: els[i],
        p: project(pos, rotX.current, rotY.current),
      }));

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return;
          const x = p.x * RADIUS + 210 - 36;
          const y = p.y * RADIUS + 210 - 36;
          const depth = (p.z + 1) / 2;
          const opacity = 0.25 + depth * 0.75;
          const scale = 0.55 + depth * 0.55;
          el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:${opacity};transform:scale(${scale});z-index:${idx};width:72px;height:72px;`;
        });

      rafId.current = requestAnimationFrame(render);
    }

    rafId.current = requestAnimationFrame(render);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  // --- Mouse & Touch Events for dragging ---
  const onMouseDown = (e) => {
    isDragging.current = true;
    lastMX.current = e.clientX;
    lastMY.current = e.clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMX.current;
      const dy = e.clientY - lastMY.current;
      dragVX.current = dy * 0.005;
      dragVY.current = dx * 0.005;
      rotX.current += dragVX.current;
      rotY.current += dragVY.current;
      lastMX.current = e.clientX;
      lastMY.current = e.clientY;
    };
    
    const onMouseUp = () => {
      if (isDragging.current) {
        velX.current = dragVX.current;
        velY.current = dragVY.current || 0.004;
        isDragging.current = false;
      }
    };
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onTouchStart = (e) => {
    isDragging.current = true;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };
  
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastMX.current;
    const dy = e.touches[0].clientY - lastMY.current;
    dragVX.current = dy * 0.005;
    dragVY.current = dx * 0.005;
    rotX.current += dragVX.current;
    rotY.current += dragVY.current;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
  };
  
  const onTouchEnd = () => {
    velX.current = dragVX.current;
    velY.current = dragVY.current || 0.004;
    isDragging.current = false;
  };

  return (
    <div className="space-y-4 w-full py-4 flex flex-col items-center justify-center">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-3 dark:text-white/40 text-slate-400 mb-8 mx-auto">
        <div className="h-px w-10 bg-gradient-to-r from-transparent dark:to-white/30 to-slate-400/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">
          {techStack.length} technologies · daily stack
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent dark:to-white/30 to-slate-400/30" />
      </div>

      {/* Dome sphere container */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center select-none mx-auto"
        style={{ height: "460px", cursor: "grab", maxWidth: "420px" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Effects matching Contact Section */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] hidden dark:block pointer-events-none z-[-1]"></div>

        {/* Subtle Ambient glow behind sphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 255, 220, 0.05) 0%, transparent 65%)",
          }}
        />

        {/* 3D Scene */}
        <div
          ref={sceneRef}
          className="relative scale-75 md:scale-100"
          style={{ width: "420px", height: "420px" }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              ref={(el) => { if (el) itemEls.current[i] = el; }}
              style={{ position: "absolute", width: 72, height: 72 }}
            >
              <div
                className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-125 cursor-pointer group relative"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15, 23, 42, 0.7)",
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 8px 32px -8px ${tech.color}50`,
                }}
                onMouseEnter={(e) => {
                  isHovered.current = true;
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 0 25px 0px ${tech.color}80, inset 0 0 15px 0px ${tech.color}30`;
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.9)";
                  e.currentTarget.style.zIndex = "50";
                }}
                onMouseLeave={(e) => {
                  isHovered.current = false;
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = `0 8px 32px -8px ${tech.color}50`;
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
                  e.currentTarget.style.zIndex = "0";
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                />
                <span
                  className="text-[9px] text-white/70 font-mono uppercase tracking-[0.1em] text-center leading-[1.2] transition-colors duration-300 group-hover:text-white font-bold"
                >
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
