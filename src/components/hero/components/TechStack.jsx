import TechStackIcons from "./TechStackIcons";

function TechStack() {

    return (
        <div
            className="flex items-center flex-col justify-evenly mt-10 pb-24
                        lg:pb-0
                        xl:flex-row xl:justify-between xl:mt-0"
        >
            <p className="whitespace-nowrap border-neutral-500 text-2xl font-semibold text-neutral-800
                            max-xl:border-b-[3px] pb-3 mb-10
                            lg:mb-4
                            xl:border-r-[3px] xl:pr-10"
            >
                Tech Stack
            </p>
            <TechStackIcons />
        </div>
    );
}

export default TechStack;
