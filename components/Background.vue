<template>
  <div class="absolute inset-0 -z-10 pointer-events-none">
    <!-- Base gradient canvas -->
    <div class="bg-canvas"></div>

    <!-- Glassmorphism layer -->
    <div class="glass-mask"></div>

    <!-- Animated neon orbs -->
    <div class="orb orb-a"></div>
    <div class="orb orb-b"></div>
    <div class="orb orb-c"></div>

    <!-- Constellation/grid overlay -->
    <svg class="net-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g class="net-lines">
        <line x1="5" y1="15" x2="25" y2="8"/>
        <line x1="25" y1="8" x2="40" y2="20"/>
        <line x1="40" y1="20" x2="60" y2="12"/>
        <line x1="60" y1="12" x2="80" y2="22"/>
        <line x1="15" y1="40" x2="35" y2="35"/>
        <line x1="35" y1="35" x2="55" y2="45"/>
        <line x1="55" y1="45" x2="75" y2="38"/>
        <line x1="20" y1="70" x2="40" y2="60"/>
        <line x1="40" y1="60" x2="65" y2="70"/>
        <line x1="65" y1="70" x2="85" y2="62"/>
      </g>
      <g class="net-nodes">
        <circle cx="5" cy="15" r="0.5"/>
        <circle cx="25" cy="8" r="0.5"/>
        <circle cx="40" cy="20" r="0.5"/>
        <circle cx="60" cy="12" r="0.5"/>
        <circle cx="80" cy="22" r="0.5"/>
        <circle cx="15" cy="40" r="0.5"/>
        <circle cx="35" cy="35" r="0.5"/>
        <circle cx="55" cy="45" r="0.5"/>
        <circle cx="75" cy="38" r="0.5"/>
        <circle cx="20" cy="70" r="0.5"/>
        <circle cx="40" cy="60" r="0.5"/>
        <circle cx="65" cy="70" r="0.5"/>
        <circle cx="85" cy="62" r="0.5"/>
      </g>
    </svg>
  </div>
</template>

<style>
/* Pastel base with neon accents (light) */
.bg-canvas {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(120rem 60rem at 15% -10%, rgba(16, 185, 129, 0.18), transparent 60%), /* pastel emerald */
    radial-gradient(80rem 40rem at 85% 0%, rgba(59, 130, 246, 0.15), transparent 65%),  /* soft blue */
    radial-gradient(60rem 30rem at 50% 110%, rgba(20, 184, 166, 0.18), transparent 70%), /* teal */
    linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
}

/* Noise for texture */
.bg-canvas::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
  background-size: 120px 120px;
}

/* Glass layer for soft blur + vignette */
.glass-mask {
  position: absolute;
  inset: -20vh -10vw;
  pointer-events: none;
  background: radial-gradient(80rem 40rem at 50% -10%, rgba(255,255,255,0.32), rgba(255,255,255,0.06) 60%, transparent 70%);
  -webkit-mask-image: radial-gradient(90rem 60rem at 50% 0%, rgba(0,0,0,0.7), transparent 70%);
          mask-image: radial-gradient(90rem 60rem at 50% 0%, rgba(0,0,0,0.7), transparent 70%);
  backdrop-filter: blur(6px) saturate(120%);
}

/* Neon orbs */
.orb {
  position: absolute;
  width: 42rem;
  height: 42rem;
  filter: blur(70px);
  opacity: 0.25;
  border-radius: 9999px;
  will-change: transform, opacity;
  transform: translateZ(0);
  pointer-events: none;
}

.orb-a {
  top: -12rem;
  left: -10rem;
  background: radial-gradient(circle at 40% 40%, rgba(16,185,129,0.85), rgba(16,185,129,0) 60%); /* neon emerald */
  animation: float-a 26s ease-in-out infinite, glow 10s ease-in-out infinite;
}

.orb-b {
  bottom: -14rem;
  right: -12rem;
  background: radial-gradient(circle at 60% 60%, rgba(34,197,94,0.75), rgba(34,197,94,0) 60%); /* neon green */
  animation: float-b 24s ease-in-out infinite, glow 9s ease-in-out infinite;
}

.orb-c {
  top: 40%;
  left: 60%;
  background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.7), rgba(59,130,246,0) 60%); /* neon blue */
  width: 28rem;
  height: 28rem;
  filter: blur(50px);
  animation: float-c 28s ease-in-out infinite, glow 12s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.22; }
  50% { opacity: 0.32; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .orb { animation: none !important; }
  .net-nodes circle { animation: none !important; }
}

@keyframes float-a {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  30%  { transform: translate3d(5rem, 2rem, 0) scale(1.04); }
  60%  { transform: translate3d(1rem, 5rem, 0) scale(0.98); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}
@keyframes float-b {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  30%  { transform: translate3d(-4rem, -3rem, 0) scale(1.03); }
  60%  { transform: translate3d(-1rem, 2rem, 0) scale(0.99); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}
@keyframes float-c {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  30%  { transform: translate3d(2rem, -2rem, 0) scale(1.02); }
  60%  { transform: translate3d(-2rem, 1rem, 0) scale(1.01); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

/* Dark mode palette */
html.dark .bg-canvas {
  background-image:
    radial-gradient(120rem 60rem at 20% -10%, rgba(0, 255, 127, 0.16), transparent 60%), /* neon green */
    radial-gradient(80rem 40rem at 85% 0%, rgba(0, 229, 255, 0.10), transparent 65%),   /* subtle cyan */
    radial-gradient(60rem 30rem at 50% 110%, rgba(0, 255, 127, 0.10), transparent 70%),
    linear-gradient(180deg, #000000 0%, #090a0f 100%);
}

html.dark .glass-mask {
  background: radial-gradient(80rem 40rem at 50% -10%, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 60%, transparent 70%);
  backdrop-filter: blur(8px) saturate(110%);
}

html.dark .orb-a { background: radial-gradient(circle at 40% 40%, rgba(0,255,127,0.85), rgba(0,255,127,0) 60%); opacity: 0.35; }
html.dark .orb-b { background: radial-gradient(circle at 60% 60%, rgba(0,229,255,0.55), rgba(0,229,255,0) 60%); opacity: 0.28; }
html.dark .orb-c { background: radial-gradient(circle at 50% 50%, rgba(0,255,127,0.70), rgba(0,255,127,0) 60%); opacity: 0.28; }

/* Constellation overlay styling */
.net-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.10;
}
.net-lines line {
  stroke: #10b981; /* emerald */
  stroke-width: 0.2;
}
.net-nodes circle {
  fill: #10b981;
}
@keyframes twinkle { 0%,100%{opacity:.8} 50%{opacity:.4} }
.net-nodes circle:nth-child(odd) { animation: twinkle 3.5s ease-in-out infinite; }
.net-nodes circle:nth-child(even) { animation: twinkle 5s ease-in-out infinite 1.2s; }

html.dark .net-overlay { opacity: 0.35; }
html.dark .net-lines line { stroke: #00ff7f; }
html.dark .net-nodes circle { fill: #00ff7f; }

/* Responsiveness tweaks */
@media (max-width: 768px) {
  .orb { width: 26rem; height: 26rem; filter: blur(48px); }
  .orb-a { top: -8rem; left: -8rem; }
  .orb-b { bottom: -10rem; right: -10rem; }
  .orb-c { top: 55%; left: 55%; width: 20rem; height: 20rem; }
}
</style>


