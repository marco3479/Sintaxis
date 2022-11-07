import dynamic from 'next/dynamic';
const Contact = dynamic(() => import("../components/pages/Contact"));

const ContactoPage = () => {
    return (
        <Contact/>
    )
}


export default ContactoPage;