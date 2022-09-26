import Link from "next/link";
import { PreferencesType, usePreferences } from "../context/UserPreferences";
import Concept, { Expression } from "./Concept";

export default function PromoBanner () {

    const {language}: PreferencesType = usePreferences();

    return(
        <div 
        className="grid overflow-hidden  grid-flow-col grid-cols-2 items-center py-2  text-base  z-20 bg-yellow text-black bottom-0 w-full "
        id='promoBanner'
        style={{gridTemplateColumns: '90% 10%'}}
        >
            <div 
            className=" items-center text-base text-center md:grid grid-flow-col grid-cols-3 w-full justify-center md:!gap-6 "
            style={{gridTemplateColumns: '35% max-content 40%'}}
            >
                <span className="text-right hidden md:block">
                    <i>
                        <Concept>
                            <Expression lang='es'>Obtené 20% de descuento con el código</Expression>    
                            <Expression lang='en'>Get 20% discount with the code</Expression>    
                        </Concept>
                    </i>
                </span>
                <div className="text-center  ml-3 md:ml-0 place-items-center justify-around">
                    <span className="md:hidden">
                        <Concept>
                            <Expression lang='es'>Primeros 5 estudiantes obtienen curso GRATIS con código</Expression>
                            <Expression lang='es'>First 5 students get FREE course with the code</Expression>
                            {/*<Expression lang='es'>Obtené 20% de descuento con el código</Expression>
                            <Expression lang='en'>Get 20% discount with the code</Expression>*/}
                        </Concept>
                    </span> 
                    &nbsp;
                    <b className="hover:bg-white hover:text-blue text-xl"><Link href={language === 'es' ? 'inscripcion' : language === 'en' ? 'signup' : ''}>&nbsp;SINTAXIS100&nbsp;</Link></b>
                    &nbsp;
                    <span className="md:hidden">
                        <Concept>
                            <Expression lang='es'>{/*en* el curso/} <b> &nbsp;Introducción a Programación con Python</b> </Expression>     
                            <Expression lang='en'>{/*in the course*/} <b> &nbsp;Introduction to Programming with Python</b> </Expression>     
                        </Concept>
                    </span> 
                </div>
                <span className="text-left hidden md:inline">
                    <Concept>
                        <Expression lang='es'>{/*en el curso*/} <b> &nbsp;Introducción a Programación con Python</b> </Expression>     
                        <Expression lang='en'>{/*in the course*/} <b> &nbsp;Introduction to Programming with Python</b> </Expression>     
                    </Concept>
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