import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type AccountProps = {
    platform: string;
}

function Account(props: AccountProps) {

    let icon, title, link;

    if (props.platform === "linkedin") {
        icon = faLinkedin;
        title = "LinkedIn";
        link = "https://www.linkedin.com/in/gibsonmurray/";
    } else if (props.platform === "github") {
        icon = faGithub;
        title = "GitHub";
        link = "https://github.com/gibsonmurray";
    } 

    return (
        <div className="h-20 w-16 flex justify-center items-center lg:justify-start">
            {icon && (
                <a rel="noreferrer" target="_blank" href={link}>
                    <FontAwesomeIcon
                        icon={icon}
                        title={title}
                        size="2x"
                        className="duration-200 hover:text-blue-500"
                    />
                </a>
            )}
        </div>
    );
}

export default Account;
