"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type CodeLinkProps = {
    code: string;
};

function CodeLink(props: CodeLinkProps) {
    let size: SizeProp | undefined = "xl";

    if (window.innerWidth > 900) {
        size = "2x";
    }

    return (
        <a
            href={props.code}
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
        >
            <span className="mr-2 text-xl xl:text-2xl font-bold">Code</span>
            <FontAwesomeIcon icon={faGithub} size={size} />
        </a>
    );
}

export default CodeLink;
