import Link from "next/link";
import { useRouter } from "next/router";

const ContactoPage = () => {


    const router = useRouter();

    return (
        <div className='grid grid-flow-row-dense justify-center h-full '>
            <div>
                <br/>
                <br/>
                <h2 className="text-2xl font-semibold self-center w-[18rem] text-center">Contactanos por cualquiera de estas vías</h2>
                <br/>
                <br/>
                <div className="bg-white text-center text-black p-3 rounded-md">
                    <div>
                        <i className="material-icons translate-y-2">mail</i> &nbsp; <span className="font-semibold">sintaxisacademy@gmail.com</span>
                    </div>
                    <br/>
                    <div>
                        <i className='material-icons translate-y-2'>phone</i> &nbsp; <span className="font-semibold">8888-8888</span>
                    </div>
                    <br/>
                    <div>
                        <i className="text-4xl fa fa-whatsapp"></i> 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="hover:cursor-pointer" href='https://www.facebook.com/sintaxisacademy/'>
                            <a>
                            <i className="text-4xl fa fa-facebook"></i>
                            </a>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="text-4xl fa fa-linkedin"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactoPage;