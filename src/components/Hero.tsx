"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import React from "react";

export function Hero() {
    return (
        <SectionWrapper
            id="hero"
            className="min-h-screen flex items-center justify-center pt-32"
        >
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold font-heading tracking-tight"
                >
                    Hi, I'm <span className="text-primary">Rachit Kalia</span>
                    <br />
                    <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Software Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl text-muted-foreground max-w-2xl"
                >
                    Architecting scalable microservices and AI-powered solutions.
                    Specializing in FastAPI, Node.js, and Next.js to build high-performance
                    applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Button size="lg" asChild className="group">
                        <Link href="#contact">
                            Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#projects">View Projects</Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex gap-6 mt-8"
                >
                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:rachitkalia2@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
