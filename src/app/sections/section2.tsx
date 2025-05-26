"use client"
import { useEffect } from "react";
import gsap from "gsap";

export default function Section2() {
    useEffect(() => {
        const section = document.getElementById("sec2");

        if (section) {
            const text = section.querySelector(".sticky-text");

            if (text) {
                gsap.fromTo(text,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            markers: false
                        }
                    }
                );
            }
        }
    }, []);

    return (
        <section id="sec2" className="bg-green-900 h-screen flex items-center justify-center">
            <div className="sticky-text text-center px-4">
                <h1 className="text-4xl font-bold">Meet Ideonella sakaiensis</h1>
                <p className="text-lg mt-4 max-w-2xl mx-auto">
                    A bacterium that can break down PET plastic using an enzyme called PETase.
                </p>
            </div>
        </section>
    )
}