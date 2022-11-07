import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
import PythonPhoto from "../public/images/Python.jpg"
import {SubscriptionContextType, useSubscription} from "../context/SubscriptionContext";
import type { ExpressionProps } from './Concept';
const Link = dynamic(() => import('next/link'));
const Concept = dynamic(() => import('./Concept'));
const Expression = dynamic<ExpressionProps>(() => import('./Concept').then(mod => mod.Expression));



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
                                        <Concept>
                                            <Expression lang='es'><b>Nivel 1 </b> &nbsp; Introducción a Programación con Python</Expression>
                                            <Expression lang='en'><b>Lvl 1 </b> &nbsp; Introduction to Programming with Python</Expression>
                                        </Concept>
                                    </label>
                                </div>
                                <div className="bg-gray-300 p-3">
                                    <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl2')}}  name='lvls' type='radio' id='lvl2'/>
                                    <label htmlFor="lvl2" className={`p-3  border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <Concept>
                                            <Expression lang='es'>
                                                <b>Nivel 2 </b> &nbsp; Desarrollo de Web con HTML, CSS y JavaScript, y Librerías de Python
                                            </Expression>
                                            <Expression lang='en'>
                                                <b>Lvl 2 </b> &nbsp; Web Development with HTML, CSS and JavaScript, and Python Packages
                                            </Expression>
                                        </Concept>
                                        <br/>
                                        <i>{'('}
                                        <Concept>
                                            <Expression lang='es'>próximamente</Expression>    
                                            <Expression lang='en'>coming soon</Expression>    
                                        </Concept>
                                        {')'}</i>
                                    </label>
                                </div>
                                <div className="bg-gray-300 p-3">
                                    <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl3')}}  name='lvls' type='radio' id='lvl3'/>
                                    <label htmlFor="lvl3" className={`p-3  border-2 border-[transparent]`}>
                                        &nbsp;&nbsp;&nbsp;
                                        <Concept>
                                            <Expression lang='es'>
                                                <b>Nivel 3 </b> &nbsp; Frameworks con Python y Typescript
                                                <br/>
                                                <i>{'('}próximamente{')'}</i>
                                            </Expression>
                                            <Expression lang='en'>
                                                <b>Lvl 3 </b> &nbsp; Python and Typescript Frameworks
                                                <br/>
                                                <i>{'('}coming soon{')'}</i>
                                            </Expression>
                                        </Concept>
                                    </label>
                                </div>
                        </details>
                    </div>
                    <span className={`p-3 bg-black text-white text-center rounded-b-md`} >
                        &nbsp;&nbsp;&nbsp;
                        <b>
                            <Concept>
                                <Expression lang='es'>¿Buscando otro curso?</Expression>
                                <Expression lang='en'>Looking for a different course?</Expression>
                            </Concept>
                        </b> 
                        
                            <Concept>
                                <Expression lang='es'><Link href='contacto'><a className="text-blue font-semibold"> Contáctanos</a></Link></Expression>
                                <Expression lang='en'><Link href='contact'><a className="text-blue font-semibold"> Contact us</a></Link></Expression>
                            </Concept>
                        
                    </span>
                </div>
                <div 
                className='md:w-[70%] flex flex-col gap-2'
                >
                    {programSelected === 'CompleteProgrammer'
                    ? <div className="bg-white rounded-md p-3 text-black">
                        <Concept>
                            <Expression lang='es'>
                                <b>Complete Programmer</b> es el curso más completo y recomendado 
                                para principiantes. Consta de 3 niveles, en los cuales el estudiante 
                                aprenderá desde 
                                Python y sus diversas librerías, hasta Desarrollo Web con HTML, CSS y JavaScript.  
                            </Expression>
                            <Expression lang='en'>
                                <b>Complete Programmer</b> is the most complete and recommended course
                                for beginners. It is made up of 3 nivels, in which the student will learn
                                Python and its different packages, up to web development with HTML, CSS, and JavaScript.
                            </Expression>
                        </Concept>
                    </div>
                    : null}

                    {programSelected === 'CompleteProgrammer' && lvlSelected === 'lvl1'
                    ? <div className="grid grid-flow-row grid-rows-2 " style={{gridTemplateRows: 'max-content 275px'}}> 
                    <div className="grid bg-white rounded-t-md p-3 text-black">
                        <span>
                            <Concept>
                                <Expression lang='es'>
                                    <b> Introducción a Programación con Python</b> es el primer nivel,
                                    y te lleva
                                    desde cero hasta intermedio. El objetivo es que el estudiante
                                    se sienta cómodo utilizando un lenguaje de programación a través de
                                    proyectos interactivos.
                                </Expression>
                                <Expression lang='en'>
                                    <b> Introduction to Programming with Python</b> is the first level,
                                    and it takes you from zero to intermediate.
                                    The objective is that the student feels comfortable using a programming language
                                    through interactive proyects.
                                </Expression>
                            </Concept>
                        </span>
                        <br/>
                        <span>
                            <Concept>
                                <Expression lang='es'><b>Inversión:</b> $30 al mes</Expression>
                                <Expression lang='en'><b>Investment:</b> $30 per month</Expression>
                            </Concept>
                        </span>
                        <span>
                            <Concept>
                                <Expression lang='es'><b>Duración total:</b> 32 horas distribuidas en 16 semanas</Expression>
                                <Expression lang='en'><b>Total duration:</b> 32 hours distributed across 16 weeks</Expression>
                            </Concept>
                        </span>
                        <span>
                            <Concept>
                                <Expression lang='es'><b>Próxima fecha de inicio: </b></Expression>
                                <Expression lang='en'><b>Next starting date: </b></Expression>
                            </Concept>
                            24/09/2022
                        </span>
                        <span>
                            <Concept>
                                <Expression lang='es'><b>Horario:</b> Sábados de 3-5 pm {'('}GMT-6{')'}</Expression>
                                <Expression lang='en'><b>Schedule: Saturdays from 3-5 pm MT</b></Expression>
                            </Concept>
                            
                        </span>
                        <span>
                            <Concept>
                                <Expression lang='es'>¿Interesado en otro horario? </Expression>
                                <Expression lang='en'>Interested in another schedule? </Expression>
                            </Concept>
                            
                                <Concept>
                                    <Expression lang='es'><Link href='contacto'><a className="text-blue font-semibold"> Contáctanos</a></Link></Expression>
                                    <Expression lang='en'><Link href='contact'><a className="text-blue font-semibold"> Contact us</a></Link></Expression>
                                </Concept>
                        </span>
                        <Concept>
                            <Expression lang='es'>
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
                            </Expression>
                            <Expression lang='en'>
                                <span>
                                <b>Platform:</b> Zoom
                                </span>
                                <br/>
                                <b>Suggestions:</b> 
                                <ul>
                                    <li>13 to 18 years old</li>    
                                </ul> 
                                <br/>
                                <b>Requirements:</b> 
                                <ul>
                                    <li>Computer with internet connection</li>
                                </ul> 
                            </Expression>
                        </Concept>

                        <br/>
                        <span >
                            <a href='/curriculum/Complete_Programmer_Lvl_1_Curriculum.pdf' download>
                                <i className="!text-4xl material-icons translate-y-4 mr-2">
                                    download
                                </i>
                            
                            <b>
                                <Concept>
                                    <Expression lang='es'>Descargar curriculum </Expression>
                                    <Expression lang='en'>Download curriculum</Expression>
                                </Concept>
                            </b>
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
                        <Concept>
                            <Expression lang='es'>
                                Un curso de especialización para aquellos que quieran descubrir el mundo del análisis y ciencia de datos con Python. 
                            </Expression>
                            <Expression lang='en'>
                                A specialized course for people that want to discover the world of data analysis and science with Python. 
                            </Expression>
                        </Concept>
                    <br/>
                    <br/>
                    <Concept>
                        <Expression lang='es'>
                            <b>Recomendaciones:</b>
                            Cierto conocimiento de Python es recomendado, pero no imprescindible.
                            Es recomendado cierta familiarización con estadística y matemática básica.
                        </Expression>
                        <Expression lang='en'>
                            <b>Suggestions:</b>
                            Some Python knowledge is recommended, but not absolutely necessary.
                            It is recommended to be familiar with statistics and basic math.
                        </Expression>
                    </Concept>
                    </div>
                    : null}

                </div>
            </div>
        </>
    )
}

