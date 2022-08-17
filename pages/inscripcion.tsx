import { useState } from "react";
import Button from "../components/Button";

const Inscripcion = () => {

    const [dias, setDias] = useState<string|undefined>();
    const [fase, setFase] = useState<string>('Demografico');





    const fases = ['Demografico', 'Clases', 'Pago'];

        
    interface demographicData {
        name: string,
        birthdate: string,
        address: string,
        email: string,
        phoneNumber: string
    }

    const [ demographicData, setDemographicData] = useState<demographicData>({
        name: '',
        birthdate: '',
        address: '',
        email: '',
        phoneNumber: ''
    })



    return (
        <>
        <br/>
        <ul
        className='flex flex-row justify-evenly '
        >
            {fases.map((Fase, index) => (
                <li
                className={`border-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${fase == Fase ? 'bg-white text-brown' : ''}`}
                key={index}
                onClick={() => {
                    setFase(Fase)
                }}
                >
                    {Fase}
                </li>
            ))}
        </ul>
        <div
        className="ml-20 mt-8 overflow-y-auto"
        >
            <form>
                {fase == 'Demografico'
                ?             <>
                <label className="text-lg font-semibold" htmlFor='NombreCompleto'>
                    Nombre Completo
                    <br/>
                    <input size={40} value={demographicData.name} className='p-2 mt-2 rounded-md ' type='text' id='NombreCompleto' 
                    onChange={(e) => {setDemographicData((dD: demographicData) => (
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
                    <input className='p-2 mt-2 rounded-md ' type='date' id='FechaDeNac'
                    value={demographicData.birthdate}
                    onChange={(e) => setDemographicData((dD:demographicData) => ({
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
                    <textarea className='p-2 resize-none mt-2 w-[420px] h-[100px] rounded-md '  id='Domicilio'
                    value={demographicData.address}
                    onChange={(e) => setDemographicData((dD:demographicData) => ({
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
                    value={demographicData.email}
                    onChange={(e) => setDemographicData((dD:demographicData) => ({
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
                    value={demographicData.phoneNumber}
                    onChange={(e) => setDemographicData((dD:demographicData) => ({
                        ...dD,
                        phoneNumber: e.target.value
                    }))}
                    />
                </label>
                <br/>
                <br/>
                <Button
                onClick={() => { setFase('Clases'); console.log(demographicData) }}
                >
                    Siguiente
                </Button>
                </>
                : null}

                {fase == 'Clases'
                ? <>
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
                        <option>
                            Escoja una opción
                        </option>
                        <option value='2:00PM'>
                            2:00 PM
                        </option>
                        <option value='4:30PM'>
                            4:30 PM
                        </option>
                        <option value='5:45PM'>
                            5:45 PM
                        </option>
                        <option value='7:00PM'>
                            7:00 PM
                        </option>
                        <option value='8:15PM'>
                            8:15 PM
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
                onClick={() => {setFase('Pago')}}
                >
                    Siguiente
                </Button>
                </>
                : null}
            </form>
        </div>
        </>
    )
}

export default Inscripcion;