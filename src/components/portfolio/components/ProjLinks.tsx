import DemoLink from "./DemoLink";
import CodeLink from "./CodeLink";

type ProjLinksProps = {
    code: string | undefined;
    demo: string | undefined;
}

function ProjLinks(props: ProjLinksProps) {
    return (
        <div className="flex w-3/4 items-center justify-evenly">
            {props.code && <CodeLink code={props.code} />}
            {props.demo && <DemoLink demo={props.demo} />}
        </div>
    );
}

export default ProjLinks;
