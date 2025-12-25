"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = "none";

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Move cursor logic
        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power3.out",
            });
        };

        // Hover logic with delegation
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
                setIsHovering(true);
            }
        };

        const onMouseOut = (e) => {
            if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
                setIsHovering(false);
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mouseout", onMouseOut);


        return () => {
            document.body.style.cursor = "auto";
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseout", onMouseOut);
        };
    }, []);

    // Update cursor state on hover
    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, {
                scale: 0.5,
                opacity: 0,
                duration: 0.3
            });
            gsap.to(follower, {
                scale: 1.5,
                backgroundColor: "rgba(56, 189, 248, 0.1)", // Light blue tint
                borderColor: "#38bdf8", // Accent color
                rotation: 45, // Spin it
                borderWidth: "1px",
                borderRadius: "2px", // Sharper corners on hover? Or kept slightly rounded.
                duration: 0.3
            });
        } else {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.8)",
                rotation: 0,
                borderWidth: "2px",
                borderRadius: "4px",
                duration: 0.3
            });
        }
    }, [isHovering]);

    // Pulse Glow Animation
    useEffect(() => {
        const follower = followerRef.current;

        gsap.to(follower, {
            boxShadow: "0 0 25px 5px rgba(56, 189, 248, 0.8)",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"
                style={{
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: "0 0 15px 2px rgba(56, 189, 248, 0.5)", // The GLOW
                    borderRadius: "4px",
                }}
            />
        </>
    );
};

export default CustomCursor;
