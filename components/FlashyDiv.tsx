import { MouseEventHandler } from "react";

interface FlashDivProps {
    children: any;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
}

/**
 * 
 * @param 
 * @returns
 * 
 * className='bg-black bg-opacity-70 hover:text-blue active:text-blue hover:cursor-pointer p-5 h-full w-full'
 */

export default function FlashDiv ({children, onClick, className}: FlashDivProps) {
    return (
        <div 
        className={`bg-black hover:text-blue active:text-blue hover:cursor-pointer   ${className}`}
        onClick={onClick}
        >
            <div className='w-full h-full  hover:border-blue  active:border-blue border-[10px] border-transparent absolute z-[2]'></div>
            <>
            {children}
            </>
        </div>
    )
}