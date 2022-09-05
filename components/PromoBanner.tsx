import Link from "next/link";

export default function PromoBanner () {
    return(
        <div 
        className="grid overflow-hidden  grid-flow-col grid-cols-2 items-center py-2  text-base  z-20 bg-[#f5ed02] text-black bottom-0 w-full "
        id='promoBanner'
        style={{gridTemplateColumns: '90% 10%'}}
        >
            <div 
            className=" items-center text-base text-center md:grid grid-flow-col grid-cols-3 w-full justify-center md:!gap-6 "
            style={{gridTemplateColumns: '35% max-content 40%'}}
            >
                <span className="text-right hidden md:block">
                    <i>Obtené 20% de descuento con el código</i>
                </span>
                <div className="text-center  ml-3 md:ml-0 place-items-center justify-around">
                    <span className="md:hidden">Obtené 20% de descuento con el código</span> 
                    &nbsp;
                    <b className="hover:bg-white hover:text-blue text-xl"><Link href='inscripcion'>&nbsp;SINTAXIS20&nbsp;</Link></b>
                    &nbsp;
                    <span className="md:hidden">en el curso <b> &nbsp;Introducción a Programación con Python</b> </span> 
                </div>
                <span className="text-left hidden md:inline">
                    en el curso <b> &nbsp;Introducción a Programación con Python</b> 
                </span>
            </div>
            <button
            className="text-center flex justify-center"
            onClick={() => {
                const pB = document.getElementById('promoBanner') as HTMLDListElement;
                pB.classList.add('hidden');
                pB.classList.remove('flex');
                }}
            >
                <i 
                className='material-icons text-black text-xl fa fa-times p-1 rounded-md hover:bg-black hover:text-white' 
                >
                </i>
            </button>
        </div>
    )
}