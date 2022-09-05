import Link from "next/link"
import Image from 'next/image'
import LogoType from '../public/images/LogoType.png'
import LogoMark from '../public/images/LogoMark.png'
import { useEffect, useLayoutEffect, useState } from "react"
import { useRouter } from "next/router"
import Button from "./Button"


const Navbar = () => {

    const router = useRouter();
    const [screenSize, setScreenSize] = useState<number|undefined>();

    const [showCursosMenu, setShowCursosMenu] = useState<boolean>(false);


    useLayoutEffect(() => {
        setScreenSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })
    }, [])


    return (
      <div
      className=' bg-black z-[4] top-0  text-white w-full font-semibold h-[7%] min-h-[58px] sticky flex flex-row text-2xl justify-between items-center drop-shadow-lg '
      >
        <div
        className='justify-self-start overflow-hidden relative h-full ml-8'
        >
            <Image 
            alt='Logo'
            className='relative sm:-translate-y-[4.5rem]  sm:translate-x-[-6px]  hover:cursor-pointer'
            width={screenSize! < 640 ? '60%' : '200%'}
            height={screenSize! < 640 ? '60%' : '200%'}            
            onClick={() => {router.push('/')}}
            src={screenSize! < 640 ? LogoType : LogoMark}
            priority
            />
        </div>
        <div
        className="flex flex-row justify-end text-center"
        >
            <div 
            className={`flex flex-col  ${showCursosMenu ? 'translate-y-[3.9rem] mr-[2.3rem]' : 'mr-12 translate-y-[0.4rem]'}`}
            onMouseLeave={() => setShowCursosMenu(false)}
            >

                <h2
                className='hidden lg:flex  justify-center font-semibold'
                onClick={() => {
                    setShowCursosMenu(!showCursosMenu);
                }}

                >
                <Link 
                href=''
                >
                    <a className="hover:decoration-transparent">
                        Cursos
                    </a>
                </Link>
                </h2>
                {showCursosMenu
                ? <>
                <div className="bg-black rounded-md gap-2 text-xl p-3 grid grid-flow-row relative">
                    <Link
                    href=''
                    >
                        <a className="text-gray-500 hover:cursor-default hover:decoration-transparent">
                            Niños
                        </a>
                    </Link>
                    <Link
                    href={'cursos_para_jovenes'}
                    >
                        <a
                        onClick={() => {
                            setShowCursosMenu(false);
                        }}
                        >

                            Jóvenes
                        </a>
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
            </div>
            <h2
            className=' hidden lg:flex place-items-center mr-12 font-semibold'
            >
            <Link 
            href='instructores'
            >
                Instructores
            </Link>
            </h2>
            <h2
            className='hidden lg:flex place-items-center mr-12 font-semibold'
            >
            <Link href='contacto'>
                Contacto
            </Link>
            </h2>
            <div className=" hidden lg:grid place-content-center mr-12">
                <Button
                    className="m-0"
                    onClick={() => {
                    router.push('/inscripcion');
                    }}
                    >
                    Inscribirse
                </Button>
            </div>
            <button
            className='grid place-content-center lg:hidden'
            onClick={() => {
                const menu = document.getElementById('menuOptions') as HTMLElement;
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                /*if (menu.classList.contains('flex')) {
                    menu.onmouseleave = () => {
                        menu.classList.toggle('hidden');
                        menu.classList.toggle('flex');  
                        menu.onmouseleave = null;
                    }
                }*/
            }}
            >
                <i
                className='material-icons !text-3xl  mr-12 font-semibold'
                >
                    menu
                </i>
            </button>
        </div>
    </div>
    )
  }

export default Navbar