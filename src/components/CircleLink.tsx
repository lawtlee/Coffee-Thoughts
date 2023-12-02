import { Link } from "react-router-dom"

interface prop{
    link: string,
    title: string,
}

function CircleLink(props: prop): JSX.Element {
    return (
        <Link
            to={`/${props.link}`}
            className="text-center text-[#547E88] bg-[#F6DEC9] 
                        max-w-[226px] max-h-[226px] flex flex-wrap items-center justify-center rounded-full
                        text-[32px] font-RedHat hover:text-[#FFF7ED] w-[25vw] h-[25vw] min-w-[192px] min-h-[192px]
            "
        >
            <p className="w-[80%]">{props.title}</p>
        </Link>
    );
}

export default CircleLink