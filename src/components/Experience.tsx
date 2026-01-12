"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Tata Consultancy Services",
        role: "Systems Engineer",
        location: "Greater Noida",
        period: "Jan 2025 – Present",
        description: [
            "Architected and deployed high-performance backend microservices for GenAI assistants using FastAPI and Node.js, handling 10k+ daily requests with 99.9% uptime.",
            "Implemented optimized data pipelines and caching strategies for API responses, reducing latency by 35%.",
            "Designed comprehensive automated integration test suites using PyTest, improving test coverage to 85%.",
            "Introduced CI/CD automation using GitHub Actions with Docker containerization and Terraform IaC.",
            "Developed Flask API mock server with 20+ endpoints simulating production microservices.",
        ],
    },
    {
        company: "Veersa Technologies",
        role: "Backend Intern",
        location: "Greater Noida, UP",
        period: "Jul 2023 – Sep 2023",
        description: [
            "Delivered backend modules using C# & .NET Core MVC with optimized SQL schemas and queries.",
            "Resolved 9+ critical production issues and shipped high-impact features in a 13-member engineering team.",
            "Utilized Git version control and Jira for agile workflow management.",
        ],
    },
];

export function Experience() {
    return (
        <SectionWrapper id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    Work Experience
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    My professional journey in building scalable systems and backend solutions.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 ring-4 ring-background z-10 hidden md:block" />

                            {/* Content */}
                            <div className="flex-1 md:w-1/2">
                                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {exp.company}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                        <span className="mx-2">•</span>
                                        <Briefcase className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty space for the other side of the timeline */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
