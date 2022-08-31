import { MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import PythonPhoto from "../public/images/Python.jpg"
import Image from 'next/image';
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import A from "../components/A";

export interface GeneralData {
    //[key: string]: string
    name: string,
    birthdate: string,
    address: string,
    city: string,
    country: string,
    email: string,
    phoneNumber: string,
    acknowledgementSource: string
}

const Inscripcion = () => {

    //const router = useRouter();

    type Phase = 'General' | 'Programas' | 'Pago' | 'Confirmación'

    const [phase, setPhase] = useState<Phase>('General');

    type Phases = {
        General: {
            valid: boolean
        },
        Programas: {
            valid: boolean
        },
        Pago: {
            valid: boolean     
        },
        Confirmación: {
            valid: boolean
        }
    }

    const [phases, setPhases] = useState<Phases>({
        General: {
            valid: false
        },
        Programas: {
            valid: false
        },
        Pago: {
            valid: true     // EVENTUALLY START AS FALSE, ON SUCCESSFUL PAYMENT WEBHOOK EVENT
        },
        Confirmación: {
            valid: true     // MAY NOT NEED CONFIRMACION AFTER ALL. WE'LL SEE.
        }
    });

 

    const [ generalData, setGeneralData] = useState<GeneralData>({
        name: '',
        birthdate: '',
        address: '',
        city: '',
        country: '',
        email: '',
        phoneNumber: '',
        acknowledgementSource: ''
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

    //const [invalid, set]

    const mutation = useMutation((newSubscriptionData: GeneralData) => {
        return fetch('/api/subscribe', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSubscriptionData)   // ADD OTHER DATA HERE (PROGRAMS AND OTHER)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
            }})
        }
    )

    /*const {data, refetch} = useQuery(['stripePay'], 
        () => {
            fetch('/api/webhooks/stripe')
            .then((res:any) => res.json)
        },
        {
            enabled: false
        })
    */
    const checkData = () => {
        let valid = true
        const inputs = Array.from(document.getElementsByClassName('requiredInput') as HTMLCollectionOf<HTMLInputElement|HTMLTextAreaElement>)
        for (let input of inputs) {
            if (input.value === '') {
                input.setAttribute('aria-invalid', 'true')
                valid = false
            } else {
                input.setAttribute('aria-invalid', 'false');
            }

            if (input.type === 'email') {
                if (!input.value.includes('@') || !!!input.value[input.value.indexOf('@') + 1]) {
                    input.setAttribute('aria-invalid', 'true')
                    valid = false
                } else {
                    input.setAttribute('aria-invalid', 'false');
                }
            }

            if (input.getAttribute('aria-invalid') === 'true') {
                valid = false
            }
        }
        if (valid) phases[phase].valid = true
        else {
             if (phases[phase].valid) {
                phases[phase].valid = false;
                phases.Programas.valid = false;     // THIS IS TEMPORARY WHILE THERE IS ONLY ONE PROGRAM AVAILABLE TO CHOOSE FROM.
            }
        }
    }

    const Program = (): JSX.Element|null => {
        let programa: JSX.Element|null = null;
        switch (programSelected) {
            case 'CompleteProgrammer':
                switch (lvlSelected) {
                    case 'lvl1':
                        return programa = <>
                        Complete Programmer
                        <br/>
                        Lvl 1
                        </>
                }
            }
        return programa
    }


    return (
        <div className='p-3 h-full'>
            <br/>
                {phase === 'General' || phase === 'Programas' || phase === 'Pago' 
                ? <ul
                className='flex flex-row justify-evenly '
                >
                    <li
                    className={`border-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'General' ? 'bg-white text-blue' : ''}`}
                    key={0}
                    onClick={() => setPhase('General')}
                    >
                        General
                    </li>
                    <li
                    className={`border-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'Programas' ? 'bg-white text-blue' : phases.General.valid ? '' : 'bg-slate-500'}`}
                    key={1}
                    onClick={() => {
                        if (phases.General.valid) {
                            phases.Programas.valid = true; // THIS IS TEMPORARY WHILE THERE IS ONLY ONE PROGRAM AVAILABLE AND THE INPUTS CAN NOT BE CHANGED.
                            setPhase('Programas')
                        }}}
                    >
                        Programas
                    </li>
                    <li
                    className={`border-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'Pago' ? 'bg-white text-blue' : phases.Programas.valid ? '' : 'bg-slate-500'}`}
                    key={2}
                    onClick={() => {if (phases.Programas.valid) setPhase('Pago')}}
                    >
                        Pago
                    </li>     
                </ul>
                : null}
            <div
            className="  mt-8 overflow-y-auto"
            >
                <form onChange={checkData}> 
                    {phase == 'General'
                    ? <>
                    <br/>
                    <div className='flex flex-col items-center lg:flex-row justify-center lg:gap-20 relative'>
                        <div className='grid  relative align-middle'>
                            <label className="text-lg font-semibold" htmlFor='NombreCompleto'>
                                Nombre Completo
                                <br/>
                                <input required value={generalData.name} className='p-2 mt-2 border-2 requiredInput rounded-md ' type='text' id='NombreCompleto' 
                                onChange={(e) => {setGeneralData((dD: GeneralData) => (
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
                                <input required className='p-2 mt-2 border-2 requiredInput rounded-md ' type='date' id='FechaDeNac'
                                value={generalData.birthdate}
                                onChange={(e) => setGeneralData((dD:GeneralData) => ({
                                    ...dD, 
                                    birthdate: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Domicilio'>
                                Domicilio
                                <br/>
                                <textarea required className='p-2 resize-y border-2 requiredInput mt-2 h-[100px] rounded-md '  id='Domicilio'
                                value={generalData.address}
                                onChange={(e) => setGeneralData((dD:GeneralData) => ({
                                    ...dD, 
                                    address: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Ciudad'>
                                Ciudad
                                <br/>
                                <input required value={generalData.city} className='p-2 border-2 mt-2 requiredInput rounded-md ' type='text' id='Ciudad' 
                                onChange={(e) => {setGeneralData((dD: GeneralData) => (
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
                            <label className="text-lg font-semibold" htmlFor='País'>
                                País
                                <br/>
                                <input required value={generalData.country} className='p-2 border-2 mt-2 requiredInput rounded-md ' type='text' id='País' 
                                onChange={(e) => {setGeneralData((dD: GeneralData) => (
                                {
                                    ...dD,
                                    country: e.target.value
                                }
                                ))}}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='Email'>
                                Correo Electrónico
                                <br/>
                                <input aria-required required className=' p-2 mt-2 border-2 requiredInput rounded-md ' type='email' id='Email'
                                value={generalData.email}
                                onChange={(e) => setGeneralData((dD:GeneralData) => ({
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
                                <input required type='tel' className='p-2 border-2 mt-2 requiredInput rounded-md 'id='Telefono'
                                value={generalData.phoneNumber}
                                onChange={(e) => setGeneralData((dD:GeneralData) => ({
                                    ...dD,
                                    phoneNumber: e.target.value
                                }))}
                                />
                            </label>
                            <br/>
                            <br/>
                            <label className="text-lg font-semibold" htmlFor='DóndeNosConoció'>
                                Dónde nos conoció
                                <br/>
                                <input required value={generalData.acknowledgementSource} className='p-2 border-2 mt-2 requiredInput rounded-md ' type='text' id='DóndeNosConoció' 
                                onChange={(e) => {setGeneralData((dD: GeneralData) => (
                                {
                                    ...dD,
                                    acknowledgementSource: e.target.value
                                }
                                ))}}
                                />
                            </label>
                            <br/>
                            <br/>
                            <Button
                            className="max-w-min mt-5"
                            onClick={() => {if (phases.General.valid) {
                                phases.Programas.valid = true; // THIS IS TEMPORARY WHILE THERE IS ONLY ONE PROGRAM AVAILABLE AND THE INPUTS CAN NOT BE CHANGED.
                                setPhase('Programas');
                            }}}
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
                        className='max-w-min self-center mt-5'
                            onClick={() => {if (phases.Programas.valid) setPhase('Pago')}
                            }
                            >
                                Siguiente
                        </Button> 
                    </div>
                    </>
                    : null}

                    {phase == 'Pago'
                    ? <>
                    <div className="flex  flex-col">
                        <div // General
                        className='grid border-2 border-white rounder-md p-5 self-center rounded-md'
                        >
                            <span><b>Nombre:</b> {generalData.name}</span>
                            <span><b>Dirección:</b> {generalData.address}</span>
                            <span><b>Cumpleaños:</b> {generalData.birthdate}</span>
                            <span><b>Ciudad:</b> {generalData.city}</span>
                            <span><b>País:</b> {generalData.country}</span>
                            <span><b>Correo Electrónico:</b> {generalData.email}</span>
                            <span><b>Número de Teléfono:</b> {generalData.phoneNumber}</span>
                            <span><b>Dónde aprendió de nosotros:</b> {generalData.acknowledgementSource}</span>
                            <br/>
                            <Button
                            className="max-w-min place-self-end"
                            onClick={() => setPhase('General')}
                            >
                                Editar
                            </Button>        
                            <br/>
                            <br/>
                            <b>Programa de selección: </b>
                            <br/>
                            <div className='font-bold text-center'>
                                <Program/>
                            </div>
                            <br/>
                            <br/>
                            <Button
                            className="max-w-min place-self-end"
                            onClick={() => setPhase('Programas')}
                            >
                                Editar
                            </Button>        
                        </div>
                        <br/>
                        <input
                        //className='bg-white hover:cursor-pointer max-w-min self-center text-blue font-semibold rounded-md p-2 text-lg border-none mt-5 hover:shadow-xl shadow-black'
                        className={`bg-white text-blue font-semibold rounded-md p-2 text-lg border-none hover:cursor-pointer hover:shadow-xl self-center shadow-black`}
                        type='submit'
                        onClick={(e:any) => {
                            mutation.mutate(generalData);
                            //SendEmail(e);
                            setPhase('Confirmación');
                            window.open('https://buy.stripe.com/7sIaHa2JVePPcwgcMM', "_blank")
                        }}

                        // FIX SO IT WORKS FOR OPENING STRIPE IN NEW WINDOW, AND ALSO TO THESE FXS IN ONCLICK
                        //href=
                        //target="_blank" 
                        //rel="noopener noreferrer"
                        value='Pagar'
                        />                       
                    </div>
                    </>
                    : null}
                    
                    {phase == 'Confirmación'
                    ? <div className="relative  text-center bg-black rounded-md p-2">
                        Al realizar su pago se le mandara un correo de confirmación. 
                        <br/>
                        Antes de su primer clase se le enviará un correo con toda información necesaria.
                        <br/>
                        Ante cualquier duda o problema favor&nbsp;
                        <Link href='contacto'><a className='text-blue font-semibold '>contactarnos</a></Link>.
                    </div>
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