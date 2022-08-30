import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout ({ children }:any) {


    return (
        <div
        style={{position: 'absolute', display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh'}}
        >
            <Navbar/>
            <main
            className='bg-blue text-white w-full h-[93%]  relative overflow-y-auto'
            >
                {children}
            </main>
            <div
            className='hidden absolute p-5 text-3xl z-[3] text-right flex-col sm:hidden h-full bg-opacity-90 text-white bg-black min-w-min right-0'
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
                    href='cursos'
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