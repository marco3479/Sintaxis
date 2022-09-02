import type { NextPage } from 'next';
import Head from 'next/head';
//import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import HomePagePicture from '../public/images/Apoyo.jpg'
import FotoInstructores from '../public/images/instructores-1.jpg' 
import Minecraft from '../public/images/Minecraft.png' 
import YouthProgramming from '../public/images/YouthProgramming.jpg' 
import DataAnalysis from '../public/images/DataAnalysis.jpg' 


const Home: NextPage = () => {

  const router = useRouter();

  const Highlighted = ({children}:any) => {
    return (
      <b className='bg-blue text-white '>
        &nbsp;{children}&nbsp;
      </b>
    )
  }


  const [screenSize, setScreenSize] = useState<number|undefined>()


  useEffect(() => {
    setScreenSize(window.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    });
  }, [])


  return (
        <div className='overflow-y-auto h-full w-full relative bg-white '>
          <Head>
            <title>Sintaxis</title>
            <meta name='description' content='La primera academia de programación de Nicaragua'/>
            <meta property='og:title' content='Sintaxis'/>
            <meta property='og:url' content='https://sintaxis.io'/>
            <meta property="og:type" content="website" />
            <meta property='og:description' content='La primera academia de programación de Nicaragua'/>
            {/*For Facebook Image*/}
            <meta property='og:image' itemProp="image" content={'https://ibb.co/3yhzz7C'}/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:image:type" content="image/png"/>
            {/*For Whatsapp Image*/}
            <meta property='og:image' itemProp="image" content={'https://ibb.co/Qdj3rbH'}/>
            <meta property="og:image:width" content="256"/>
            <meta property="og:image:height" content="256"/>
            <meta property="og:image:type" content="image/png"/>
          </Head>
          <div className='relative h-full w-full'>
            <div className='h-full w-full'>
              <Image 
              alt='SintaxisMainPic'
              className=' relative' 
              layout='fill'  
              objectFit="cover" 
              objectPosition={screenSize! > 1000 ? '50% 100%' : 'right'}
              src={HomePagePicture}
              />
            </div>
            <div    // First Banner
            className='z-[3] m-8 bottom-0 absolute text-white bg-blue bg-opacity-80 rounded-md p-5 shadow-black shadow-lg'
            >
              <h1
              className='text-3xl sm:text-5xl'
              >
                Aprende a programar
              </h1>
              <br/>
              <p
              className='text-lg sm:w-[30rem]'
              >
                Somos la primera academia de <i>programación</i> de Nicaragua. 
                Te enseñamos todo lo que necesitás para sumergirte 
                en un mundo de posibilidades.
              </p>
              <Button
              className='mt-5'
              onClick={() => {
                router.push('/inscripcion');
              }}
              >
                Inscribirse
              </Button>
            </div>
          </div>
          <br/>
          <br/>
          <div className='flex justify-center relative  text-center flex-col text-black'>
            <h1 className='text-3xl self-center font-bold'>Lo que ofrecemos</h1>
            <br/>
            <div className='relative self-center flex flex-col sm:flex-row gap-4 text-white md:w-[70%]'>
              <div className='bg-black p-3 rounded-md'>
                Todas nuestras clases son <Highlighted>virtuales</Highlighted> con instructores
                especializados. Así, tu progreso estará acompañado
                y monitoreado ante cualquier duda.
              </div>
              <div className='bg-black p-3 rounded-md'>
                Clases pequeñas de hasta 16 estudiantes para una <Highlighted>atención y enseñanza personalizada</Highlighted>.
              </div>
              <div className='bg-black p-3 rounded-md'>
                <Highlighted>Entrega de certificado de aprobación</Highlighted> al terminar el curso. 
              </div>
            </div>
          </div>
          <br/>
          <div 
          className='grid grid-rows-3 grid-flow-row md:grid-rows-none md:grid-cols-3 md:grid-flow-col font-semibold text-center h-[700px] md:h-[400px] w-full ' 
          >
            <div className='bg-slate-50 grid content-between   p-5 h-full w-full  relative'>
              <div className='bg-black w-full h-full bg-opacity-70 absolute z-[2]'></div>
              <Image
              src={Minecraft}
              layout='fill'
              objectFit='contain'
              //onClick={() => router.push('/instructores')}
              objectPosition={'center'}
              alt='Foto de Minecraft'
              />
              <span className='z-[3] text-4xl'>Niños</span>  
              <i className='z-[3] text-2xl'>Próximamente</i>  
            </div>
            <div 
            className='bg-black grid hover:text-blue active:text-blue hover:cursor-pointer  content-between p-5 h-full w-full  relative '
            onClick={() => router.push('/cursos_para_jovenes')}
            >
              <div className='w-full h-full  hover:border-blue  active:border-blue border-4 border-transparent absolute z-[2]'></div>
              <Image
              src={YouthProgramming}
              layout='fill'
              objectFit='cover'
              
              objectPosition={'top'}
              alt='Foto de joven programando'
              />
              <span className='z-[3] text-4xl font-bold text-white'>Jóvenes</span>  
              <span className='z-[3] text-2xl'>Cursos</span>  
            </div>
            <div className=' grid content-between p-5 h-full w-full relative '>
              <div className='bg-black w-full h-full bg-opacity-70 absolute z-[2]'></div>
              <Image
              src={DataAnalysis}
              layout='fill'
              objectFit='cover'
              //onClick={() => router.push('/instructores')}
              objectPosition={'center'}
              alt='Foto de análisis de datos'
              />  
              <span className='z-[3] text-4xl'>Profesionales</span>  
              <i className='z-[3] text-2xl'>Próximamente</i>  
            </div>
          </div>
          <br/>
          <br/>
          <div className='text-center relative text-black'>
            <h2 className='text-3xl font-bold' >
              <Link href={'instructores'} scroll={true}>
                <a>
                  Conoce a tus instructores 
                </a>
              </Link>
            </h2>
              
            <br/>
            <div className='relative h-[500px] w-full hover:cursor-pointer'
            onClick={() => router.push('/instructores')}
            >
              <div className='w-full h-full  hover:border-blue  active:border-blue border-4 border-transparent absolute z-[2]'></div>
              <Image
              src={FotoInstructores}
              layout='fill'
              objectFit='cover'
              objectPosition={'top'}
              alt='Foto de instructores'
              />
            </div>
          </div>
          {/*For Whatsapp Image supposedly*/}
          <link itemProp="thumbnailUrl" href='https://ibb.co/Qdj3rbH'/>
          <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject">
            <link itemProp="url" href='https://ibb.co/Qdj3rbH'/>
          </span>
        </div>
  )
}

export default Home

/*


*/

/*style={{
  zIndex: 2,
  //backgroundColor: 'white', 
  color: 'black', 
  width: '100%', 
  height: '10%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
}}*/