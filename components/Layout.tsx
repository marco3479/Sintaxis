import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Layout ({ children }:any) {


    const [showCursosMenu, setShowCursosMenu] = useState<boolean>(true);

    return (
        <div
        className='flex absolute flex-col w-[100vw] h-[100vh]'
        >
            <Navbar/>
            <main
            className='bg-blue w-full h-full overflow-y-auto pt-8 absolute bottom-0'
            >
                {children}
            </main>
            <div
            className='hidden sticky p-5 text-3xl z-[3] text-right flex-col lg:hidden  h-full bg-opacity-90 text-white max-w-min bg-black min-w-min self-end right-0'
            id='menuOptions'
            onClick={() => {
                const menu = document.getElementById('menuOptions') as HTMLElement;
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                }
            }
            >
                <br/>
                <h2
                className='font-semibold right-2'
                >
                    <Link href='inscripcion'>
                        Inscribirse
                    </Link>
                </h2>
                <br/>
                <h2
                className='font-semibold right-2'
                >
                    <Link 
                    href=''
                    >
                    <a className="hover:decoration-transparent hover:cursor-default">
                        Cursos
                    </a>
                    </Link>
                </h2>
                {showCursosMenu
                ? <>
                <div className="rounded-md gap-2 text-xl p-3 grid grid-flow-row relative">
                    <Link
                    href=''
                    >
                        <a className="text-gray-500 hover:cursor-default hover:decoration-transparent">
                            Niños
                        </a>
                    </Link>
                    <Link
                    href='cursos_para_jovenes'
                    >
                        Jóvenes
                    </Link>
                    <Link
                    href=''
                    >
                        <a className="text-gray-500 hover:cursor-default hover:decoration-transparent">
                            Adultos
                        </a>
                    </Link>
                    
                </div>
                </>
                : null}
                <br/>
                <h2
                className='font-semibold right-2'>
                    <Link 
                    href='instructores'
                    >
                        Instructores
                    </Link>
                </h2>
                <br/>
                <h2
                className='font-semibold right-2'
                >
                    <Link href='contacto'>
                        Contacto
                    </Link>
                </h2>
            </div>
        </div>
    )
}