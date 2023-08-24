function NavLink({ name, vertical }) {
    return (
        <a
            href={`#${name}`}
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
