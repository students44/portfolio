"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Background() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create random floating shapes
            const shapes = Array.from({ length: 15 });

            shapes.forEach((_, i) => {
                const size = Math.random() * 300 + 50;
                const shape = document.createElement("div");
                shape.classList.add("absolute", "rounded-full", "blur-3xl", "opacity-20");

                // Random colors from our palette
                const colors = ["bg-cyan-500", "bg-blue-600", "bg-purple-600", "bg-indigo-500"];
                shape.classList.add(colors[Math.floor(Math.random() * colors.length)]);

                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.left = `${Math.random() * 100}%`;
                shape.style.top = `${Math.random() * 100}%`;

                containerRef.current.appendChild(shape);

                gsap.to(shape, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    duration: "random(10, 20)",
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0f172a]"
        >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
    );
}
