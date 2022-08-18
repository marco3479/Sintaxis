import { useState } from "react";
import Button from "../components/Button";


export interface generalData {
    name: string,
    birthdate: string,
    address: string,
    city: string,
    email: string,
    phoneNumber: string
}

const Inscripcion = () => {


    const [dias, setDias] = useState<string|undefined>();
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

    const [classType, setClassType] = useState<string>('programas');

    const [programSelected, setProgramSelected] = useState<string>('');
    
    function styleMod(ClassSelected: string) {
        if (programSelected === ClassSelected) return 'border-blue border-dashed' 
        else return 'border-[transparent]'
    }

    return (
        <>
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
                <div className='flex flex-col items-center lg:flex-row justify-around relative'>
                    <div className='flex flex-col relative'>
                        <label className="text-lg font-semibold" htmlFor='NombreCompleto'>
                            Nombre Completo
                            <br/>
                            <input size={40} value={generalData.name} className='p-2 mt-2 rounded-md ' type='text' id='NombreCompleto' 
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
                            <input size={40} value={generalData.city} className='p-2 mt-2 rounded-md ' type='text' id='Ciudad' 
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
                    <div
                    className=''
                    >
                        <label className="text-lg font-semibold" htmlFor='Domicilio'>
                            Domicilio
                            <br/>
                            <textarea className='p-2 resize-none mt-2 w-[420px] h-[100px] rounded-md '  id='Domicilio'
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
                            <input size={40} className=' p-2 mt-2 rounded-md ' type='email' id='Email'
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
                        onClick={() => { setPhase('Programs'); console.log(generalData) }}
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
                    <div className='flex flex-row justify-center'>
                        <div
                        className="bg-white p-3 flex flex-col rounded-l-md text-black w-[40%]"
                        >
                            <label onClick={(e) => setProgramSelected('completeProgrammer')} htmlFor='completeProgrammer' className={`p-2 border-2 ${styleMod('completeProgrammer')}`}>
                                <input checked={!!(programSelected === 'completeProgrammer')} /*className='checked:text-blue'*/  name='programs' type='radio' id='completeProgrammer' />
                                &nbsp;&nbsp;&nbsp;
                                <b>Complete Programmer &nbsp; ={'>'}</b> &nbsp; ?
                            </label>
                            <label onClick={(e) => setProgramSelected('AnalisisPython')} htmlFor='AnalisisPython' className={`p-2 border-2 ${styleMod('AnalisisPython')}`}>
                                <input checked={!!(programSelected === 'AnalisisPython')} /*className='checked:text-blue'*/  name='programs' type='radio' id='AnalisisPython' />
                                &nbsp;&nbsp;&nbsp;
                                <b>Análisis de datos con Python &nbsp; ={'>'}</b> &nbsp; ?
                            </label>
                            <label onClick={(e) => setProgramSelected('FullstackNextjs')} htmlFor='FullstackNextjs' className={`p-2 border-2 ${styleMod('FullstackNextjs')}`}>
                                <input checked={!!(programSelected === 'FullstackNextjs')} /*className='checked:text-blue'*/  name='programs' type='radio' id='FullstackNextjs' />
                                &nbsp;&nbsp;&nbsp;
                                <b>Desarrollador de Web FullStack con Next js &nbsp; ={'>'}</b> &nbsp; ?
                            </label>
                        </div>

                        {programSelected === 'completeProgrammer'
                        ? <div
                        className="bg-white p-3 flex flex-col rounded-r-md  text-black w-[40%]"
                        >
                            <div  className={`p-2 border-2 border-[transparent]`}>
                                &nbsp;&nbsp;&nbsp;
                                <b>Lvl 1 &nbsp; ={'>'}</b> &nbsp; Introducción a Programación con Python.
                            </div>
                            <div  className={`p-2 border-2 border-[transparent]`}>
                                &nbsp;&nbsp;&nbsp;
                                <b>Lvl 2 &nbsp; ={'>'}</b> &nbsp; Desarrollo de Web con HTML, CSS y JavaScript, y Librerías de Python.
                            </div>
                            <div  className={`p-2 border-2 border-[transparent]`}>
                                &nbsp;&nbsp;&nbsp;
                                <b>Lvl 3 &nbsp; ={'>'}</b> &nbsp; Frameworks con Python y Typescript.
                            </div>
                        </div>                    
                        : null}
            
                    </div>
                    <Button
                    className='max-w-min self-center'
                        onClick={() => { setPhase('Pay') }}
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
                    className='bg-white max-w-min self-center text-blue font-semibold rounded-md p-2 text-lg border-none mt-5 hover:shadow-xl shadow-black'
                    type='submit'
                    onClick={SendEmail}
                    value='Inscribir'
                    />
                        

                </div>
                </>
                : null}
            </form>
        </div>
        </>
    )
}

export default Inscripcion;

