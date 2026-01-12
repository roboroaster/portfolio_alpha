"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "Java", "C#", "SQL"],
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            "FastAPI",
            "Flask",
            "Node.js",
            "Next.js",
            "PyTest",
            ".NET Core MVC",
            "Angular TS",
        ],
    },
    {
        title: "Data Science & Visualization",
        skills: ["Matplotlib", "Seaborn", "Pandas", "LSTM", "Statistical Analysis", "Tableau"],
    },
    {
        title: "Databases & Cloud",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Docker", "Terraform"],
    },
    {
        title: "Enterprise Development",
        skills: [
            "Microservices Architecture",
            "RESTful APIs",
            "Async Programming",
            "CI/CD (GitHub Actions)",
            "Git",
            "Agile Methodologies",
        ],
    },
];

export function Skills() {
    return (
        <SectionWrapper id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    Technical Skills
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise and tools I use to build solutions.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                        <h3 className="text-lg font-bold mb-4 text-primary">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-sm px-3 py-1 rounded-full bg-muted text-foreground border border-border hover:border-primary/30 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
