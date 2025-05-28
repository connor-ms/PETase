"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function IntroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !textRef.current || !scrollRef) return;

        let tl = gsap.timeline();

        tl.fromTo(textRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    markers: true,
                }
            }
        ).fromTo(scrollRef.current,
            {
                delay: 3,
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1
            }
        );
    });

    return (
        <section ref={sectionRef} className="relative h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-gray-700 to-gray-900">
            <div ref={textRef} className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                    The Plastic Problem
                </h1>
                <h3>
                    By Connor Sullivan
                </h3>
            </div>

            <p ref={scrollRef} className="absolute bottom-4 left-1/2 transform -translate-x-1/2">Scroll down</p>
        </section>
    );
}