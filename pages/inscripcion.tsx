import { useState } from "react";
import Button from "../components/Button";
import PythonPhoto from "../public/images/Python.jpg"
import Image from 'next/image';

export interface generalData {
    name: string,
    birthdate: string,
    address: string,
    city: string,
    email: string,
    phoneNumber: string
}

const Inscripcion = () => {


    const [phase, setPhase] = useState<string>('General');


    const phases = ['General', 'Programas', 'Pago'];

        
 

    const [ generalData, setGeneralData] = useState<generalData>({
        name: '',
        birthdate: '',
        address: '',
        city: '',
        email: '',
        phoneNumber: ''
    })

    const SendEmail = async (e:any) => {
        e.preventDefault();
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(generalData)   // ADD OTHER DATA HERE (PROGRAMS AND OTHER)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              /*setSubmitted(true)
              setName('')
              setEmail('')
              setBody('')*/
            }})
        /*axios.post('/api/sendEmail', {generalData.email})
        .then((res) => {
                alert('Send Email To You')
            })
        .catch ((e) => console.log(e))*/
    }



    const [programSelected, setProgramSelected] = useState<string>('CompleteProgrammer');
    const [lvlSelected, setLvlSelected] = useState<string>('lvl1');
    
    function styleMod(ClassSelected: string) {
        if (programSelected === ClassSelected) return 'border-blue border-dashed' 
        else return 'border-[transparent]'
    }

    return (
        <div className='p-3 h-full'>
            <br/>
            <ul
            className='flex flex-row justify-evenly '
            >
                {phases.map((Phase, index) => (
                    <li
                    className={`border-white border- hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase == Phase ? 'bg-white text-blue' : ''}`}
                    key={index}
                    onClick={() => {
                        setPhase(Phase)
                    }}
                    >
                        {Phase}
                    </li>
                ))}
            </ul>
            <div
            className="  mt-8 overflow-y-auto"
            >
                <form>
                    {phase == 'General'
                    ?             <>
                    <br/>
                    <div className='flex flex-col items-center lg:flex-row justify-center lg:gap-20 relative'>
                        <div className='grid  relative align-middle'>
                            <label className="text-lg font-semibold" htmlFor='NombreCompleto'>
                                Nombre Completo
                                <br/>
                                <input value={generalData.name} className='p-2 mt-2  rounded-md ' type='text' id='NombreCompleto' 
                                onChange={(e) => {setGeneralData((dD: generalData) => (
                                {
                                    ...dD,
                                    name: e.target.value
                                }
                                ))}}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='FechaDeNac'>
                                Fecha de Nacimiento
                                <br/>
                                <input  className='p-2 mt-2 rounded-md ' type='date' id='FechaDeNac'
                                value={generalData.birthdate}
                                onChange={(e) => setGeneralData((dD:generalData) => ({
                                    ...dD, 
                                    birthdate: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Ciudad'>
                                Ciudad
                                <br/>
                                <input value={generalData.city} className='p-2 mt-2 rounded-md ' type='text' id='Ciudad' 
                                onChange={(e) => {setGeneralData((dD: generalData) => (
                                {
                                    ...dD,
                                    city: e.target.value
                                }
                                ))}}
                                />
                            </label>
                            <br/>
                            <br/>
                        </div>
                        <div className='flex flex-col relative'>
                            <label className="text-lg font-semibold" htmlFor='Domicilio'>
                                Domicilio
                                <br/>
                                <textarea className='p-2 resize-y mt-2 h-[100px] rounded-md '  id='Domicilio'
                                value={generalData.address}
                                onChange={(e) => setGeneralData((dD:generalData) => ({
                                    ...dD, 
                                    address: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Email'>
                                Correo Electrónico
                                <br/>
                                <input  className=' p-2 mt-2 rounded-md ' type='email' id='Email'
                                value={generalData.email}
                                onChange={(e) => setGeneralData((dD:generalData) => ({
                                    ...dD,
                                    email: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Telefono'>
                                Número de Telefono
                                <br/>
                                <input type='tel' className='p-2 mt-2 rounded-md 'id='Telefono'
                                value={generalData.phoneNumber}
                                onChange={(e) => setGeneralData((dD:generalData) => ({
                                    ...dD,
                                    phoneNumber: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <Button
                            className="max-w-min"
                            onClick={() => { setPhase('Programas'); console.log(generalData) }}
                            >
                                Siguiente
                            </Button>
                        </div>
                    </div>
                    </>
                    : null}

                    {phase == 'Programas'
                    ? <>
                    <div className="flex flex-col">
                        <div className='flex flex-col md:flex-row gap-2 justify-center'>
                            <div 
                            className=" flex flex-col md:w-[30%] text-black "
                            >
                                <div className='grid bg-white rounded-md min-w-min' style={{gridTemplateAreas: "'CPRadio CP' 'APRadio AP' 'FNRadio FN'", gridTemplateRows: 'auto auto auto' }}>
                                    <div className=" p-3 " style={{gridArea: 'CPRadio'}}>
                                        <input checked={programSelected === 'CompleteProgrammer' ? true : false} onClick={() => setProgramSelected('CompleteProgrammer')} name='programs' type='radio' id='CompleteProgrammer'/>
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
                                                <label htmlFor="lvl1" className={`p-3 border-2 border-[transparent]`}>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <b>Lvl 1 </b> &nbsp; Introducción a Programación con Python.
                                                </label>
                                            </div>
                                            <div className="bg-gray-300 p-3">
                                                <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl2')}}  name='lvls' type='radio' id='lvl2'/>
                                                <label htmlFor="lvl2" className={`p-3  border-2 border-[transparent]`}>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <b>Lvl 2 </b> &nbsp; Desarrollo de Web con HTML, CSS y JavaScript, y Librerías de Python.
                                                    <br/>
                                                    <i>{'('}próximamente{')'}</i>
                                                </label>
                                            </div>
                                            <div className="bg-gray-300 p-3">
                                                <input disabled onClick={() => {setProgramSelected('CompleteProgrammer'); setLvlSelected('lvl3')}}  name='lvls' type='radio' id='lvl3'/>
                                                <label htmlFor="lvl3" className={`p-3  border-2 border-[transparent]`}>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <b>Lvl 3 </b> &nbsp; Frameworks con Python y Typescript.
                                                    <br/>
                                                    <i>{'('}próximamente{')'}</i>
                                                </label>
                                            </div>
                                    </details>
                                    <div className=" p-3 bg-gray-300" style={{gridArea: 'APRadio'}}>
                                        <input disabled onClick={() => setProgramSelected('AnalisisPython')}  name='programs' type='radio' id='AnalisisPython'/>
                                    </div>
                                    <label htmlFor="AnalisisPython" className={`p-3 bg-gray-300`} style={{gridArea: 'AP'}}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Análisis de datos con Python</b>
                                        <br/> <i>{'('}próximamente{')'}</i>
                                    </label>
                                    <div className="p-3 bg-gray-300 rounded-bl-md" style={{gridArea: 'FNRadio'}}>
                                        <input disabled onClick={() => setProgramSelected('FullstackNextjs')}  name='programs' type='radio' id='FullstackNextjs'/>
                                    </div>
                                    <label htmlFor="FullstackNextjs" className={`p-3 bg-gray-300 rounded-br-md`} style={{gridArea: 'FN'}}>
                                        &nbsp;&nbsp;&nbsp;
                                        <b>Desarrollador de Web FullStack con Next js</b> 
                                        <br/> <i>{'('}próximamente{')'}</i>
                                    </label>
                                </div>
                            </div>
                            <div 
                            className='md:w-[70%] flex flex-col gap-2'
                            >
                                {programSelected === 'CompleteProgrammer'
                                ? <div className="grid bg-white rounded-md p-3 text-black">
                                Nuestro programa más completo y el más recomendado para principiantes. El estudiante aprenderá desde Python y sus diversas librerías, hasta Desarrollo Web con HTML y CSS.  
                                </div>
                                : null}

                                {programSelected === 'CompleteProgrammer' && lvlSelected === 'lvl1'
                                ? <div className="grid grid-flow-row grid-rows-2"> 
                                <div className="grid bg-white rounded-t-md p-3 text-black">
                                    Nuestro primer curso. Una introducción a Python que te lleva
                                    desde cero hasta nivel intermedio. El objetivo es que el estudiante
                                    se sienta cómodo utilizando un lenguaje de programación a través de
                                    proyectos interactivos.
                                    <br/>
                                    <br/>
                                    <span>
                                        <b>Inversión:</b> $49.99 al mes.
                                    </span>
                                    <span>
                                        <b>Duración total:</b> 32 horas distribuidas en 16 semanas.
                                    </span>
                                    <span>
                                        <b>Horario:</b> Miércoles y Viernes de 3-4 pm. 
                                    </span>
                                    <br/>
                                    <span>
                                        <b>Requisitos:</b> Ninguno. 
                                    </span>
                                    <span >
                                        <a href='/curriculum/Complete_Programmer_Lvl_1_Curriculum.pdf' download>
                                            <i className="material-icons translate-y-2 mr-2">
                                                download
                                            </i>
                                        
                                        <b>Descargar curriculum </b>
                                        </a>
                                    </span>
                                </div>
                                <div className=' relative'>
                                    <Image
                                    src={PythonPhoto}
                                    alt={'Foto de Python'}
                                    layout='fill'
                                    objectFit="cover"
                                    objectPosition={"center"}
                                    />
                                </div>
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
                            onClick={() => { setPhase('Pago') }}
                            >
                                Siguiente
                        </Button> 
                    </div>
                    </>
                    : null}

                    {phase == 'Pago'
                    ? <>
                    <div className="flex flex-col">
                        <input
                        className='bg-white hover:cursor-pointer max-w-min self-center text-blue font-semibold rounded-md p-2 text-lg border-none mt-5 hover:shadow-xl shadow-black'
                        type='submit'
                        onClick={SendEmail}
                        value='Inscribir'
                        />
                            

                    </div>
                    </>
                    : null}
                </form>
            </div>
        </div>
    )
}

export default Inscripcion;



/*

    const ClasesDeprecated = () => {
        return (<>
        <label className="text-lg font-semibold"  htmlFor='diasDeseados'>
            Días de semana deseados
            <br/>
            <select 
            id='diasDeseados' 
            className='p-2 mt-2 rounded-md '
            onChange={(e) => setDias(e.target.value)}
            >
                <option>
                    Escoja una opción
                </option>
                <option value='lunesYMiercoles'>
                    Lunes y Miércoles
                </option>
                <option value='martesYViernes'>
                    Martes y Viernes
                </option>
                <option value='sabado'>
                    Sábado
                </option>
                <option value='domingo'>
                    Domingo
                </option>
            </select>
        </label>
        <br/>
        <br/>
        <label className="text-lg font-semibold"  htmlFor='horaDeseada'>
            {dias != 'sabado' && dias != 'domingo' 
            ? "Hora deseada (1 hora de clase)" 
            : "Hora deseada (2 horas de clase)"}
            <br/>
            <select id='horaDeseada' className='p-2 mt-2 rounded-md '>
                {dias != 'sabado' && dias != 'domingo' ? 
                <>
                <option value=''>
                    Escoja una opción
                </option>
                <option value='3:00PM'>
                    3:00 PM
                </option>
                <option value='4:30PM'>
                    4:30 PM
                </option>
                <option value='6:00PM'>
                    6:00 PM
                </option>
                <option value='7:30PM'>
                    7:30 PM
                </option>
                <option value='9:00PM'>
                    9:00 PM
                </option>
                </> :
                <>
                <option value='8:00AM'>
                    8:00 AM
                </option>
                <option value='10:30AM'>
                    10:30 AM
                </option>
                <option value='1:30PM'>
                    1:30 PM
                </option>
                <option value='4:00PM'>
                    4:00 PM
                </option>
                <option value='6:30PM'>
                    6:30 PM
                </option>
                </>
                }
            </select>
        </label>
        <br/>
        <br/>
        <Button
        onClick={() => {setPhase('Pay')}}
        >
            Siguiente
        </Button>
        </>)
    }
*/