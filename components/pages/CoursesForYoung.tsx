import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../Button";
import Concept, { Expression } from "../Concept";
import CursosParaJóvenes from "../CursosParaJóvenes";

export default function CoursesForYoung () {
    
    const router = useRouter();
    const language = useLanguage()[0];

    return (
        <div className="grid grid-flow-row h-full overflow-y-auto">
            <Head>
                <title>Sintaxis | Cursos para Jóvenes</title>
            </Head>
            <br/>
            <br/>
            <h1 className='text-3xl text-white text-center font-semibold'>
                <Concept>
                    <Expression lang='es'>Cursos para Jóvenes</Expression>
                    <Expression lang='en'>Courses for the Young</Expression>
                </Concept>
            </h1>
            <div className="p-8">
                <div className="flex flex-col">
                    <CursosParaJóvenes/>
                </div>
            </div>
            <Button
            className=" mt-5 relative place-self-center"
            onClick={() => router.push(language === 'es' ? 'inscripcion' : language === 'en' ? 'signup' : '')}
            >   
                <Concept>
                    <Expression lang='es'>Inscribirse</Expression>
                    <Expression lang='en'>Sign Up</Expression>
                </Concept>
            </Button>
            <br/>
            <br/>
            <br/>
        </div>
    )
}