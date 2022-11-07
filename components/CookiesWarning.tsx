import { useEffect, useState } from "react";
import { PreferencesType, usePreferences } from "../context/UserPreferences";
import { readCookie } from "../utils/cookiesHelpers";
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('./Button'));
import Concept, { Expression } from "./Concept";

export default function CookiesWarning() {

    const {setAcceptCookies}: PreferencesType = usePreferences();

    const [showCookiesWarning, setShowCookiesWarning] = useState<boolean>(false);


    useEffect(() => {
        if (!Boolean(readCookie('acceptCookies'))) {
            setShowCookiesWarning(true);
        }
    }, [])


    return(
        <>
        {showCookiesWarning
        ?   <div id='CookiesWarning' className='absolute top-4 grid justify-center w-full z-10'>
            <div className='bg-slate-50 text-black rounded-md p-3 grid text-xl grid-flow-row  gap-4 w-full lg:w-[60rem] text-center place-items-center shadow-xl shadow-black drop-shadow-xl'>
                <Concept>
                    <Expression lang='es'>
                        Usamos cookies para recopilar sus preferencias para optimizar su experiencia en el sitio web.
                        Solo guardamos cookies durante su visita si nos lo permite.
                        <div className="flex flex-row gap-4 justify-evenly w-[50%]">
                            <Button 
                            className="bg-slate-200"
                            onClick={() => {setShowCookiesWarning(false); setAcceptCookies(true);}}
                            >
                                Aceptar
                            </Button>
                            <Button 
                            className="bg-slate-300"
                            onClick={() => {setShowCookiesWarning(false); setAcceptCookies(false);}}
                            >
                                Rechazar
                            </Button>
                        </div>
                    </Expression>
                    <Expression lang='en'>
                        We use cookies to collect your preferences to optimize your experience in the web site.
                        We only store the cookies during your visit if you allow us to.
                        <div className="flex flex-row gap-4 justify-evenly w-[50%]">
                            <Button 
                            className="bg-slate-200"
                            onClick={() => {setShowCookiesWarning(false); setAcceptCookies(true);}}
                            >
                                Accept
                            </Button>
                            <Button 
                            className="bg-slate-300"
                            onClick={() => {setShowCookiesWarning(false); setAcceptCookies(false);}}
                            >
                                Reject
                            </Button>
                        </div>
                    </Expression>
                </Concept>
            </div>
        </div>
        : null}
        </>
    )
}