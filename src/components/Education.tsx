"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Award, GraduationCap } from "lucide-react";

const education = [
    {
        school: "GALGOTIAS UNIVERSITY",
        degree: "Bachelor of Technology, Computer Science Engineering with AI-DS Specialization",
        period: "Nov 2020 – July 2024",
        grade: "CGPA: 8.91",
    },
    {
        school: "MODERN DELHI PUBLIC SCHOOL",
        degree: "Class XII",
        period: "Apr 2019 – Apr 2020",
        grade: "Percentage: 87.2",
    },
];

const certifications = [
    "Data Science (Yhills)",
    "Data Manipulation with Pandas (DataCamp)",
    "Database Programming with SQL (Oracle Academy)",
    "Database Design (Oracle Academy)",
];

export function Education() {
    return (
        <SectionWrapper id="education" className="bg-muted/30">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-heading">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="relative pl-8 border-l border-border"
                            >
                                <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-[7px] mt-1.5" />
                                <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{edu.period}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                            <Award className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-heading">Certifications</h2>
                    </div>

                    <div className="grid gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-card border border-border flex items-center gap-4 hover:border-secondary/50 transition-colors"
                            >
                                <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
