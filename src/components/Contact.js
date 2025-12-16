"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-anim", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="relative pt-32 pb-10 bg-black/40" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
                    <div className="md:w-1/2 contact-anim">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas and opportunities.
                        </p>
                        <a
                            href="mailto:contact@example.com"
                            className="inline-flex items-center gap-3 text-accent-primary text-xl font-medium hover:text-accent-secondary transition-colors"
                        >
                            <Mail /> contact@example.com
                        </a>
                    </div>

                    <div className="md:w-1/2 contact-anim">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 contact-anim">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-white transition-all group"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
