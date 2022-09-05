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
            /*onClick={() => {
                const menu = document.getElementById('menuOptions') as HTMLElement;
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                }
            }*/
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
                            Profesionales
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
            <div 
                className="absolute grid overflow-hidden drop-shadow-lg shadow-lg shadow-black grid-flow-col grid-cols-2 items-center py-2  text-base  z-20 bg-brown bottom-0 w-full "
                id='promoBanner'
                style={{gridTemplateColumns: '90% 10%'}}

            >
                <div 
                className=" items-center text-base text-center md:grid grid-flow-col grid-cols-3 w-full justify-center md:!gap-8 "
                style={{gridTemplateColumns: '40% max-content 40%'}}
                >
                    <i className="text-right hidden md:inline">
                        Obten 20% descuento con el código
                    </i>
                    <div className="text-center flex ml-3 flex-row place-items-center justify-around">
                        <div className="md:hidden">20% descuento con código</div>
                        &nbsp;
                        <b className="hover:bg-white hover:text-blue text-xl"><Link href='inscripcion'>&nbsp;SINTAXIS20&nbsp;</Link></b>
                    </div>
                    <span className="text-left hidden md:inline">
                        en el curso <b> &nbsp;Programador Completo - Nivel 1</b> 
                    </span>
                </div>
                <button
                className="text-center flex justify-center"
                onClick={() => {
                    const pB = document.getElementById('promoBanner') as HTMLDListElement;
                    pB.classList.add('hidden');
                    pB.classList.remove('flex');
                    }}
                >
                    <i 
                    className='material-icons text-white text-xl fa fa-close p-1 rounded-md hover:bg-white hover:text-black' 
                    >
                    </i>
                </button>
            </div>
        </div>
    )
}