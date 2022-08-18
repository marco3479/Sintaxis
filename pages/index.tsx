import type { NextPage } from 'next';
//import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import HomePagePicture from '../public/images/63490-Granada-Cathedral.webp'

const Home: NextPage = () => {

  const router = useRouter();


  return (
        <>
        <Image 
        alt='SintaxisMainPic'
        className='relative scale-x-[-1]'
        //width='100%'
        //height='100%'
        layout='fill'
        
        objectFit="cover" 
        objectPosition='50% 0%'
        src={HomePagePicture}
        />
        <div
        className='z-[2] m-24 absolute bg-blue rounded-md bottom-16 p-5 shadow-black shadow-lg'
        >
          <h1
          className='text-5xl'
          >
            Aprende a programar
          </h1>
          <br/>
          <p
          className='text-lg'
          >
            Conoce los cursos que tenemos para ti.
            <br/>
            Prepárate para tu próximo reto.
          </p>
          <Button
          onClick={() => {
            router.push('/inscripcion');
          }}
          >
            Inscribirse
          </Button>
        </div>
        </>
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