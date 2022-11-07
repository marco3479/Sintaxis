import dynamic from 'next/dynamic';
const SignUp = dynamic(() => import("../components/pages/SignUp"));


const Inscripcion = () => {
    return (
        <SignUp/>
    )
}

export default Inscripcion;

