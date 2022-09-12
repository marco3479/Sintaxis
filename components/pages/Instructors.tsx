import EdmundoPhoto from '../../public/images/instructores-3.jpg';
import MarcoPhoto from '../../public/images/instructores-2.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Concept, { Expression } from '../Concept';


export default function Instructors () {
    
    const [screenSize, setScreenSize] = useState<number|undefined>();


    useEffect(() => {
        setScreenSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth);
        });
    }, []);
  

    return (
        <div className='text-center h-full  overflow-y-auto'>
            <Head>
                <title>Sintaxis | Conoce los Instructores</title>
            </Head>
            <br/>
            <br/>
            <h1 className='text-3xl text-white font-semibold'>
                <Concept>
                    <Expression lang='es'>Conoce a tus instructores</Expression>
                    <Expression lang='en'>Meet your instructors</Expression>
                </Concept>
            </h1>
            <br/>
            <div className="grid relative justify-center text-black p-5 h-3/4 gap-10" style={{gridTemplateColumns: '100%'}}>
                <div className='grid grid-flow-row justify-center sm:flex sm:flex-row relative'>
                    <div className='relative bg-black grid justify-center sm:w-[30%]  md:min-h-[320px] sm:h-full '>
                        <Image
                        alt='Foto de Edmundo'
                        priority
                        src={EdmundoPhoto}
                        quality={50}
                        loading='eager'
                        placeholder='blur'
                        width={screenSize! >= 640 ? undefined : '188'}
                        height={screenSize! >= 640 ? undefined : '228'}
                        layout={screenSize! >= 640 ? 'fill' : 'fixed'}
                        objectFit={screenSize! >= 640 ?  'cover' : 'contain'}
                        objectPosition={screenSize! >= 640 ? 'center top' : 'center bottom'}
                        />
                    </div>
                    <div className="flex flex-col bg-white place-content-center p-5 rounded-b-md sm:rounded-none sm:rounded-r-md relative sm:max-w-[500px] ">
                        <b>
                            <h2 className='text-lg sm:text-2xl text-center'>
                                Edmundo Miranda Guillén
                            </h2>
                        </b>
                        <br/>
                        <p className='text-left'>
                            <Concept>
                                <Expression lang='es'>
                                    Estudiante de Economía Aplicada y co-fundador de Sintaxis.
                                    <br/>
                                    <br/>
                                    Experiencia en el manejo, análisis y visualización de
                                    datos con Python, Excel y STATA. Sus áreas de interés 
                                    profesional incluyen Macroeconomía, Política Monetaria
                                    y Análisis Estadístico.
                                </Expression>
                                <Expression lang='en'>
                                    Applied Economics student and co-founder of Sintaxis.
                                    <br/>
                                    <br/>
                                    Experience in data management, analysis and visualization
                                    with Python, Excel, and STATA. His areas of professional interest
                                    include Macroeconomics, Monetary Politics and Statistical Analysis.
                                </Expression>
                            </Concept>
                            <br/>
                            <br/>
                        </p>
                        <blockquote className=' text-center font-serif'>
                            <i>{'"'}
                                <Concept>
                                    <Expression lang='es'>
                                        En mis ratos libres me gusta pasar con las personas que quiero.
                                        También disfruto el fútbol, tocar piano y leer.
                                    </Expression>
                                    <Expression lang='en'>
                                        In my free time I enjoy spending time with my loved ones.
                                        I also enjoy soccer, playing the piano and reading.
                                    </Expression>
                                </Concept>
                            {'"'}</i>
                        </blockquote>
                    </div>

                </div>
                <div className='grid grid-flow-row justify-center sm:flex sm:flex-row relative'>
                    <div className='relative bg-black grid justify-center sm:w-[30%]  md:min-h-[320px] sm:h-full '>
                        <Image
                        alt='Foto de Marco'
                        src={MarcoPhoto}
                        width={'188'}
                        height={'228'}
                        quality={50}
                        loading='eager'
                        placeholder='blur'
                        priority
                        layout={screenSize! >= 640 ? 'fill' : 'fixed'}
                        objectFit={screenSize! >= 640 ?  'cover' : 'contain'}
                        objectPosition={screenSize! >= 640 ? 'center top' : 'center bottom'}
                        />
                    </div>
                    <div className="flex flex-col bg-white place-content-center p-5 rounded-b-md sm:rounded-none sm:rounded-r-md relative sm:max-w-[500px] ">
                        <b>
                            <h2 className='text-2xl whitespace-nowrap text-center'>
                                Marco A. Mongalo III
                            </h2>
                        </b>
                        <br/>
                        <p className='text-left'>
                            <Concept>
                                <Expression lang='es'>
                                    Ingeniero de Conocimiento y Software, co-fundador de Sintaxis, y fundador de Perignosia.
                                    <br/>
                                    <br/>
                                    Experiencia con desarrollo de sistemas de conocimiento,
                                    aplicaciones y páginas para la Web.
                                    Sus áreas de interés incluyen Lógica Fuzzy, Proceso de 
                                    Lenguage Natural, lenguajes de Representación de Conocimiento, 
                                    y Ontología.
                                </Expression>
                                <Expression lang='en'>
                                    Knowledge and Software Engineer, co-founder of Sintaxis, and founder of Perignosia.
                                    <br/>
                                    <br/>
                                    Experience in development of knowledge systems, Web apps/sites.
                                    His areas of interest include Fuzzy Logic, Natural Language Processing, 
                                    Knowledge Representation languages, and Ontology.
                                </Expression>
                            </Concept>
                            
                            <br/>
                            <br/>
                        </p>                        
                        <blockquote className=' text-center font-serif'>
                            <i>{'"'}
                                <Concept>
                                    <Expression lang='es'>
                                        Anteriormente fui odontólogo. Ahora construyo
                                        instrumentos para mejorar la calidad de comunicación humana.
                                    </Expression>    
                                    <Expression lang='en'>
                                        I used to be a dentist. Now I build tools to improve the quality of human communication.
                                    </Expression>    
                                </Concept>
                            {'"'}</i>
                        </blockquote>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    )
}