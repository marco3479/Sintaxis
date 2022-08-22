import type { NextPage } from 'next';
//import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import HomePagePicture from '../public/images/Apoyo.jpg'

const Home: NextPage = () => {

  const router = useRouter();

  const Highlighted = ({children}:any) => {
    return (
      <b className='bg-blue text-white'>
        {children}
      </b>
    )
  }


  const [screenSize, setScreenSize] = useState<number|undefined>()


  useEffect(() => {
      window.addEventListener('resize', () => {
          setScreenSize(window.innerWidth)
      })
  }, [])


  return (
        <div className='overflow-y-auto bg-white p-3'>
          <Image 
          alt='SintaxisMainPic'
          className=' relative' // to flip scale-x-[-1]
          //width='100%'
          //height='100%'
          layout='fill'
          
          objectFit="cover" 
          objectPosition={screenSize! > 1000 ? '50% 100%' : 'right'}
          src={HomePagePicture}
          />
          <div    // First Banner
          className='z-[2] m-8 absolute bg-blue bg-opacity-80 rounded-md bottom-0 p-5 shadow-black shadow-lg'
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
              Somos la primera academia de <i>coding</i> en Nicaragua. 
              Te enseñamos todo lo que necesitás para sumergirte 
              en un mundo de posibilidades.
            </p>
            <Button
            onClick={() => {
              router.push('/inscripcion');
            }}
            >
              Inscribirse
            </Button>
          </div>
          <div className='relative h-[95vh] w-1'>
          </div>

          <div className='flex justify-center text-center flex-col text-black'>
            <h1 className='text-3xl self-center'>Lo que ofrecemos</h1>
            <br/>
            <div className='relative self-center flex flex-row gap-4 text-white md:w-[70%]'>
              <div className='bg-black p-3 rounded-md'>
                Todas nuestras clases son <Highlighted>en vivo</Highlighted> con instructores
                especializados. Así, tu progreso estará acompañado
                y monitoreado ante cualquier duda.
              </div>
              <div className='bg-black p-3 rounded-md'>
                Clases pequeñas de hasta 16 estudiantes para una <Highlighted>atención y enseñanza personalizados.</Highlighted>
              </div>
              <div className='bg-black p-3 rounded-md'>
                <Highlighted>Reuniones mensuales con padres</Highlighted> y alumnos para discutir el progreso de los estudiantes. 
              </div>
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