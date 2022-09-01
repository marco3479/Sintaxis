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
            <meta name='description' content='Una Academia de Programación'/>
            <meta property='og:title' content='Sintaxis'/>
            <meta property='og:url' content='https://sintaxis.io/'/>
            <meta property='og:description' content='Una Academia de Programación'/>
            <meta property='og:image' content={'https://sintaxis.io/image/LogoMark.png'}/>
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
                Somos la primera academia de <i>programación</i> en Nicaragua. 
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
          <div className='flex justify-center relative  text-center flex-col text-black'>
            <h1 className='text-3xl self-center font-semibold'>Lo que ofrecemos</h1>
            <br/>
            <div className='relative self-center flex flex-col sm:flex-row gap-4 text-white md:w-[70%]'>
              <div className='bg-black p-3 rounded-md'>
                Todas nuestras clases son <Highlighted>en vivo</Highlighted> con instructores
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
          <br/>
          <div className='text-center relative text-black'>
            <h2 className='text-3xl font-semibold' >
              <Link href={'instructores'} scroll={true}>
                <a>
                  Conoce a tus instructores 
                </a>
              </Link>
            </h2>
              
            <br/>
            <div className='relative h-[500px] w-full border-4 border-blue border-opacity-0 hover:border-opacity-100 hover:cursor-pointer'>
              <Image
              src={FotoInstructores}
              layout='fill'
              objectFit='cover'
              onClick={() => router.push('/instructores')}
              objectPosition={'top'}
              alt='Foto de instructores'
              />
            </div>
          </div>
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