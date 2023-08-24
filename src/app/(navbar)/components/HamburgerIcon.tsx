import { Dispatch, SetStateAction } from "react";
import "./HamburgerIcon.css";

type HamburgerIconProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const HamburgerIcon = ({ isOpen, setIsOpen }: HamburgerIconProps) => {
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <button
            onClick={handleClick}
            className={`hamburger hamburger--squeeze ${
                isOpen ? "is-active" : ""
            }`}
            type="button"
        >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
};

export default HamburgerIcon;
