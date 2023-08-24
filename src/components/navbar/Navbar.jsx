"use client";

import { useEffect, useState } from "react";
import NavLinks from "./components/NavLinks";
import FullscreenMenu from "./components/FullscreenMenu";
import HamburgerIcon from "./components/HamburgerIcon";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = [
        { name: "Home" },
        { name: "About" },
        { name: "Projects" },
        { name: "Contact" },
    ];

    return (
        <div
            className="fixed z-[101] flex w-screen items-center justify-between bg-white 
                        h-20 px-7 shadow-lg 
                        2xl:h-24 2xl:px-10 2xl:shadow-lg"
        >
            <a
                href="Hero"
                className="relative cursor-pointer whitespace-nowrap font-extrabold text-3xl"
            >
                Gibson Murray
            </a>
            {windowWidth < 900 ? (
                <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
                <NavLinks />
            )}
            {windowWidth < 900 && (
                <FullscreenMenu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    links={links}
                />
            )}
        </div>
    );
}

export default Navbar;
