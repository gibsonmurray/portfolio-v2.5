type ProjTitleProps = {
    title: string;
};

function ProjTitle(props: ProjTitleProps) {
    return (
        <h3 className="text-center text-2xl lg:text-3xl font-extrabold uppercase">
            {props.title}
        </h3>
    );
}

export default ProjTitle;
