import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout ({ children }:any) {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
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
            className='hidden p-5 text-3xl z-[3] text-right flex-col sm:hidden h-full bg-opacity-90 bg-black min-w-min right-0'
            id='menuOptions'
            >
                <br/>
                <br/>
                <h2
                className='font-semibold right-2'
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
                >
                    <Link href='contacto'>
                        Contacto
                    </Link>
                </h2>
            </div>
        </div>
        </>
    )
}