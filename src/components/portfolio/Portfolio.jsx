import Projects from "./Projects";

function Portfolio() {
    return (
        <section
            id="Projects"
            className="flex flex-col items-center justify-center overflow-hidden bg-neutral-100 py-40 xl:px-24 2xl:px-40"
        >
            <div className="w-5/6 max-w-5xl">
                <h2 className="text-center text-xl font-extrabold text-blue-500 xl:text-start">
                    PORTFOLIO
                </h2>
                <h3 className="mt-5 text-center text-3xl font-extrabold xl:text-start">
                    Every project puts the user first 🧑‍💻
                </h3>
                <div className="flex w-full items-center justify-center">
                    <Projects />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
