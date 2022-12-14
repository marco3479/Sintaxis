import Head from "next/head";
import "animate.css/animate.compat.css";
import Concept, { Expression } from "../Concept";


export default function Contact () {
    
    return (
        <div className='grid grid-flow-row-dense justify-center h-full '>
            <Head>
                <title>Sintaxis | Contacto</title>
            </Head>
            <div>
                <br/>
                <br/>
                <h2 className="text-2xl font-semibold self-center w-[18rem] text-white text-center">
                    <Concept>
                        <Expression lang="es">Contactanos por cualquiera de estas vías</Expression>
                        <Expression lang="en">Contact us by any of the following means</Expression>
                    </Concept>
                </h2>
                <br/>
                <br/>
                <div className="bg-white text-center text-black p-3 rounded-md">
                    <div>
                        <i className="material-icons translate-y-2">mail</i> &nbsp; <span className="font-semibold">sintaxisacademy@gmail.com</span>
                    </div>
                    <br/>
                    <div>
                        <a className='hover:decoration-transparent' href='https://api.whatsapp.com/send?phone=50582609296' target='_blank' rel='noreferrer'>
                            <i className="text-4xl translate-y-2 fa fa-whatsapp"></i>  &nbsp; <span className="font-semibold">8260-9296</span>
                        </a>                        
                    </div>
                    <br/>
                    <div>
                        <a href='https://instagram.com/sintaxis.academy?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">
                            <i className="text-4xl fa fa-instagram"></i>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.facebook.com/sintaxisacademy/' target='_blank' rel="noreferrer">
                            <i className="text-4xl fa fa-facebook"></i>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.linkedin.com/company/sintaxis-academy/' rel="noreferrer" target='_blank'>
                            <i className="text-4xl fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
