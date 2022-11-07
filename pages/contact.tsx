import dynamic from 'next/dynamic';
const Contact = dynamic(() => import("../components/pages/Contact"))


const ContactPage = () => {
    return (
        <Contact/>
    )
}


export default ContactPage;