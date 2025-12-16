"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const componentRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(textRef.current,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.5
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                }
            )
                .from(subTextRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.5")
                .from(".hero-btn", {
                    scale: 0.8,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                }, "-=0.5");

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={componentRef}
            className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative"
        >
            <div className="text-center max-w-4xl z-10">
                <h2 className="text-accent-primary font-mono mb-4 text-xl md:text-2xl">
                    Hi, I'm <span className="text-white">Muneeb khan</span>
                </h2>

                <div ref={textRef} className="mb-6 flex justify-center">
                    <Image
                        src="/heroimage.png"
                        alt="Hero Image"
                        width={190}
                        height={190}
                        className="object-cover" // maintain aspect ratio
                        priority
                        style={{ borderRadius: "50%" }}
                    />
                </div>

                <p
                    ref={subTextRef}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I'm a Full Stack Developer specializing in building exceptional digital experiences.
                    Currently, I'm focused on accessible, human-centered products.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="hero-btn px-8 py-4 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary rounded-full hover:bg-accent-primary/20 transition-all font-medium backdrop-blur-sm"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="hero-btn px-8 py-4 text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2"
                    >
                        Contact Me <ArrowDown size={18} />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <ArrowDown size={24} className="text-white" />
            </div>
        </section>
    );
}
