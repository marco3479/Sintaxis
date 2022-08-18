import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/images/LogoType.png'


const Navbar = () => {
    return (
      <div
      className=' bg-black z-[3] text-white w-full font-semibold h-[7%] relative flex flex-row text-2xl justify-between items-center drop-shadow-lg '
      >
        <div
        className='justify-self-start ml-8'
        >
            <Link href='/'>
                <Image 
                alt='Logo'
                className='relative translate-y-1 hover:cursor-pointer'
                width='60%'
                height='60%'
                //layout='fill'
                
                //objectFit="cover" 
                //objectPosition='0% 30%'
                src={Logo}
                />
            </Link>
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