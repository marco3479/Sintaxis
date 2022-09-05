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
                        Programador Completo
                        <br/>
                        Lvl 1
                        </>
                }
            }
        return programa
    }


    const acknowledgementSourceSelectRef = useRef<HTMLSelectElement>(null);

    return (
        <div className='p-3 h-full overflow-y-auto'>
            <Head>
                <title>Inscripción</title>
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
                        Programas
                    </li>
                    <li
                    className={`border-white text-white hover:cursor-pointer font-semibold border-2 p-2 rounded-md ${phase === 'Revisión' ? 'bg-white text-blue' : phases.Programas.valid ? '' : 'bg-slate-500'}`}
                    key={2}
                    onClick={() => {if (phases.Programas.valid) setPhase('Revisión')}}
                    >
                        Revisión
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
                                <span className='text-white'>Nombre Completo</span>
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
                                <span className='text-white'>Fecha de Nacimiento</span>
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
                                <span className='text-white'>Domicilio</span>
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
                                <span className='text-white'>Ciudad</span>
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
                                <span className='text-white'>País</span>
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
                                <span className='text-white'>Correo Electrónico</span>
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
                                <span className='text-white'>Número de Telefono</span>
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
                                <span className='text-white'>Dónde nos conoció</span>
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
                                value={generalData.acknowledgementSource === 'Otro' || (['', 'Facebook', 'LinkedIn', 'Google', 'Conocido'].every((value: string) => {if (value === generalData.acknowledgementSource) return false})) || !['', 'Facebook', 'LinkedIn', 'Google', 'Conocido', 'Otro'].includes(generalData.acknowledgementSource) || (acknowledgementSourceSelectRef.current?.value === 'Otro' && generalData.acknowledgementSource === '')  ? 'Otro' : generalData.acknowledgementSource }
                                >
                                    <option aria-invalid='true' defaultChecked className="text-opacity-50" value=''>
                                    </option>
                                    <option value='Facebook'>
                                        Facebook
                                    </option>
                                    <option value='LinkedIn'>
                                        LinkedIn
                                    </option>
                                    <option value='Google'>
                                        Google
                                    </option>
                                    <option value='Conocido'>
                                        Conocido
                                    </option>
                                    <option value='Otro'>
                                        Otro
                                    </option>
                                </select>
                                {generalData.acknowledgementSource === 'Otro' || (['Facebook', 'LinkedIn', 'Google', 'Conocido', ''].every((value: string) => {if (value === generalData.acknowledgementSource) return false}) || !['', 'Facebook', 'LinkedIn', 'Google', 'Conocido', 'Otro'].includes(generalData.acknowledgementSource) || (acknowledgementSourceSelectRef.current?.value === 'Otro' && generalData.acknowledgementSource === ''))
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
                                Siguiente
                            </Button>
                        </div>
                    </div>
                    </>
                    : null}

                    {phase == 'Programas'
                    ? 
                    <div className="flex flex-col">
                        <CursosParaJóvenes/>
                        <Button
                        className='max-w-min self-center mt-5'
                            onClick={() => {if (phases.Programas.valid) setPhase('Revisión')}
                            }
                            >
                                Siguiente
                        </Button> 
                    </div>

                    : null}

                    {phase == 'Revisión'
                    ? <>
                    <div className="flex  flex-col">
                        <div // General
                        className='grid border-2 border-white text-white rounder-md p-5 self-center rounded-md'
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
                            setPhase('Pago');
                            //window.open('https://buy.stripe.com/8wMaHaacn233bsc001', "_blank")
                            //window.open('https://buy.stripe.com/4gw7uY0BNbDDao87su', "_blank")
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

                    {phase == 'Pago'
                    ? <div className="w-full h-full">
                    <stripe-pricing-table 
                    pricing-table-id="prctbl_1LeU41H7SyURAolX30AK5BrS"
                    publishable-key="pk_live_51LXVtjH7SyURAolXkp583tdsL098Dwcxaub0k4sC0D5AOlQ28ouuNiJxTTIwDxvW33YoOLDepqIv8iJfSggzZjPX00SUQ9B1y3">
                    </stripe-pricing-table>
                    <br/>
                    <div className="relative  text-center bg-black rounded-md p-2">
                        Una vez realizado el pago, recibirá un correo de confirmación.
                        <br/>
                        También recibirá otro correo con toda la información necesaria 1 o 2 días antes de la primera clase.
                        <br/>
                        Cualquier pregunta, problema o sugerencia, no dude en&nbsp;
                        <Link href='contacto'><a className='text-blue font-semibold '>contactarnos</a></Link>.
                    </div>
                    </div>
                    : null}
                

                </form>
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