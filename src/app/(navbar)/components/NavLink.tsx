import { Dispatch, SetStateAction } from "react";

type NavLinkProps = {
    name: string
    vertical?: boolean
    setIsOpen?: Dispatch<SetStateAction<boolean>>
}

function NavLink({ name, vertical, setIsOpen }: NavLinkProps) {
    return (
        <a
            href={`#${name}`}
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`cursor-pointer duration-200 hover:text-blue-500 
                            text-4xl font-black
                            sm:text-xl sm:font-bold
                            xl:text-xl xl:font-bold 
                            ${vertical && "my-10"}`}
        >
            {name}
        </a>
    );
}

export default NavLink;
