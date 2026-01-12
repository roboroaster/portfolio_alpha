"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "GPT-Enabled Fitness Tracker & Diet Planner",
        description: "Full-stack AI platform integrating Flask backend APIs with Flutter frontend and Next.js dashboard. Features personalized AI algorithms for diet planning.",
        tags: ["Flask", "Flutter", "Next.js", "Firebase", "Google OAuth"],
        github: "#",
        demo: "#",
    },
    {
        title: "CryptoPred – Cryptocurrency Price Forecasting",
        description: "Time-series predictive model achieving 93% accuracy in price forecasting using LSTM Neural Networks. Includes real-time data visualization.",
        tags: ["Python", "LSTM", "Matplotlib", "Pandas", "Data Science"],
        github: "#",
        demo: "#",
    },
    {
        title: "Enterprise Microservices Architecture",
        description: "High-performance backend microservices for GenAI assistants handling 10k+ daily requests. Implemented with FastAPI and Node.js.",
        tags: ["FastAPI", "Node.js", "Docker", "Terraform", "Microservices"],
        github: "#",
        demo: "#",
    },
];

export function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A showcase of my technical projects, ranging from AI-powered applications to scalable enterprise systems.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                        <div className="p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-2 py-1 rounded-md bg-secondary/10 text-secondary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2">
                                        <Github className="w-4 h-4" /> Code
                                    </Link>
                                </Button>
                                <Button variant="default" size="sm" className="w-full" asChild>
                                    <Link href={project.demo} target="_blank" className="flex items-center justify-center gap-2">
                                        <ExternalLink className="w-4 h-4" /> Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
