"use client"

import AboutMe from "./AboutMe";
import me from "../../assets/lottie/aboutme.json";
import Lottie from "lottie-react";

function About() {
    return (
        <section
            id="About"
            className="flex w-screen flex-col items-center justify-center overflow-hidden
                            bg-white py-32
                            xl:flex-row xl:py-20"
        >
            <div className="w-fill h-fill">
                <Lottie
                    animationData={me}
                    className=" w-[350px]
                                        lg:w-[500px] 
                                        xl:h-[500px]"
                />
            </div>
            <AboutMe />
        </section>
    );
}

export default About;
