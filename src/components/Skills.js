"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layout, Terminal } from "lucide-react";
import {
    FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaDocker, FaGithub, FaNpm
} from "react-icons/fa";
import {
    SiJquery, SiNextdotjs, SiMaterialdesign, SiRedux, SiTailwindcss, SiFramer, SiGreensock, SiCpanel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
    {
        category: "Frontend Technologies",
        icon: Code2,
        skills: [
            { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
            { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400" },
            { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
            { name: "React.js", icon: FaReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" }
        ]
    },
    {
        category: "UI & State Management",
        icon: Layout,
        skills: [
            { name: "Material UI", icon: SiMaterialdesign, color: "text-blue-500" },
            { name: "Redux", icon: SiRedux, color: "text-purple-500" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
            { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
            { name: "GSAP", icon: SiGreensock, color: "text-green-500" }
        ]
    },
    {
        category: "Tools & Deployment",
        icon: Terminal,
        skills: [
            { name: "GitHub", icon: FaGithub, color: "text-white" },
            { name: "cPanel", icon: SiCpanel, color: "text-orange-500" },
            { name: "Docker", icon: FaDocker, color: "text-blue-400" },
            { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
            { name: "NPM/Yarn", icon: FaNpm, color: "text-red-500" }
        ]
    }
];

export default function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(".skills-header", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Cards Animation
            gsap.utils.toArray(".skill-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "back.out(1.2)",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="py-20 relative" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="skills-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit of modern technologies and best practices essential for building high-performance digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <div
                            key={idx}
                            className="skill-card group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-primary/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/20 group-hover:border-accent-primary/50 group-hover:scale-110 transition-all duration-300">
                                    <category.icon className="text-accent-primary w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-accent-primary transition-colors">
                                    {category.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, sIdx) => {
                                        return (
                                            <span
                                                key={sIdx}
                                                className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 group-hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 animate-pulse"
                                            >
                                                <skill.icon className={`text-lg ${skill.color}`} />
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
