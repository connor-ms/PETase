import gsap from "gsap"
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react"

const barData = [
    { label: "Chemical Recycling", value: 42, color: "#FFA500" },
    { label: "Mechanical Recycling", value: 65, color: "#00FF88" },
    { label: "Enzymatic Recycling", value: 98, color: "#FF5555" },
];

export default function Section3() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const container = containerRef.current;

        // Background color transition
        gsap.to(section, {
            backgroundColor: "#1a1a2e",
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: 2,
            }
        });

        // Container fade in and slide up
        gsap.fromTo(container,
            {
                opacity: 0,
                y: 100,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                }
            }
        );

        // Title animation - split text effect
        gsap.fromTo(title,
            {
                opacity: 0,
                y: -50,
                rotationX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1,
                }
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const container2Ref = useRef(null);
    const barsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        barsRef.current.forEach((bar, i) => {
            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width: `${barData[i].value}%`,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container2Ref.current,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: true,
                        markers: true
                    },
                }
            );
        });
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen bg-black relative overflow-hidden">
            <div ref={containerRef} className="max-w-2xl mx-auto px-6">
                <h1
                    ref={titleRef}
                    className="text-6xl text-white font-bold text-center pt-50 leading-tight"
                    style={{ perspective: "1000px" }}
                >
                    The Solution
                </h1>
                <p
                    ref={paragraphRef}
                    className="text-lg mt-10 text-gray-300 leading-relaxed"
                >
                    PETase is an enzyme discovered in a bacterium called Ideonella sakaiensis that can break down PET (polyethylene terephthalate), which is a common plastic used in bottles and packaging. PETase works by degrading PET into its basic building blocks, which can then be reused to create new plastic products <sup>[7]</sup>. This discovery offers a promising solution for reducing plastic waste and advancing sustainable recycling efforts.
                </p>

                <Image src="/PETase.jpg" height={500} width={500} alt="" className="mx-auto mt-15" />
            </div>
            <div>
                <iframe src="https://player.vimeo.com/video/703732003?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Enzymes eat plastic before your eyes" className="mx-auto h-130 w-200 mt-10" />
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div className="max-w-2xl mx-auto px-6">
                <p className="text-lg my-10 text-gray-300">
                    The use of this enzyme has the possibility to greatly increase the rate at which we can recycle these plastics, which can lead to a large reduction in the amount that ends up in landfills and oceans. If we can efficiently recycle already produced plastics, we can slowly start working towards reusing the extremely large amounts of plastic we already have.
                </p>
            </div>
            <div ref={container2Ref} className="px-8 py-16 text-white">
                <h2 className="text-3xl font-bold mb-10 text-center">Recycling Method Efficiencies</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {barData.map((bar, i) => (
                        <div key={bar.label} className="w-full">
                            <div className="flex justify-between mb-1">
                                <span className="text-md">{bar.label}</span>
                                <span className="text-md">{bar.value}%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-6 rounded-xl overflow-hidden ">
                                <div
                                    ref={(el) => { barsRef.current[i] = el! }}
                                    className="h-full rounded-xl"
                                    style={{ backgroundColor: bar.color, width: "0%" }}
                                />
                            </div>
                        </div>
                    ))}
                    <p>[8][9][10]</p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto px-6">
                <p className="text-lg my-10 text-gray-300">
                    Enzymes like PETase are a great example of how science and engineering can work together to solve big problems like plastic waste. Scientists are now improving this enzyme in the lab to make it work faster and better, even at higher temperatures or in large-scale recycling plants. By combining biology with engineering , we’re finding smarter ways to recycle plastic and reduce pollution, turning waste into something useful again.
                </p>
                <h1 className="text-3xl font-bold text-center my-52">Thank you for reading!</h1>
            </div>
        </div >
    );
}