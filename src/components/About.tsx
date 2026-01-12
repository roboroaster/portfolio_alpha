"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Code, Database, Server, Zap } from "lucide-react";

const features = [
    {
        icon: <Server className="w-6 h-6 text-primary" />,
        title: "Backend Development",
        description: "Expertise in building scalable microservices with FastAPI, Node.js, and C# .NET Core.",
    },
    {
        icon: <Code className="w-6 h-6 text-primary" />,
        title: "Frontend Engineering",
        description: "Creating responsive and dynamic UIs using Next.js, React, and Tailwind CSS.",
    },
    {
        icon: <Database className="w-6 h-6 text-primary" />,
        title: "Data & AI",
        description: "Experience with Python, Pandas, LSTM models, and integrating AI into applications.",
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Performance Optimization",
        description: "Optimizing APIs, databases, and CI/CD pipelines for maximum efficiency.",
    },
];

export function About() {
    return (
        <SectionWrapper id="about" className="bg-muted/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        I am a <span className="text-foreground font-medium">Software Engineer</span> at Tata Consultancy Services (TCS), specializing in
                        architecting high-performance backend microservices and AI-powered solutions.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        With a strong foundation in Computer Science and a passion for innovation,
                        I have successfully delivered enterprise-grade applications, optimized data pipelines,
                        and automated testing workflows. I thrive in solving complex problems and
                        building systems that scale.
                    </p>
                    <div className="flex gap-4">
                        <div className="p-4 rounded-lg bg-background border border-border">
                            <h3 className="text-2xl font-bold text-primary">1+</h3>
                            <p className="text-sm text-muted-foreground">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-lg bg-background border border-border">
                            <h3 className="text-2xl font-bold text-secondary">2+</h3>
                            <p className="text-sm text-muted-foreground">Projects Delivered</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-muted w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
