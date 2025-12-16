"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, BookOpen, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        year: "2023 - Present",
        title: "Master in Visual Computing",
        institution: "Tech University",
        description: "Focusing on Computer Graphics, AI, and Human-Computer Interaction.",
        icon: GraduationCap,
    },
    {
        year: "2019 - 2023",
        title: "Bachelor of Computer Science",
        institution: "State University",
        description: "Graduated with Honors. Specialized in Software Engineering.",
        icon: BookOpen,
    },
    {
        year: "2022",
        title: "Full Stack Web Development Certification",
        institution: "FreeCodeCamp",
        description: "Intensive bootcamp covering MERN stack and modern web practices.",
        icon: Award,
    }
];

export default function Education() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".edu-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" className="min-h-screen py-20 relative bg-black/20" ref={containerRef}>
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold mb-16 text-center text-white">Education & Experience</h3>

                <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {educationData.map((item, index) => (
                        <div key={index} className="edu-item relative flex items-center md:items-start group transition-all duration-300 hover:bg-white/5 p-4 rounded-xl">
                            {/* Icon Marker */}
                            <div className="absolute top-0 left-0 md:left-28 mt-5 md:mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-700 group-hover:border-accent-primary group-hover:bg-accent-primary/20 transition-all z-10 shadow-lg shadow-black/50">
                                <item.icon size={18} className="text-gray-400 group-hover:text-accent-primary" />
                            </div>

                            {/* Content */}
                            <div className="pl-14 md:pl-48 w-full">
                                <span className="text-accent-secondary text-sm font-mono mb-1 block">{item.year}</span>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <div className="text-gray-300 mb-2">{item.institution}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
