import EdmundoPhoto from '../public/images/instructores-3.jpg';
import MarcoPhoto from '../public/images/instructores-2.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const InstructoresPage = () => {

    const [screenSize, setScreenSize] = useState<number|undefined>();


    useEffect(() => {
        setScreenSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth);
        });
    }, []);
  

    return (
        <div className='text-center'>
            <br/>
            <br/>
            <h1 className='text-3xl text-white font-semibold'>Conoce a tus instructores</h1>
            <br/>
            <div className="grid relative justify-center text-black p-5 h-3/4 gap-10" style={{gridTemplateColumns: '100%'}}>
                <div className='grid grid-flow-row justify-center sm:flex sm:flex-row relative'>
                    <div className='relative bg-black grid justify-center sm:w-[30%]  md:min-h-[320px] sm:h-full '>
                        <Image
                        alt='Foto de Edmundo'
                        priority
                        src={EdmundoPhoto}
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
                            Estudiante de Economía Aplicada y co-fundador de Sintaxis.
                            <br/>
                            <br/>
                            Experiencia en el manejo, análisis y visualización de
                            datos con Python, Excel y STATA. Sus áreas de interés 
                            profesional incluyen Macroeconomía, Política Monetaria
                            y Análisis Estadístico.
                            <br/>
                            <br/>
                        </p>
                        <blockquote className=' text-center font-serif'>
                            <i>{'"'}En mis ratos libres me gusta pasar con las personas que quiero
                            y ver películas.{'"'}</i>
                        </blockquote>
                    </div>

                </div>
                <div className='grid grid-flow-row justify-center sm:flex sm:flex-row relative'>
                    <div className='relative bg-black grid justify-center sm:w-[30%]  md:min-h-[320px] sm:h-full '>
                        <Image
                        alt='Foto de Marco'
                        src={MarcoPhoto}
                        priority
                        width={'188'}
                        height={'228'}
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
                            Ingeniero de Conocimiento y Software, co-fundador de Sintaxis, y fundador de Perignosia.
                            <br/>
                            <br/>
                            Experiencia con desarrollo de sistemas de conocimiento,
                            aplicaciones y páginas para la Web.
                            Sus áreas de interés incluyen Lógica Fuzzy, Proceso de 
                            Lenguage Natural, lenguajes de Representación de Conocimiento, 
                            y Ontología.
                            <br/>
                            <br/>
                        </p>                        
                        <blockquote className=' text-center font-serif'>
                            <i>{'"'}En una vida anterior fui un odontólogo. Ahora construyo
                                instrumentos para mejorar la calidad de comunicación humana.{'"'}</i>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructoresPage;