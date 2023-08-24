import Framework from "../../Framework";

type ProjLangsProps = {
    langs: string[];
};

function ProjLangs({ langs }: ProjLangsProps) {
    return (
        <div className="lg:w-fill right-0 top-0 flex flex-wrap items-center justify-center lg:flex-col lg:justify-start">
            {langs.map((lang, index) => {
                return <Framework name={lang} key={index} />;
            })}
        </div>
    );
}

export default ProjLangs;
