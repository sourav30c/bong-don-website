'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

export default function ScrollReveal({
    children,
    className = "",
    threshold = 0,
    rootMargin = "60px 0px"
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out will-change-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${className}`}
        >
            {children}
        </div>
    );
}