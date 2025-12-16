"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, BookOpen, Award, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        year: "25 November, 2024 - Present",
        title: "Frontend Developer",
        institution: "WEBTECH Fusion Company Islamabad",
        description: "Currently working as a Frontend Developer, contributing to modern web development projects.",
        icon: Briefcase,
    },
    {
        year: "1 August, 2024 - 30 November, 2024",
        title: "Frontend Developer Intern",
        institution: "KPITB",
        description: "Worked in front-end technology to gain experience from seniors and improve code structure.",
        icon: Briefcase,
    },
    {
        year: "2020 - 2024",
        title: "Bachelor's Degree",
        institution: "Agriculture University Peshawar",
        description: "Acquired extensive knowledge and skills across various disciplines, establishing a solid foundation for academic and professional growth.",
        icon: GraduationCap,
    },
    {
        year: "2016 - 2018",
        title: "FSC",
        institution: "Government Degree College Dagger Buner",
        description: "Gained valuable knowledge and skills in various subjects and developed a strong foundation for future academic pursuits.",
        icon: BookOpen,
    }
];

export default function Education() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".edu-item");

            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 95%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
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
