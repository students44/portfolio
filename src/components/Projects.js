"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import TextRevealer from "./ui/TextRevealer";

gsap.registerPlugin(ScrollTrigger);

const projects = {
    react: [
        {
            title: "E-Commerce Dashboard",
            desc: "A full-featured analytics dashboard for online stores.",
            tech: ["Next.js", "Tailwind", "Recharts"],
            link: "#",
            github: "#",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Social Media App",
            desc: "Real-time chat and feed functionality.",
            tech: ["React", "Firebase", "Redux"],
            link: "#",
            github: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Task Management",
            desc: "Kanban board with drag and drop support.",
            tech: ["React", "dnd-kit", "Node.js"],
            link: "#",
            github: "#",
            color: "from-green-400 to-emerald-600"
        }
    ],
    wordpress: [
        {
            title: "Corporate Agency",
            desc: "Custom theme development for a financial firm.",
            tech: ["WordPress", "PHP", "SCSS"],
            link: "#",
            color: "from-orange-400 to-red-500"
        },
        {
            title: "Creative Portfolio",
            desc: "High-performance portfolio for a photographer.",
            tech: ["WordPress", "GSAP", "Barba.js"],
            link: "#",
            color: "from-indigo-400 to-blue-600"
        }
    ]
};

export default function Projects() {
    const [activeTab, setActiveTab] = useState("react");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");

            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%", // Trigger when top of card hits bottom 10% of viewport
                            toggleActions: "play none none reverse",
                        },
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        stagger: 0.1,
                        duration: 0.6,
                        delay: i * 0.1, // delay based on index for cascade effect
                        ease: "power3.out"
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, [activeTab]);

    return (
        <section id="projects" className="min-h-screen py-20 relative" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h3 className="text-4xl font-bold text-white mb-6 flex justify-center">
                        <TextRevealer>Featured Projects</TextRevealer>
                    </h3>

                    <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab("react")}
                            className={cn(
                                "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                activeTab === "react" ? "bg-accent-primary text-slate-900 shadow-lg" : "text-gray-400 hover:text-white"
                            )}
                        >
                            React & Next.js
                        </button>
                        <button
                            onClick={() => setActiveTab("wordpress")}
                            className={cn(
                                "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                activeTab === "wordpress" ? "bg-accent-primary text-slate-900 shadow-lg" : "text-gray-400 hover:text-white"
                            )}
                        >
                            WordPress
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects[activeTab].map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative bg-white/5 border border-white/10 overflow-hidden rounded-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={cn("h-48 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity", project.color)} />

                            <div className="p-6 relative">
                                <div className="absolute -top-10 right-6 w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-110 transition-transform">
                                    <Layers size={24} className="text-white" />
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                                    <a href={project.link} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    {project.github && (
                                        <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                            <Github size={16} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
