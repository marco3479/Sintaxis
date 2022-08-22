
const ContactoPage = () => {
    return (
        <div className='grid grid-flow-row-dense place-items-center h-full '>
            <div>
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
                        <i className="text-4xl fa fa-facebook"></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="text-4xl fa fa-linkedin"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactoPage;