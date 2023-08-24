import ProjLinks from "./ProjLinks";
import ProjDesc from "./ProjDesc";
import ProjTitle from "./ProjTitle";

type ProjectContentProps = {
    title: string;
    desc: string;
    code: string | undefined;
    demo: string | undefined;
};

function ProjectContent(props: ProjectContentProps) {
    return (
        <div className="flex flex-col items-center justify-evenly h-1/2 w-11/12 lg:h-5/6 lg:w-2/5">
            <ProjTitle title={props.title} />
            <ProjDesc desc={props.desc} />
            <ProjLinks code={props.code} demo={props.demo} />
        </div>
    );
}

export default ProjectContent;
