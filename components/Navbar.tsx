import Link from "next/link"
import Image from 'next/image'
import LogoType from '../public/images/LogoType.png'
import LogoMark from '../public/images/LogoMark.png'
import { useEffect, useState } from "react"


const Navbar = () => {


    const [screenSize, setScreenSize] = useState<number|undefined>()


    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })
    }, [])


    return (
      <div
      className=' bg-black z-[4] overflow-hidden text-white w-full font-semibold h-[7%] relative flex flex-row text-2xl justify-between items-center drop-shadow-lg '
      >
        <div
        className='justify-self-start ml-8'
        >
           {screenSize! < 750       // small screen
           ? <Link href='/'>
                <Image 
                alt='Logo'
                className='relative translate-y-1 hover:cursor-pointer'
                width='60%'
                height='60%'
                src={LogoType}
                />
            </Link>             // larger screens
            : <Link href='/'>       
                <Image 
                alt='Logo'
                className='relative translate-y-[2px] translate-x-[-6px]  hover:cursor-pointer'
                width='200%'
                height='200%'
                src={LogoMark}
                />
            </Link> }
        </div>
        <div
        className="flex flex-row justify-end "
        >
            <h2
            className='hidden sm:flex mr-12 '
            >
            <Link 
            href='cursos'
            >
                Cursos
            </Link>
            </h2>
            <h2
            className=' hidden sm:flex mr-12 font-semibold'
            >
            <Link 
            href='instructores'
            >
                Instructores
            </Link>
            </h2>
            <h2
            className='hidden sm:flex  mr-12 font-semibold'
            >
            <Link href='contacto'>
                Contacto
            </Link>
            </h2>
            <button
            onClick={(e) => {
                const menu = document.getElementById('menuOptions') as HTMLElement;
                menu.classList.toggle('hidden');
                menu.classList.toggle('absolute');
                menu.classList.toggle('flex');
            }}
            >
                <i
                className='material-icons text-3xl sm:hidden mr-12 font-semibold'
                >
                    menu
                </i>
            </button>
        </div>
    </div>
    )
  }

export default Navbar