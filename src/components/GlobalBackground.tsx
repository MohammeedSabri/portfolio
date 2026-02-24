'use client';

import { useEffect, useRef } from 'react';

export default function GlobalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let animationFrameId: number;

        // Dynamic formula for maximum performance
        const targetFPS = 60;
        const calculateParticleCount = () => {
            const area = width * height;
            // E.g., 1920x1080 ~ 2M area. 2M / 15000 = ~138 particles. Cap at 120.
            const calculated = Math.floor(area / 15000);
            return Math.min(Math.max(calculated, 40), 120);
        };

        let particleCount = calculateParticleCount();
        const connectionDistance = 160;
        const mouse = { x: -1000, y: -1000, radius: 250 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseX: number;
            baseY: number;
            size: number;
            color: string;

            constructor(x?: number, y?: number) {
                this.x = x !== undefined ? x : Math.random() * width;
                this.y = y !== undefined ? y : Math.random() * height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                const colors = ["#66fcf1", "#6c63ff", "#c8e6ff"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Natural movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges smoothly
                if (this.x < 0) { this.x = 0; this.vx *= -1; }
                if (this.x > width) { this.x = width; this.vx *= -1; }
                if (this.y < 0) { this.y = 0; this.vy *= -1; }
                if (this.y > height) { this.y = height; this.vy *= -1; }

                // Fluid/Water ripple physics
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;

                    // The core "ripple" formula:
                    // If extremely close to cursor center, repulse rapidly away.
                    // If at the outer edges of the mouse radius, attract slightly to form borders.
                    const normalizedDistance = distance / mouse.radius;
                    // Force = positive (attract) or negative (repulse)
                    // Repel strongly when distance is near 0. Attract when distance is near 1.
                    const force = (normalizedDistance - 0.4) * 0.4; // Tweakable water tension

                    this.vx += forceDirectionX * force;
                    this.vy += forceDirectionY * force;

                    // Friction to simulate fluid resistance
                    this.vx *= 0.92;
                    this.vy *= 0.92;
                } else {
                    // Return to normal speed when cursor leaves
                    const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                    if (currentSpeed > 1) {
                        this.vx *= 0.95;
                        this.vy *= 0.95;
                    } else if (currentSpeed < 0.3) {
                        this.vx *= 1.05;
                        this.vy *= 1.05;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        const init = () => {
            particleCount = calculateParticleCount();
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        let lastTime = 0;
        const fpsInterval = 1000 / targetFPS;

        const animate = (timestamp: number) => {
            animationFrameId = requestAnimationFrame(animate);

            // FPS Limiter to ensure we don't cook the GPU on high-refresh displays
            const elapsed = timestamp - lastTime;
            if (elapsed < fpsInterval) return;
            lastTime = timestamp - (elapsed % fpsInterval);

            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw synapse connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(102, 252, 241, ${0.8 - distance / connectionDistance})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Only re-init if screen size changes drastically to save state
            const newParticleCount = calculateParticleCount();
            if (Math.abs(newParticleCount - particles.length) > 10) {
                init();
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        init();
        requestAnimationFrame((time) => {
            lastTime = time;
            animate(time);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
            {/* The high-performance fluid canvas background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
