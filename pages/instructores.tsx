import dynamic from 'next/dynamic';
const Instructors = dynamic(() => import("../components/pages/Instructors"));


const Instructores = () => {
    return <Instructors/>
}

export default Instructores;