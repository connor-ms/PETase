"use client"

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import IntroSection from "./sections/Intro";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    return (
        <>
            <main className="bg-gray-900 text-white font-sans">
                <IntroSection />
            </main>
        </>
    );
}