import Link from "next/link"
import Image from 'next/image'
import LogoType from '../public/images/LogoType.png'
import LogoMark from '../public/images/LogoMark.png'
import { useEffect, useLayoutEffect, useState } from "react"
import { useRouter } from "next/router"
import Button from "./Button"
import { useLanguage } from "../context/LanguageContext"
import Concept, { Expression } from "./Concept"


const Navbar = () => {

    const router = useRouter();
    const [screenSize, setScreenSize] = useState<number|undefined>();

    const [showCursosMenu, setShowCursosMenu] = useState<boolean>(false);
    const [showLangMenu, setShowLangMenu] = useState<boolean>(false);

    const [language, setLanguage] = useLanguage();


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
        className='grid grid-flow-row justify-center cursor-pointer p-1 w-20'
        onMouseLeave={() => setShowLangMenu(false)}
        >
            <h3 
            className='hidden overflow-visible lg:flex text-lg justify-center font-semibold border-2 border-white rounded-md p-2 py-1 hover:bg-white hover:text-blue'
            onClick={() => setShowLangMenu(!showLangMenu)}
            >
                <Concept>
                    <Expression lang='es'>ES</Expression>
                    <Expression lang='en'>EN</Expression>
                </Concept>
            </h3>
            {showLangMenu
            ? 
            <div className="bg-black rounded-b-md gap-2 text-xl p-3 grid grid-flow-row absolute justify-self-center translate-y-[2.8rem]">
                <h2 className={`${language === 'en' ? 'text-blue' : ''}`} onClick={() => setLanguage!('en')}>EN</h2>
                <h2 className={`${language === 'es' ? 'text-blue' : ''}`} onClick={() => setLanguage!('es')}>ES</h2>
            </div>
            : null}
        </div>
        <div
        className="flex flex-row justify-center text-center"
        >
            <div 
            className='flex flex-col mr-12 place-self-center'
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
                        <Concept>
                            <Expression lang='es'>Cursos</Expression>
                            <Expression lang='en'>Courses</Expression>
                        </Concept>
                    </a>
                </Link>
                </h2>
                {showCursosMenu
                ? <>
                <div className="bg-black rounded-b-md gap-2 text-xl p-3 grid grid-flow-row translate-y-[2rem] -translate-x-[2rem] absolute">
                    <Link
                    href=''
                    >
                        <a className="text-gray-500 hover:cursor-default hover:decoration-transparent">
                            <Concept>
                                <Expression lang='es'>Niños</Expression>
                                <Expression lang='en'>Kids</Expression>
                            </Concept>
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
                            <Concept>
                                <Expression lang='es'>Jóvenes</Expression>
                                <Expression lang='en'>Youth</Expression>
                            </Concept>
                        </a>
                    </Link>
                    <Link
                    href=''
                    >
                        <a className="text-gray-500 hover:cursor-default hover:decoration-transparent">
                            <Concept>
                                <Expression lang='es'>Profesionales</Expression>
                                <Expression lang='en'>Professionals</Expression>
                            </Concept>
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
                <a>
                <Concept>
                    <Expression lang='es'>Instructores</Expression>
                    <Expression lang='en'>Instructors</Expression>
                </Concept>
                </a>
            </Link>
            </h2>
            <h2
            className='hidden lg:flex place-items-center mr-12 font-semibold'
            >
            <Link href='contacto'>
                <a>
                <Concept>
                    <Expression lang='es'>Contacto</Expression>
                    <Expression lang='en'>Contact</Expression>
                </Concept>
                </a>
            </Link>
            </h2>
            <div className=" hidden lg:grid place-content-center mr-12">
                <Button
                    className="m-0"
                    onClick={() => {
                    router.push('/inscripcion');
                    }}
                    >
                    <Concept>
                        <Expression lang='es'>Inscribirse</Expression>
                        <Expression lang='en'>Sign Up</Expression>
                    </Concept>
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