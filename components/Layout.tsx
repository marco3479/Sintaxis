import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout ({ children }:any) {


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
            >
                <br/>
                <br/>
                <h2
                className='font-semibold right-2'
                onClick={() => {
                    const menu = document.getElementById('menuOptions') as HTMLElement;
                    menu.classList.toggle('hidden');
                    menu.classList.toggle('flex');
                    }
                }
                >
                    <Link href='inscripcion'>
                        Inscribirse
                    </Link>
                </h2>
                <br/>
                <h2
                className='font-semibold right-2'
                onClick={() => {
                    const menu = document.getElementById('menuOptions') as HTMLElement;
                    menu.classList.toggle('hidden');
                    menu.classList.toggle('flex');
                    }
                }
                >
                    <Link 
                    href='cursos_para_jovenes'
                    >
                        Cursos
                    </Link>
                </h2>
                <br/>
                <h2
                className='font-semibold right-2'
                onClick={() => {
                    const menu = document.getElementById('menuOptions') as HTMLElement;
                    menu.classList.toggle('hidden');
                    menu.classList.toggle('flex');
                    }
                }

                >
                    <Link 
                    href='instructores'
                    >
                        Instructores
                    </Link>
                </h2>
                <br/>
                <h2
                className='font-semibold right-2'
                onClick={() => {
                    const menu = document.getElementById('menuOptions') as HTMLElement;
                    menu.classList.toggle('hidden');
                    menu.classList.toggle('flex');
                    }
                }
                >
                    <Link href='contacto'>
                        Contacto
                    </Link>
                </h2>
            </div>
        </div>
    )
}