import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export function SectionWrapper({
    id,
    className,
    children,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
