import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  color: string;
}

interface SynapseImpulse {
  fromIndex: number;
  toIndex: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
}

interface LightSpot {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
}

export const CosmicNeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Neural Nodes (Particles)
    const particleCount = Math.min(Math.floor((width * height) / 16000), 70);
    const particles: Particle[] = [];

    const colors = [
      'rgba(56, 189, 248, ',  // Cyan
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(168, 85, 247, ',  // Purple
      'rgba(255, 255, 255, ',  // Star White
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.175,
        vy: (Math.random() - 0.5) * 0.175,
        size: Math.random() * 2 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Synaptic Impulses (signals traveling along connections)
    const impulses: SynapseImpulse[] = [];
    const maxImpulses = 18;

    // Glowing Ambient Neural Light Spots
    const lightSpots: LightSpot[] = [
      {
        x: width * 0.2,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.3,
        vx: 0.075,
        vy: 0.05,
        color: 'rgba(14, 165, 233, 0.08)', // Cyan aura
        alpha: 0.08,
      },
      {
        x: width * 0.8,
        y: height * 0.65,
        radius: Math.min(width, height) * 0.35,
        vx: -0.05,
        vy: 0.06,
        color: 'rgba(147, 51, 234, 0.07)', // Purple aura
        alpha: 0.07,
      },
      {
        x: width * 0.5,
        y: height * 0.85,
        radius: Math.min(width, height) * 0.25,
        vx: 0.04,
        vy: -0.075,
        color: 'rgba(99, 102, 241, 0.06)', // Indigo aura
        alpha: 0.06,
      },
    ];

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Soft Glowing Light Spots (synaptic background ambience)
      for (const spot of lightSpots) {
        spot.x += spot.vx;
        spot.y += spot.vy;

        if (spot.x < -100 || spot.x > width + 100) spot.vx *= -1;
        if (spot.y < -100 || spot.y > height + 100) spot.vy *= -1;

        const gradient = ctx.createRadialGradient(
          spot.x,
          spot.y,
          10,
          spot.x,
          spot.y,
          spot.radius
        );
        gradient.addColorStop(0, spot.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Particles & Neural Connection Web
      const validPairs: { i: number; j: number; dist: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity warp
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxMouseDist = 180;

        let extraAlpha = 0;
        if (dist < maxMouseDist) {
          extraAlpha = (1 - dist / maxMouseDist) * 0.5;
          p.x -= (dx / dist) * 0.25;
          p.y -= (dy / dist) * 0.25;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(p.baseAlpha + extraAlpha, 1)})`;
        ctx.fill();

        // Check pairs
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p.x - p2.x;
          const ndy = p.y - p2.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          const maxConnectDist = 140;

          if (nDist < maxConnectDist) {
            validPairs.push({ i, j, dist: nDist });

            const lineAlpha = (1 - nDist / maxConnectDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 3. Spawn & Update Synaptic Impulses (Electrical signals traveling through axon links)
      if (impulses.length < maxImpulses && validPairs.length > 0 && Math.random() < 0.15) {
        const pair = validPairs[Math.floor(Math.random() * validPairs.length)];
        impulses.push({
          fromIndex: pair.i,
          toIndex: pair.j,
          progress: 0,
          speed: Math.random() * 0.01 + 0.006,
          color: Math.random() > 0.5 ? '#38bdf8' : '#a855f7',
        });
      }

      for (let k = impulses.length - 1; k >= 0; k--) {
        const imp = impulses[k];
        imp.progress += imp.speed;

        if (imp.progress >= 1) {
          impulses.splice(k, 1);
          continue;
        }

        const pFrom = particles[imp.fromIndex];
        const pTo = particles[imp.toIndex];

        if (pFrom && pTo) {
          const ix = pFrom.x + (pTo.x - pFrom.x) * imp.progress;
          const iy = pFrom.y + (pTo.y - pFrom.y) * imp.progress;

          // Draw impulse signal dot
          ctx.beginPath();
          ctx.arc(ix, iy, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = imp.color;
          ctx.shadowColor = imp.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};
