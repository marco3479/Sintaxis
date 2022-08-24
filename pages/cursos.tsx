import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/Button";

 
const CursosPage = () => {

    const router = useRouter();

    const phases = ['General', 'Programas', 'Pago'];
    const [phase, setPhase] = useState<string>('General');
    const [lvlSelected, setLvlSelected] = useState<string>('');


    const [programSelected, setProgramSelected] = useState<string>('');


    return (
        <div className="flex flex-col m-8">
            <div className='grid justify-center' style={{gridTemplateAreas: "'programs description'", gridTemplateColumns: '30% 50%', columnGap: '20px'}}>
                <div style={{gridArea: 'programs'}}
                className=" flex flex-col  text-black "
                >
                    <div className='grid bg-white rounded-md' style={{gridTemplateAreas: "'CPRadio CP' 'APRadio AP' 'FNRadio FN'", gridTemplateRows: 'auto auto auto' }}>
                        <div className=" p-3 " style={{gridArea: 'CPRadio'}}>
                            <input checked={programSelected === 'CompleteProgrammer' ? true : false} onClick={() => setProgramSelected('CompleteProgrammer')} name='programs' type='radio' id='CompleteProgrammer'/>
                        </div>
                        <details
                        className='bg-white p-3 rounded-md' style={{gridArea: 'CP'}}
                        >
                            <summary  onClick={() => setProgramSelected('CompleteProgrammer')} >
                                &nbsp;&nbsp;&nbsp;
                                <b>Complete Programmer</b> 
                            </summary>
                                &nbsp;&nbsp;&nbsp;
                                <div>
                                    <input onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl1')}} name='lvls' type='radio' id='lvl1'/>
                                    <label htmlFor="lvl1" className={`p-3 border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Lvl 1 </b> &nbsp; Introducción a Programación con Python.
                                    </label>
                                </div>
                                <br/>
                                <div>
                                    <input onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl2')}}  name='lvls' type='radio' id='lvl2'/>
                                    <label htmlFor="lvl2" className={`p-3 border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Lvl 2 </b> &nbsp; Desarrollo de Web con HTML, CSS y JavaScript, y Librerías de Python.
                                    </label>
                                </div>
                                <br/>
                                <div>
                                    <input onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl3')}}  name='lvls' type='radio' id='lvl3'/>
                                    <label htmlFor="lvl3" className={`p-3 border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Lvl 3 </b> &nbsp; Frameworks con Python y Typescript.
                                    </label>
                                </div>
                        </details>
                        <div className=" p-3" style={{gridArea: 'APRadio'}}>
                            <input onClick={() => setProgramSelected('AnalisisPython')}  name='programs' type='radio' id='AnalisisPython'/>
                        </div>
                        <label htmlFor="AnalisisPython" className={`p-3 `} style={{gridArea: 'AP'}}>
                            &nbsp;&nbsp;&nbsp;
                            <b>Análisis de datos con Python</b>
                        </label>
                        <div className="p-3 " style={{gridArea: 'FNRadio'}}>
                            <input onClick={() => setProgramSelected('FullstackNextjs')}  name='programs' type='radio' id='FullstackNextjs'/>
                        </div>
                        <label htmlFor="FullstackNextjs" className={`p-3 `} style={{gridArea: 'FN'}}>
                            &nbsp;&nbsp;&nbsp;
                            <b>Desarrollador de Web FullStack con Next js</b>
                        </label>
                    </div>
                </div>
                <div  style={{gridArea: 'description'}}>
                    {programSelected === 'CompleteProgrammer' && lvlSelected === 'lvl1'
                    ? <div className="grid bg-white rounded-md p-3 text-black">
                    Nuestro programa más completo y el más recomendado para principiantes. El estudiante aprenderá desde Python y sus diversas librerías, hasta Desarrollo Web con HTML y CSS. 
                    <br/>
                    <br/>
                    <b>Requisitos:</b> Ninguno. 
                    </div>
                    : null}
                    {programSelected === 'AnalisisPython'
                    ? <div className="grid bg-white rounded-md p-3 text-black">
                    Un programa de especialización para aquellos que quieran descubrir el mundo del análisis y ciencia de datos con Python. 
                    <br/>
                    <br/>
                    <b>Requisitos:</b>
                    Cierto conocimiento de Python es recomendado, pero no imprescindible.
                    Es recomendado cierta familiarización con estadística y matemática básica.
                    </div>
                    : null}

                </div>
            </div>
            <Button
            className='max-w-min self-center'
                onClick={() => { router.push('/inscripcion')}}
                >
                    Inscribirse
            </Button> 
        </div>
    )
}

export default CursosPage;