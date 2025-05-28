"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TONS_PER_YEAR = 440000000;
const TONS_PER_MS = TONS_PER_YEAR / 3.154e10;

const plasticData = [
    { name: 'Paper Bag', years: 1 },
    { name: 'Cigarette Butt', years: 12 },
    { name: 'Aluminum Can', years: 200 },
    { name: 'Plastic Bottle', years: 450 },
    { name: 'Plastic Bag', years: 500 },
    { name: 'Disposable Diaper', years: 500 },
    { name: 'Fishing Line', years: 600 },
];

export default function Section2() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const graphRef = useRef<HTMLIFrameElement>(null);

    const [tonsProduced, setTonsProduced] = useState(0);
    const startTime = Date.now();

    const chartRef = useRef<HTMLDivElement>(null);
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);
    const maxYears = Math.max(...plasticData.map(item => item.years));

    const yAxisLabels = [0, 200, 400, 600];

    const getBarHeight = (years: number): number => {
        return (years / maxYears) * 400;
    };

    // Count tons produced since page open
    useEffect(() => {
        const interval = setInterval(() => {
            let timePassed = Date.now() - startTime;
            setTonsProduced(Math.round(timePassed * TONS_PER_MS));
        });

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        if (!sectionRef.current || !textRef.current || !graphRef.current || !barsRef.current) return;

        gsap.fromTo(textRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "+=500",
                    scrub: true
                }
            }
        );

        gsap.fromTo(graphRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "+=500",
                    scrub: true
                }
            }
        );

        barsRef.current.map((_, index) => {
            gsap.fromTo(barsRef.current.at(index)!,
                {
                    height: 0,
                },
                {
                    height: getBarHeight(plasticData[index].years),
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: chartRef.current,
                        start: "top center",
                        end: "+=200",
                        scrub: true,
                    }
                }
            )
        })
    });

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-blue-50 to-green-50 flex flex-col min-w-5xl max-w-screen text-black">
            <div ref={textRef} className="px-4 ml-20 mt-50 text-left">
                <h1 className="text-4xl font-bold">The Stats</h1>
                <p className="text-lg my-4 max-w-2xl">
                    Globally, approximately {TONS_PER_YEAR / 1000000} million tons of plastic are produced each year<a href="#references"><sup>[1]</sup></a>. It's estimated only 9% of that gets recycled<a href="#references"><sup>[2]</sup></a>.<br />
                    Since opening this page, <span className="w-100">{tonsProduced}</span> tons have been produced.
                </p>
            </div>

            <iframe ref={graphRef} src="https://ourworldindata.org/grapher/global-plastic-production-projections?tab=chart" className="max-w-6xl min-w-6xl h-200 mx-auto my-25 shadow-2xl" allow="web-share; clipboard-write"></iframe>

            <h1 className="text-3xl font-bold text-center mb-25">It can take over 500 years for some of these plastics to break down.</h1>
            <div className="p-8">
                <div ref={chartRef} className="max-w-6xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 mb-20">
                        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                            Years to Decompose
                        </h2>

                        <div className="flex items-end justify-center space-x-4 h-[500px] relative">
                            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90">
                                <span className="text-lg font-medium text-gray-700">Years to Decompose</span>
                            </div>

                            <div className="relative flex items-end space-x-6 ml-16 h-[450px]">
                                <div className="absolute top-0 h-[calc(100%-3.5em)] -left-15 flex flex-col justify-between text-sm text-gray-600">
                                    {yAxisLabels.reverse().map((label) => (
                                        <div key={label} className="flex items-center">
                                            <span className="mr-2">{(label)}</span>
                                            <div className="w-2 h-px bg-gray-300"></div>
                                        </div>
                                    ))}
                                </div>

                                {plasticData.map((item, index) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <div className="relative mb-4">
                                            <div
                                                ref={(el) => { (barsRef.current[index] = el) }}
                                                className="w-16 rounded-t-lg shadow-lg transition-all duration-300 hover:shadow-xl relative group bg-gradient-to-b from-gray-700 to-gray-900"
                                            >
                                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                                    {item.years} {item.years === 1 ? 'year' : 'years'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-sm font-medium text-gray-700 text-center w-20 leading-tight min-h-[3em]">
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <span className="text-lg font-medium text-gray-700">Material Type</span>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={textRef} className="px-4 mx-auto mt-25 text-center">
                <p className="text-lg my-4 max-w-2xl">
                    The rate at which we are creating plastic is unsustainable, and it has impacts all around the globe.<br />
                    - <b>Oceans</b>: 8 million tons of plastic enter the oceans annually TODO: source<br />
                    - <b>Microplastics</b>: Can be airborne, and have been found at an increasing rate and volume in humans and other animals. TODO: source<br />
                    - <b>Harm to wildlife</b>: It's estimated over 1 million animals die each year due to plastic polution in the ocean TODO: source<sup>[3]</sup>.<br />
                </p>
            </div>
        </section>
    )
}