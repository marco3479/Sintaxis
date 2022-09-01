import Head from "next/head";
import Cursos from "../components/Cursos";

 
const CursosPage = () => {


    return (
        <div className="p-8">
            <Head>
                <title>Cursos</title>
            </Head>
            <div className="flex flex-col">
                <Cursos/>
            </div>
        </div>
    )
}

export default CursosPage;