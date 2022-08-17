import { MouseEventHandler } from "react";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: any;
}

const Button = ({children, onClick}: ButtonProps) => {
    return (
        <button
        onClick={onClick}
        className='bg-white text-brown font-semibold rounded-md p-2 text-lg border-none mt-5 hover:shadow-xl shadow-black'
        >
          {children}
        </button>
    )
}

export default Button;