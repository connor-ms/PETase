"use client"

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import IntroSection from "./sections/Intro";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import References from "./sections/References";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    return (
        <>
            <main className="bg-gray-900 text-white font-sans">
                <IntroSection />
                <Section2 />
                <Section3 />
                <References />
            </main>
        </>
    );
}