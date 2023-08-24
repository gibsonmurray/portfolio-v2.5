type ProjDescProps = {
    desc: string;
};

function ProjDesc(props: ProjDescProps) {
    return (
        <p className="text-center text-md font-semibold text-neutral-500 lg:text-xl">
            {props.desc}
        </p>
    );
}

export default ProjDesc;
