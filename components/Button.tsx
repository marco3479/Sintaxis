import { MouseEventHandler } from "react";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    children: any;
}

const Button = ({children, onClick, className}: ButtonProps) => {
    return (
        <button
        onClick={onClick}
        className={`bg-white text-blue font-semibold rounded-md p-2 text-lg border-none  hover:shadow-xl shadow-black ${className}`}
        >
          {children}
        </button>
    )
}

export default Button;