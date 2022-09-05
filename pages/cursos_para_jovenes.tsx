import Head from "next/head";
import { Router, useRouter } from "next/router";
import Button from "../components/Button";
import CursosParaJóvenes from "../components/CursosParaJóvenes";

 
const CursosParaJovenesPage = () => {

    const router = useRouter();

    return (
        <div className="grid grid-flow-row h-full overflow-y-auto">
            <Head>
                <title>Cursos para Jóvenes</title>
            </Head>
            <br/>
            <br/>
            <h1 className='text-3xl text-white text-center font-semibold'>Cursos para Jóvenes</h1>
            <div className="p-8">
                <div className="flex flex-col">
                    <CursosParaJóvenes/>
                </div>
            </div>
            <Button
            className="max-w-min mt-5 relative place-self-center"
            onClick={() => router.push('/inscripcion')}
            >
                Inscribirse
            </Button>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default CursosParaJovenesPage;