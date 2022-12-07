import React from 'react'
import { SendEmail } from '../services/Email';
import { toast } from 'react-toastify';
import useForm from '../hook/useForm';

const FormContacto = () => {

    const { state, clear, onChange } = useForm({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    async function OnSubmitMail(e) {
        e.preventDefault();
        if (await SendEmail(state.name, state.email, state.message, state.subject)) {
            toast.info("Se envio el email correctamente !!!", {
                position: toast.POSITION.TOP_RIGHT
            });
            clear();
            return;
        }
        toast.info("No se pudo enviar el email !!!", {
            position: toast.POSITION.TOP_RIGHT,
        });
        clear();
    }


    return (
        <div className="container mx-auto bg-base-100 p-5 ">
            <h2 className='text-center fredoka text-3xl mb-5'>Contactanos</h2>
            <div>
                <form onSubmit={OnSubmitMail} className='w-full p-5' action="">

                    <div className='grid grid-cols-2 mb-5 gap-2'>
                        <div>
                            <input type="text" placeholder="Name..." className="input input-bordered w-full bg-gray-100"
                                name="name"
                                value={state.name}
                                onChange={onChange}
                                minLength={3}
                                required
                            />
                        </div>
                        <div>
                            <input type="email" placeholder="Email..." className="input input-bordered w-full bg-gray-100"
                                name="email"
                                value={state.email}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={"mb-5"}>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full bg-gray-100"
                            minLength={3}
                            name={"subject"}
                            value={state.subject}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className='mb-5'>
                        <textarea rows={2} className="resize-none textarea textarea-bordered w-full bg-gray-100" placeholder="Escribe tu mensaje..."
                            required
                            name="message"
                            value={state.message}
                            onChange={onChange}
                            minLength={10}
                        ></textarea>
                    </div>

                    <div>
                        <button className="btn btn-primary">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormContacto