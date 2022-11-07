import { MouseEventHandler } from "react";

// this is for block anchor elements that are to simulate a button, 
// for matters such as opening in a new tab on context menu, and such

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    className?: string;
    children: any;
    href: string;
    target?: string;
    rel?: string;
}

const A = ({children, className, href, onClick, target, rel}: ButtonProps) => {
    return (
        <a
        className={`bg-white text-blue font-semibold rounded-md max-w-min p-2 text-lg border-none  hover:shadow-xl shadow-black ${className}`}
        target={target}
        rel={rel}
        onClick={() => {return onClick}}
        href={href}
        >
            {children}
        </a>
    )
}

export default A;