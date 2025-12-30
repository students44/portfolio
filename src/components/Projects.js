"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TextRevealer from "./ui/TextRevealer";


gsap.registerPlugin(ScrollTrigger);

const projects = {
    react: [
        {
            title: "Child Protection System",
            desc: "Child protection is the practice of safeguarding children from abuse, neglect, exploitation, and any form of harm.",
            tech: ["Next.js", "Tailwind", "Recharts"],
            link: "https://child-protection-lac.vercel.app/",
            github: "https://github.com/students44/ChildProtection",
            image: "/project_images/childprotection.PNG",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "The Workout system",
            desc: "The Workout is your go-to platform for effective training routines, strength building, and total body fitness.",
            tech: ["React", "NextJs", "Redux", "Tailwind", "MongoDB"],
            link: "https://the-workout-production.up.railway.app/",
            github: "https://github.com/students44/The-workout",
            image: "/project_images/heroimage.PNG",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Excel dashboard",
            desc: "An interactive Excel dashboard presenting Union-wise summaries, Club-level details, and overall Union performance in a clear and structured view",
            tech: ["React", "Tailwind", "Typescript", "Motion one"],
            link: "https://excel-dashboard-ten.vercel.app/",
            github: "https://github.com/students44/ExcelDashboard",
            image: "/project_images/excel.PNG",
            color: "from-green-400 to-emerald-600"
        },
        {
            title: "Spotify Clone",
            desc: "An interactive spotify clone you can use to listen to music",
            tech: ["Html", "Css", "JavaScript", "Bootstrap", "Spotify API"],
            link: "https://spotify-clone-two-kappa-58.vercel.app/",
            github: "https://github.com/students44/Spotify-Clone",
            image: "/project_images/spotify.PNG",
            color: "from-green-400 to-emerald-600"
        },
        {
            title: "Alhodhod",
            desc: "this is islamic site you can read hadis and quran, also you can listen to quran",
            tech: ["Html", "Css", "JavaScript", "Bootstrap",],
            link: "https://alhodhod.mmmt.app/",
            // github: "https://github.com/students44/Spotify-Clone",
            image: "/project_images/alhodhod.PNG",
            color: "from-green-400 to-emerald-600"
        },
        {
            title: "Akash Collection",
            desc: "this is ecommerce website you can buy any kind of shoes and chapals",
            tech: ["Html", "Css", "JavaScript", "Bootstrap", "laravel"],
            link: "https://aakashcollection.com/",
            // github: "https://github.com/students44/Spotify-Clone",
            image: "/project_images/akashCollection.PNG",
            color: "from-green-400 to-emerald-600"
        }
    ],
    wordpress: [
        {
            title: "WebTech Fusion",
            desc: "WebTech Fusion is a sofware development company provide web development services",
            tech: ["WordPress", "PHP", "Elementor", "CSS", "JS"],
            link: "https://webtechfusion.pk/",
            image: "/project_images/webtech.PNG",
            color: "from-orange-400 to-red-500"
        },
        {
            title: "KhanBazar",
            desc: "KhanBazar is an online marketplace for buying and selling second-hand products.",
            tech: ["WordPress", "Elementor", "CSS", "JS", "PHP"],
            link: "https://khanbazar.mmmt.app/",
            image: "/project_images/khanbazar.PNG",
            color: "from-indigo-400 to-blue-600"
        },
        {
            title: "Blogging Site",
            desc: "A personal blogging site built on WordPress to share articles and insights on various topics.",
            tech: ["WordPress", "Elementor", "CSS", "JS", "PHP"],
            link: "https://blog.mmmt.app/",
            image: "/project_images/Blog.PNG",
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
                                "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer",
                                activeTab === "react" ? "bg-accent-primary text-slate-900 shadow-lg" : "text-gray-400 hover:text-white"
                            )}
                        >
                            React & Next.js
                        </button>
                        <button
                            onClick={() => setActiveTab("wordpress")}
                            className={cn(
                                "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer",
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
                            <div className="h-48 relative overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-102"
                                    />
                                ) : (
                                    <div className={cn("w-full h-full bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity", project.color)} />
                                )}
                            </div>

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
