import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Concept, { Expression } from "./Concept";
import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner";

export default function Layout ({ children }:any) {


    const [language, setLanguage] = useLanguage();



    const [showCursosMenu, setShowCursosMenu] = useState<boolean>(true);


    const closeMenu = () => {
        const menu = document.getElementById('menuOptions') as HTMLElement;
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');

    }

    return (
        <div
        className='absolute w-[100vw] h-[100vh] overflow-hidden'
        >
            <PromoBanner/>
            <div
            className='flex absolute flex-col w-[100vw] h-[100vh] overflow-hidden'
            >
                <Navbar/>
                <main
                className='bg-blue w-full h-[93%] overflow-y-auto   absolute bottom-0'
                >
                    {children}
                </main>
                <div
                className='hidden sticky p-5 text-3xl z-[3] text-right flex-col lg:hidden overflow-y-auto h-full bg-opacity-90 text-white max-w-min bg-black min-w-min self-end right-0'
                id='menuOptions'
                >
                    <br/>
                    <h2
                    className='font-semibold right-2'
                    onClick={closeMenu}
                    >
                        <Concept>
                            <Expression lang='es'>
                                <Link href='inscripcion'>
                                    <a>
                                        Inscribirse
                                    </a>
                                </Link>
                        </Expression>
                        <Expression lang='en'>
                            <Link href='signup'>
                                <a>
                                    Sign Up
                                </a>
                            </Link>        
                        </Expression>
                        </Concept>
                    </h2>
                    <br/>
                    <h2
                    className='font-semibold right-2'
                    >
                        <Link 
                        href=''
                        >
                        <a className="hover:decoration-transparent hover:cursor-default">
                            <Concept>
                                <Expression lang='es'>Cursos</Expression>
                                <Expression lang='en'>Courses</Expression>
                            </Concept>
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
                                <Concept>
                                    <Expression lang='es'>Niños</Expression>
                                    <Expression lang='en'>Kids</Expression>
                                </Concept>
                            </a>
                        </Link>
                        <Link
                        href={language === 'es' ? 'cursos_para_jovenes' : language === 'en' ? 'courses_for_the_young' : ''}
                        >
                            <a
                            onClick={closeMenu}
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
                    <br/>
                    <h2
                    className='font-semibold right-2'
                    onClick={closeMenu}
                    >
                        <Link 
                        href={language === 'es' ? 'instructores' : language === 'en' ? 'instructors' : ''}
                        >
                            <a>
                                <Concept>
                                    <Expression lang='es'>Instructores</Expression>
                                    <Expression lang='en'>Instructors</Expression>
                                </Concept>
                            </a>
                        </Link>
                    </h2>
                    <br/>
                    <h2
                    className='font-semibold right-2'
                    onClick={closeMenu}
                    >
                        <Link href={language === 'es' ? 'contacto' : language === 'en' ? 'contact' : ''}>
                            <a>
                                <Concept>
                                    <Expression lang='es'>Contacto</Expression>
                                    <Expression lang='en'>Contact</Expression>
                                </Concept>
                            </a>
                        </Link>
                    </h2>
                    <br/>
                    <br/>
                    <h2 className={`text-lg hover:cursor-pointer place-self-end font-semibold border-2  max-w-max right-2 rounded-md p-2 py-1 ${language === 'en' ? ' border-white' : 'border-transparent'}`} onClick={() => setLanguage!('en')}>EN</h2>
                    <h2 className={`text-lg hover:cursor-pointer place-self-end font-semibold border-2  max-w-max right-2 rounded-md p-2 py-1 ${language === 'es' ?  'border-white' : 'border-transparent'}`} onClick={() => setLanguage!('es')}>ES</h2>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}