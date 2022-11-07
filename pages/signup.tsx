import dynamic from 'next/dynamic';
const SignUp = dynamic(() => import("../components/pages/SignUp"));

const SignUpPage = () => {
    return (
        <SignUp/>
    )
}

export default SignUpPage;

