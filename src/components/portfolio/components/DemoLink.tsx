"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type DemoLinkProps = {
    demo: string;
};

function DemoLink(props: DemoLinkProps) {
    let size: SizeProp | undefined = "lg";

    if (window.innerWidth > 900) {
        size = "xl";
    }

    return (
        <a
            href={props.demo}
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
        >
            <span className="mr-2 text-xl xl:text-2xl font-bold">Demo</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={size} />
        </a>
    );
}

export default DemoLink;
