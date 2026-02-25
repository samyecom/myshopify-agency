"use client";

import React, { useRef, useEffect } from 'react';

interface PixelBlastProps {
    variant?: 'circle' | 'square';
    pixelSize?: number;
    color?: string;
    patternScale?: number;
    patternDensity?: number;
    enableRipples?: boolean;
    rippleSpeed?: number;
    rippleThickness?: number;
    rippleIntensityScale?: number;
    speed?: number;
    transparent?: boolean;
    edgeFade?: number;
    className?: string;
}

export const PixelBlast: React.FC<PixelBlastProps> = ({
    variant = 'circle',
    pixelSize = 8,
    color = '#B19EEF',
    patternScale = 2.5,
    patternDensity = 1,
    enableRipples = true,
    rippleSpeed = 0.3,
    rippleThickness = 0.1,
    rippleIntensityScale = 1,
    speed = 0.5,
    transparent = true,
    edgeFade = 0.5,
    className = "",
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0, active: false });
    const ripples = useRef<{ x: number; y: number; time: number }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true
            };
        };

        const handleMouseLeave = () => {
            mouse.current.active = false;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        resize();

        const render = () => {
            time += speed * 0.05;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const rows = Math.ceil(canvas.height / (pixelSize * patternScale));
            const cols = Math.ceil(canvas.width / (pixelSize * patternScale));

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const px = x * pixelSize * patternScale;
                    const py = y * pixelSize * patternScale;

                    // Automatic blinking logic
                    const blink = Math.sin(time * 0.5 + (x * 0.3) + (y * 0.5)) * 0.5 + 0.5;

                    // Edge fading calculation
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    const distCenter = Math.sqrt(Math.pow(px - centerX, 2) + Math.pow(py - centerY, 2));
                    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
                    const fade = Math.pow(Math.max(0, 1 - (distCenter / (maxDist * (edgeFade || 1)))), 2);

                    const finalAlpha = Math.max(0, Math.min(patternDensity, fade * (0.2 + blink * 0.3)));
                    ctx.globalAlpha = finalAlpha;
                    ctx.fillStyle = color;

                    const finalSize = Math.max(0, pixelSize * (0.8 + blink * 0.4));

                    if (variant === 'circle') {
                        ctx.beginPath();
                        ctx.arc(px, py, finalSize / 2, 0, Math.PI * 2);
                        ctx.fill();
                    } else {
                        ctx.fillRect(px - finalSize / 2, py - finalSize / 2, finalSize, finalSize);
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant, pixelSize, color, patternScale, patternDensity, enableRipples, rippleSpeed, rippleThickness, rippleIntensityScale, speed, edgeFade]);

    return (
        <div ref={containerRef} className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="pointer-events-none w-full h-full"
                style={{ background: transparent ? 'transparent' : '#000' }}
            />
        </div>
    );
};
