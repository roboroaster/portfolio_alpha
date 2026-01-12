"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export function Background() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useTransform(x, [0, 1], [-20, 20]);
    const mouseY = useTransform(y, [0, 1], [-20, 20]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            x.set(clientX / innerWidth);
            y.set(clientY / innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] opacity-50"
            />
            <motion.div
                style={{ x: useTransform(mouseX, (v) => -v), y: useTransform(mouseY, (v) => -v) }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40"
            />
        </div>
    );
}
