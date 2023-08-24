"use client"

import Image from "next/image";
import Lottie from "lottie-react";
import abstractBubbles from "../../../assets/lottie/abstract-bubbles.json";
import heroImg from "@public/hero-img.jpg";

function HeroImg() {
    return (
        <div className="flex items-center justify-center">
            <Lottie animationData={abstractBubbles} className="max-lg:h-96 max-lg:w-96"/>
            <Image
                src={heroImg}
                alt="hero image"
                className="hero-img absolute
                            h-56 w-[11.5rem]
                            lg:h-80 lg:w-64"
            />
        </div>
    );
}

export default HeroImg;