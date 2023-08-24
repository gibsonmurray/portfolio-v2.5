"use client"

import { useEffect, useState } from "react";
import HeroContent from "./components/HeroContent";
import HeroImg from "./components/HeroImg";
import TechStack from "./components/TechStack";

function Hero() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="Home"
            className="flex w-screen items-center justify-center bg-neutral-100 overflow-hidden
                            lg:h-screen"
        >
            <div className="flex h-4/5 w-11/12 flex-col items-center justify-center">
                <div
                    className="flex items-center justify-center 
                                    flex-col mt-[80px] 
                                    lg:flex-row lg:mt-0"
                >
                    {windowWidth < 1024 ? (
                        <>
                            <HeroImg />
                            <HeroContent />
                        </>
                    ) : (
                        <>
                            <HeroContent />
                            <HeroImg />
                        </>
                    )}
                </div>
                <TechStack />
            </div>
        </section>
    );
}

export default Hero;
