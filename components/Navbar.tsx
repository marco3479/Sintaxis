import Link from "next/link"

const Navbar = () => {
    return (
      <div
      className='bg-white z-[2] text-black w-full font-semibold h-[7%] relative flex flex-row text-2xl justify-between items-center drop-shadow-lg'
      >
        <h1
        className='justify-self-start ml-12'
        >
            <Link href='/'>
                Logo
            </Link>
        </h1>
        <div
        className="flex flex-row justify-end"
        >
            <h2
            className='mr-12 '
            >
            <Link 
            href='cursos'
            >
                Cursos
            </Link>
            </h2>
            <h2
            className='mr-12 font-semibold'
            >
            <Link 
            href='instructores'
            >
                Instructores
            </Link>
            </h2>
            <h2
            className='mr-12 font-semibold'
            >
            <Link href='contacto'>
                Contacto
            </Link>
            </h2>
        </div>
    </div>
    )
  }

export default Navbar