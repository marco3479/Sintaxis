import Image from 'next/image';
import PythonPhoto from "../public/images/Python.jpg"
import {SubscriptionContextType, useSubscription} from "../context/SubscriptionContext";
import Link from "next/link";




export default function CursosParaJóvenes () {

    const Context: SubscriptionContextType = useSubscription();

    const {
        lvlSelected,
        setLvlSelected,
        programSelected,
        setProgramSelected,
    } = Context

    return (
        <>
            <div className='flex flex-col md:flex-row gap-2 justify-center'>
                <div 
                className=" flex flex-col md:w-[30%] text-black "
                >
                    <div className='grid bg-white rounded-t-md min-w-min' style={{gridTemplateAreas: "'CPRadio CP' 'APRadio AP' 'FNRadio FN'", gridTemplateRows: 'auto auto auto' }}>
                        <div className=" p-3 " style={{gridArea: 'CPRadio'}}>
                            <input required className='requiredInput' checked={programSelected === 'CompleteProgrammer' ? true : false} onClick={() => setProgramSelected('CompleteProgrammer')} name='programs' type='radio' id='CompleteProgrammer'/>
                        </div>
                        <details
                        open={programSelected === 'CompleteProgrammer' ? true : false}
                        className='p-3 rounded-md' style={{gridArea: 'CP'}}
                        >
                            <summary  onClick={() => setProgramSelected('CompleteProgrammer')} >
                                &nbsp;&nbsp;&nbsp;
                                <b>Complete Programmer</b> 
                            </summary>
                                &nbsp;&nbsp;&nbsp;
                                <div className="p-3">
                                    <input checked={lvlSelected === 'lvl1' ? true : false} onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl1')}} name='lvls' type='radio' id='lvl1'/>
                                    <label htmlFor="lvl1" className='p-3 border-2 border-[transparent]' /*requiredInput*/>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Nivel 1 </b> &nbsp; Introducción a Programación con Python
                                    </label>
                                </div>
                                <div className="bg-gray-300 p-3">
                                    <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl2')}}  name='lvls' type='radio' id='lvl2'/>
                                    <label htmlFor="lvl2" className={`p-3  border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Nivel 2 </b> &nbsp; Desarrollo de Web con HTML, CSS y JavaScript, y Librerías de Python
                                        <br/>
                                        <i>{'('}próximamente{')'}</i>
                                    </label>
                                </div>
                                <div className="bg-gray-300 p-3">
                                    <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl3')}}  name='lvls' type='radio' id='lvl3'/>
                                    <label htmlFor="lvl3" className={`p-3  border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Nivel 3 </b> &nbsp; Frameworks con Python y Typescript
                                        <br/>
                                        <i>{'('}próximamente{')'}</i>
                                    </label>
                                </div>
                        </details>
                    </div>
                    <span className={`p-3 bg-black text-white text-center rounded-b-md`} >
                        &nbsp;&nbsp;&nbsp;
                        <b>¿Buscando otro curso?</b> <Link href='contacto'><a className="text-blue font-semibold">Contáctanos</a></Link>
                    </span>
                </div>
                <div 
                className='md:w-[70%] flex flex-col gap-2'
                >
                    {programSelected === 'CompleteProgrammer'
                    ? <div className="bg-white rounded-md p-3 text-black">
                    <b>Complete Programmer</b> es el curso más completo y recomendado 
                    para principiantes. Consta de 3 niveles, en los cuales el estudiante 
                    aprenderá desde 
                    Python y sus diversas librerías, hasta Desarrollo Web con HTML, CSS y JavaScript.  
                    </div>
                    : null}

                    {programSelected === 'CompleteProgrammer' && lvlSelected === 'lvl1'
                    ? <div className="grid grid-flow-row grid-rows-2 " style={{gridTemplateRows: 'max-content 275px'}}> 
                    <div className="grid bg-white rounded-t-md p-3 text-black">
                        <span>
                            <b> Introducción a Programación con Python</b> es el primer nivel,
                            y te lleva
                            desde cero hasta intermedio. El objetivo es que el estudiante
                            se sienta cómodo utilizando un lenguaje de programación a través de
                            proyectos interactivos.
                        </span>
                        <br/>
                        <span>
                            <b>Inversión:</b> $50 al mes
                        </span>
                        <span>
                            <b>Duración total:</b> 32 horas distribuidas en 16 semanas
                        </span>
                        <span>
                            <b>Próxima fecha de inicio:</b> 24/09/2022
                        </span>
                        <span>
                            <b>Horario:</b> Sábados de 3-5 pm {'('}GMT-6{')'}
                        </span>
                        <span>
                            ¿Interesado en otro horario? <Link href='contacto'><a className="text-blue font-semibold">Contáctanos</a></Link>
                        </span>
                        <span>
                            <b>Plataforma:</b> Zoom
                        </span>
                        <br/>
                        <b>Recomendaciones:</b> 
                        <ul>
                            <li>13 a 18 años</li>    
                        </ul> 
                        <br/>
                        <b>Requisitos:</b> 
                        <ul>
                            <li>Computadora con conexión al internet</li>
                        </ul> 
                        <br/>
                        <span >
                            <a href='/curriculum/Complete_Programmer_Lvl_1_Curriculum.pdf' download>
                                <i className="!text-4xl material-icons translate-y-4 mr-2">
                                    download
                                </i>
                            
                            <b>Descargar curriculum </b>
                            </a>
                        </span>
                        <br/>
                    </div>
                    <div className=' relative'>
                        <Image
                        src={PythonPhoto}
                        alt={'Foto de Python'}
                        layout='fill'
                        loading='eager'
                        placeholder='blur'
                        objectFit="cover"
                        objectPosition={"center"}
                        />
                    </div>
                    </div>
                    : null}

                    {programSelected === 'AnalisisPython'
                    ? <div className="grid bg-white rounded-md p-3 text-black">
                    Un curso de especialización para aquellos que quieran descubrir el mundo del análisis y ciencia de datos con Python. 
                    <br/>
                    <br/>
                    <b>Requisitos:</b>
                    Cierto conocimiento de Python es recomendado, pero no imprescindible.
                    Es recomendado cierta familiarización con estadística y matemática básica.
                    </div>
                    : null}

                </div>
            </div>
        </>
    )
}


/*

<div className=" p-3 bg-gray-300" style={{gridArea: 'APRadio'}}>
    <input disabled onClick={() => setProgramSelected('AnalisisPython')}  name='programs' type='radio' id='AnalisisPython'/>
</div>
<label htmlFor="AnalisisPython" className={`p-3 bg-gray-300`} style={{gridArea: 'AP'}}>
    &nbsp;&nbsp;&nbsp;
    <b>Análisis de datos con Python</b>
    <br/> <i>{'('}próximamente{')'}</i>
</label>
<div className="p-3 bg-gray-300" style={{gridArea: 'FNRadio'}}>
    <input disabled onClick={() => setProgramSelected('FullstackNextjs')}  name='programs' type='radio' id='FullstackNextjs'/>
</div>
<label htmlFor="FullstackNextjs" className={`p-3 bg-gray-300`} style={{gridArea: 'FN'}}>
    &nbsp;&nbsp;&nbsp;
    <b>Desarrollador de Web FullStack con Next js</b> 
    <br/> <i>{'('}próximamente{')'}</i>
</label>


*/
