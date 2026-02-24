"use client";

import React, { useRef, useEffect } from "react";

interface WavesProps {
    lineColor?: string;
    backgroundColor?: string;
    waveSpeedX?: number;
    waveSpeedY?: number;
    waveAmpX?: number;
    waveAmpY?: number;
    xGap?: number;
    yGap?: number;
    friction?: number;
    tension?: number;
    maxCursorMove?: number;
}

export const Waves: React.FC<WavesProps> = ({
    lineColor = "rgba(197, 232, 127, 0.3)",
    backgroundColor = "transparent",
    waveSpeedX = 0.0125,
    waveSpeedY = 0.005,
    waveAmpX = 40,
    waveAmpY = 20,
    xGap = 12,
    yGap = 36,
    friction = 0.925,
    tension = 0.005,
    maxCursorMove = 120,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const points: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

        const initPoints = () => {
            points.length = 0;
            for (let x = 0; x < width + xGap; x += xGap) {
                for (let y = 0; y < height + yGap; y += yGap) {
                    points.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initPoints();
        };

        window.addEventListener("resize", handleResize);
        initPoints();

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const render = (time: number) => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            points.forEach((p) => {
                // Wave motion
                const waveX = Math.sin(time * waveSpeedX + p.originY * 0.01) * waveAmpX;
                const waveY = Math.cos(time * waveSpeedY + p.originX * 0.01) * waveAmpY;

                const targetX = p.originX + waveX;
                const targetY = p.originY + waveY;

                // Mouse interaction
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxCursorMove) {
                    const force = (maxCursorMove - dist) / maxCursorMove;
                    p.vx -= dx * force * tension;
                    p.vy -= dy * force * tension;
                }

                p.vx += (targetX - p.x) * tension;
                p.vy += (targetY - p.y) * tension;

                p.vx *= friction;
                p.vy *= friction;

                p.x += p.vx;
                p.y += p.vy;

                // Draw point
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = lineColor;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(() => render(performance.now() * 0.1));
        };

        render(0);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap, friction, tension, maxCursorMove]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: backgroundColor }}
        />
    );
};
