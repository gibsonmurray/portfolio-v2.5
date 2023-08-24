import { Dispatch, SetStateAction, useEffect } from "react";
import NavLink from "./NavLink";
import { LinkName } from "../Navbar";

type FullscreenMenuProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    links: LinkName[]
}

const FullscreenMenu = ({ isOpen, setIsOpen, links }: FullscreenMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
    }, [isOpen]);

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden 
                        flex flex-col items-center justify-center bg-white 
                        transition-transform duration-500 ease-in-out z-40 transform 
                        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    name={link.name}
                    vertical={true}
                    setIsOpen={setIsOpen}
                />
            ))}
        </div>
    );
};

export default FullscreenMenu;
