import Head from "next/head";
import Cursos from "../components/Cursos";

 
const CursosPage = () => {


    return (
        <div className=" h-full overflow-y-auto">
            <Head>
                <title>Cursos</title>
            </Head>
            <br/>
            <br/>
            <h1 className='text-3xl text-white text-center font-semibold'>Cursos</h1>
            <div className="p-8">
                <div className="flex flex-col">
                    <Cursos/>
                </div>
            </div>
        </div>
    )
}

export default CursosPage;