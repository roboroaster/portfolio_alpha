"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-border">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Rachit Kalia. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
