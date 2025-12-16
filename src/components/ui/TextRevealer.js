"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealer({ children, className }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const chars = containerRef.current.querySelectorAll(".char");

            gsap.fromTo(chars,
                {
                    y: 100,
                    opacity: 0,
                    rotateX: -90,
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.02,
                    duration: 1,
                    ease: "power4.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [children]);

    const splitText = (text) => {
        if (typeof text !== "string") return text;
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block" style={{ whiteSpace: "pre" }}>
                {char}
            </span>
        ));
    };

    return (
        <div ref={containerRef} className={cn("overflow-hidden leading-none", className)}>
            {splitText(children)}
        </div>
    );
}
