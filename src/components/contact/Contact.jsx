"use client"

import Content from "./components/Content";
import Lottie from "lottie-react";
import emailAnimation from "../../assets/lottie/email.json";

function Contact() {
    return (
        <section
            id="Contact"
            className="flex flex-col items-center justify-center overflow-hidden py-28 lg:flex-row bg-white"
        >
            <div className="flex h-4/5 w-1/4 xl:h-1/3 items-center justify-center overflow-hidden">
                <div className="w-fill h-fill">
                    <Lottie
                        animationData={emailAnimation}
                        className="h-[225px] w-[225px] xl:h-[300px] xl:w-[300px]"
                    />
                </div>
            </div>
            <Content />
        </section>
    );
}

export default Contact;
