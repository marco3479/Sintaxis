import Button from "../components/Button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { SubscriptionContextType, useSubscription } from "../context/SubscriptionContext";
import CursosParaJóvenes from "../components/CursosParaJóvenes";
import Head from "next/head";
import { JSXElementConstructor, useRef } from "react";

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


    const Context: SubscriptionContextType = useSubscription();

    const language = useLanguage()[0];

    const {
        generalData,
        setGeneralData,
        lvlSelected,
        programSelected,
        phase,
        setPhase,
        phases,
    } = Context

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



    
    function styleMod(ClassSelected: string) {
        if (programSelected === ClassSelected) return 'border-blue border-dashed' 
        else return 'border-[transparent]'
    }

    //const [invalid, set]

    const mutation = useMutation(async (newSubscriptionData: GeneralData) => {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSubscriptionData)   // ADD OTHER DATA HERE (PROGRAMS AND OTHER)
          })
          /*.then(res => res.json()) // Transform our returned data into JSON
          .then(data => { 
            console.log(data);
           // if (data) setStatusMessage(data.message) // Append our message
           // setFormLoading(false) // Remove the loading state
          })
          .catch(err => {
            console.error(err);
            //setStatusMessage(err.message) // display an error message
            //setFormLoading(false)
          })
          */
        const res = await response.json();

        if (!!res.status) {
            console.log('Mail Sent');
        }
        }
        /*{
            onSuccess: (data) => {
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            }
        }*/
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
        const inputs = Array.from(document.getElementsByClassName('requiredInput') as HTMLCollectionOf<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)
        for (let input of inputs) {
            if (
                input.value === '' 
                || (input.type === 'email' && (!input.value.includes('@') || !!!input.value[input.value.indexOf('@') + 1]))
                ) {
                input.setAttribute('aria-invalid', 'true')
                valid = false
            } else {
                input.setAttribute('aria-invalid', 'false');
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
                        <Concept>
                            <Expression lang='es'>
                                Nivel I
                                <br/>
                                Introducción a Programación con Python
                            </Expression>
                            <Expression lang='en'>
                                Lvl I
                                <br/>
                                Introduction to Programming with Python
                            </Expression>
                        </Concept>
                        </>
                }
            }
        return programa
    }


    const acknowledgementSourceSelectRef = useRef<HTMLSelectElement>(null);

    return (
        <div className='p-3 h-full overflow-y-auto'>
            <Head>
                <title>Sintaxis | Inscripción a Curso</title>
            </Head>
            <br/>
            <br/>
                {phase === 'General' || phase === 'Programas' || phase === 'Revisión' 
                ? <ul
                className='flex flex-row justify-evenly tabs'
                >
                    <li
                    className={`border-white text-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'General' ? 'bg-white text-blue' : ''}`}
                    key={0}
                    onClick={() => setPhase('General')}
                    >
                        General
                    </li>
                    <li
                    className={`border-white text-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'Programas' ? 'bg-white text-blue' : phases.General.valid ? '' : 'bg-slate-500'}`}
                    key={1}
                    onClick={() => {
                        if (phases.General.valid) {
                            phases.Programas.valid = true; // THIS IS TEMPORARY WHILE THERE IS ONLY ONE PROGRAM AVAILABLE AND THE INPUTS CAN NOT BE CHANGED.
                            setPhase('Programas')
                        }}}
                    >
                        <Concept>
                            <Expression lang='es'>Cursos</Expression>
                            <Expression lang='en'>Courses</Expression>
                        </Concept>
                        
                    </li>
                    <li
                    className={`border-white text-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'Revisión' ? 'bg-white text-blue' : phases.Programas.valid ? '' : 'bg-slate-500'}`}
                    key={2}
                    onClick={() => {if (phases.Programas.valid) setPhase('Revisión')}}
                    >
                        <Concept>
                            <Expression lang='es'>Revisión</Expression>
                            <Expression lang='en'>Review</Expression>
                        </Concept>    
                    </li>     
                </ul>
                : null}
            <div
            className="  mt-8 overflow-y-auto "
            >
                <form onChange={checkData} className='mb-8'> 
                    {phase == 'General'
                    ? <>
                    <br/>
                    <div className='flex flex-col items-center lg:flex-row justify-center lg:gap-40 relative'>
                        <div className='grid  relative align-middle'>
                            <label className="text-lg font-semibold" htmlFor='NombreCompleto'>
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang="es">Nombre Completo</Expression>    
                                        <Expression lang="en">Full Name</Expression>    
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Fecha de Nacimiento</Expression>    
                                        <Expression lang='en'>Birthdate</Expression>    
                                    </Concept>
                                </span>
                                <br/>
                                <input required className='p-2 mt-2 border-2  requiredInput rounded-md ' type='date' id='FechaDeNac'
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Domicilio</Expression>
                                        <Expression lang='en'>Address</Expression>
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Ciudad</Expression>
                                        <Expression lang='en'>City</Expression>
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>País</Expression>
                                        <Expression lang='en'>Country</Expression>
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Correo Electrónico</Expression>
                                        <Expression lang='en'>Email</Expression>
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Número de Telefono</Expression>
                                        <Expression lang='en'>Phone Number</Expression>
                                    </Concept>
                                </span>
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
                                <span className='text-white'>
                                    <Concept>
                                        <Expression lang='es'>Dónde nos conoció</Expression>
                                        <Expression lang='en'>Where you met us</Expression>
                                    </Concept>
                                </span>
                                <br/>
                                <select
                                className="p-2 border-2 mt-2 requiredInput rounded-md"
                                required
                                ref={acknowledgementSourceSelectRef}
                                id='acknowledgementSourceSelect'
                                onChange={(e) => {
                                    setGeneralData((gD: GeneralData) => ({
                                    ...gD,
                                    acknowledgementSource: e.target.value
                                }))}}
                                value={generalData.acknowledgementSource === 'Otro' || (['', 'Facebook', 'LinkedIn', 'Google', 'Conocido', 'Instagram'].every((value: string) => {if (value === generalData.acknowledgementSource) return false})) || !['', 'Facebook', 'LinkedIn', 'Google', 'Conocido', 'Otro', 'Instagram'].includes(generalData.acknowledgementSource) || (acknowledgementSourceSelectRef.current?.value === 'Otro' && generalData.acknowledgementSource === '')  ? 'Otro' : generalData.acknowledgementSource }
                                >
                                    <option aria-invalid='true' defaultChecked className="text-opacity-50" value=''>
                                    </option>
                                    <option value='Facebook'>
                                        Facebook
                                    </option>
                                    <option value='Instagram'>
                                        Instagram
                                    </option>
                                    <option value='LinkedIn'>
                                        LinkedIn
                                    </option>
                                    <option value='Google'>
                                        Google
                                    </option>
                                    <option value='Conocido'>
                                        <Concept>
                                            <Expression lang='es'>Conocido</Expression>
                                            <Expression lang='en'>Acquaintance</Expression>
                                        </Concept>
                                    </option>
                                    <option value='Otro'>
                                        <Concept>
                                            <Expression lang='es'>Otro</Expression>
                                            <Expression lang='en'>Other</Expression>
                                        </Concept>
                                    </option>
                                </select>
                                {generalData.acknowledgementSource === 'Otro' || (['Facebook', 'LinkedIn', 'Google', 'Conocido', 'Instagram', ''].every((value: string) => {if (value === generalData.acknowledgementSource) return false}) || !['', 'Facebook', 'LinkedIn', 'Google', 'Conocido', 'Otro', 'Instagram'].includes(generalData.acknowledgementSource) || (acknowledgementSourceSelectRef.current?.value === 'Otro' && generalData.acknowledgementSource === ''))
                                ? <>
                                <br/>
                                <input aria-invalid='true' required value={generalData.acknowledgementSource === 'Otro' || generalData.acknowledgementSource === '' ? '' : generalData.acknowledgementSource} className='p-2 border-2 mt-2 requiredInput rounded-md ' type='text' id='DóndeNosConoció' 
                                onChange={(e) => {
                                    if (e.target.value !== '') {
                                        setGeneralData((dD: GeneralData) => (
                                        {
                                            ...dD,
                                            acknowledgementSource: e.target.value
                                        }
                                    ))}}
                                }
                                />
                                </>: null}
                            </label>
                            <br/>
                            <br/>
                            <Button
                            className="max-w-min mt-5"
                            onClick={(e) => {
                                checkData();
                                if (phases.General.valid) {
                                phases.Programas.valid = true; // THIS IS TEMPORARY WHILE THERE IS ONLY ONE PROGRAM AVAILABLE AND THE INPUTS CAN NOT BE CHANGED.
                                setPhase('Programas');
                            }// else {
                             //   if (generalData.acknowledgementSource === '') {
                             //       e.preventDefault();
                             //   }
                            }}//}
                            >
                                <Concept>
                                    <Expression lang='es'>Siguiente</Expression>
                                    <Expression lang='en'>Next</Expression>
                                </Concept>
                            </Button>
                        </div>
                    </div>
                    </>
                    : null}

                    {phase == 'Programas'
                    ? 
                    <div className="flex flex-col">
                        <h2 className='text-xl w-full md:w-[30%] text-center  font-semibold'>
                            <Concept>
                                <Expression lang='es'>Por favor seleccione un curso</Expression>
                                <Expression lang='en'>Please select a course</Expression>
                            </Concept>        
                        </h2>
                        <br/>
                        <CursosParaJóvenes/>
                        <Button
                        className='max-w-min self-center mt-5'
                            onClick={() => {if (phases.Programas.valid) setPhase('Revisión')}
                            }
                            >
                                <Concept>
                                    <Expression lang='es'>Siguiente</Expression>
                                    <Expression lang='en'>Next</Expression>
                                </Concept>
                        </Button> 
                    </div>

                    : null}

                    {phase == 'Revisión'
                    ? <>
                    <div className="flex  flex-col">
                        <div // General
                        className='grid border-2 border-white bg-black text-white rounder-md p-5 self-center rounded-md'
                        >
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Nombre:</Expression>
                                    <Expression lang='en'>Name:</Expression>
                                </Concept>
                            </b> {generalData.name}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Dirección:</Expression>
                                    <Expression lang='en'>Address:</Expression>
                                </Concept>
                            </b> {generalData.address}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Cumpleaños:</Expression>
                                    <Expression lang='en'>Birthdate:</Expression>
                                </Concept>
                            </b> {generalData.birthdate}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Ciudad:</Expression>
                                    <Expression lang='en'>City:</Expression>
                                </Concept>
                            </b> {generalData.city}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>País:</Expression>
                                    <Expression lang='en'>Country:</Expression>
                                </Concept>
                            </b> {generalData.country}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Correo Electrónico:</Expression>
                                    <Expression lang='en'>Email:</Expression>
                                </Concept>
                            </b> {generalData.email}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Número de Teléfono:</Expression>
                                    <Expression lang='en'>Phone Number:</Expression>
                                </Concept>
                            </b> {generalData.phoneNumber}</span>
                            <span><b>
                                <Concept>
                                    <Expression lang='es'>Dónde nos conoció:</Expression>
                                    <Expression lang='en'>Where you met us:</Expression>
                                </Concept>
                            </b> {generalData.acknowledgementSource}</span>
                            <br/>
                            <Button
                            className="max-w-min place-self-end"
                            onClick={() => setPhase('General')}
                            >
                                <Concept>
                                    <Expression lang='es'>Editar</Expression>
                                    <Expression lang='en'>Edit</Expression>
                                </Concept>
                            </Button>        
                            <br/>
                            <br/>
                            <b>
                                <Concept>
                                    <Expression lang='es'>Curso seleccionado: </Expression>
                                    <Expression lang='en'>Selected course: </Expression>
                                </Concept>
                            </b>
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
                                <Concept>
                                    <Expression lang='es'>Editar</Expression>
                                    <Expression lang='en'>Edit</Expression>
                                </Concept>
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
                            setPhase('Pago');
                            //window.open('https://buy.stripe.com/8wMaHaacn233bsc001', "_blank")
                            //window.open('https://buy.stripe.com/4gw7uY0BNbDDao87su', "_blank")
                        }}

                        // FIX SO IT WORKS FOR OPENING STRIPE IN NEW WINDOW, AND ALSO TO THESE FXS IN ONCLICK
                        //href=
                        //target="_blank" 
                        //rel="noopener noreferrer"
                        value={language === 'es' ? 'Pagar' : language === 'en' ? 'Pay' : ''}
                        />                  
                    </div>
                    </>
                    : null}

                    {phase == 'Pago'
                    ? <div className="w-full h-full">
                        <Concept>
                            <Expression lang='es'>
                                <stripe-pricing-table 
                                pricing-table-id="prctbl_1LeU41H7SyURAolX30AK5BrS"
                                publishable-key="pk_live_51LXVtjH7SyURAolXkp583tdsL098Dwcxaub0k4sC0D5AOlQ28ouuNiJxTTIwDxvW33YoOLDepqIv8iJfSggzZjPX00SUQ9B1y3">
                                </stripe-pricing-table>
                            </Expression>
                            <Expression lang='en'>
                                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                                <stripe-pricing-table pricing-table-id="prctbl_1Lh5ExH7SyURAolXaKbGRg3p"
                                publishable-key="pk_live_51LXVtjH7SyURAolXkp583tdsL098Dwcxaub0k4sC0D5AOlQ28ouuNiJxTTIwDxvW33YoOLDepqIv8iJfSggzZjPX00SUQ9B1y3">
                                </stripe-pricing-table>
                            </Expression>
                        </Concept>
                    <br/>
                    <div className="relative  text-center bg-black text-white rounded-md p-2">
                        <Concept>
                            <Expression lang='es'>
                                Una vez realizado el pago, recibirá un correo de confirmación.
                                <br/>
                                También recibirá otro correo con toda la información necesaria 1 a 2 días antes de la primera clase.
                                <br/>
                                Cualquier pregunta, problema o sugerencia, no dude en&nbsp;
                                <Link href='contacto'><a className='text-blue font-semibold '>contactarnos</a></Link>.
                            </Expression>
                            <Expression lang='en'>
                                Once payment is processed, you will receive a confirmation email.
                                <br/>
                                You will also receive another email with all the information needed 1 to 2 days prior to the first class.
                                <br/>
                                If any question, issue or suggestion arises, do not doubt to&nbsp;
                                <Link href='contacto'><a className='text-blue font-semibold '>get in touch</a></Link>.
                            </Expression>
                        </Concept>
                    </div>
                    </div>
                    : null}
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <Script 
            async 
            src="https://js.stripe.com/v3/pricing-table.js">
            </Script>
        </div>
    )
}




export default Inscripcion;


import React, { useState, DOMAttributes }  from 'react';
import Script from "next/script";
import Concept, { Expression } from "../components/Concept";
import { useLanguage } from "../context/LanguageContext";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

type StripePricingTable = Element;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      //['stripe-pricing-table']: CustomElement<any>;
      'stripe-pricing-table': any;
    }
  }
}

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