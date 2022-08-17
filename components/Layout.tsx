import Navbar from "./Navbar";

export default function Layout ({ children }:any) {
    return (
        <div
        style={{position: 'absolute', display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}
        >
            <Navbar/>
            <main
            className='bg-brown text-white w-full h-[93%]  relative'
            >
                {children}
            </main>
        </div>
    )
}