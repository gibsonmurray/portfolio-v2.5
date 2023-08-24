"use client";

import useWindowDimensions from "@/hooks/useWindowDimension";
import HeroContent from "./components/HeroContent";
import HeroImg from "./components/HeroImg";
import TechStack from "./components/TechStack";

function Hero() {
    const { width } = useWindowDimensions();

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
                    {width! < 1024 ? (
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
