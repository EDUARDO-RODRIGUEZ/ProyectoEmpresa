import React from 'react'
import empresaicon from '../assets/image/empresaicon.png';
import perfileduardo from '../assets/image/perfilEduardo.jpg';
import perfiljhovani from '../assets/image/perfilJhovani.jpg';

import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from 'react-icons/ai'


const About = () => {
    return (
        <div className="container mx-auto bg-base-100 p-5">
            <h2 className='text-center fredoka text-3xl mb-5'>Nustro Equipo</h2>
            <div className='flex flex-col sm:flex-row gap-4 justify-around'>
                <a href="https://hands-sign.netlify.app/" target="_blank">
                    <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                        <figure className='p-5'><img src={perfiljhovani} className='rounded-2xl w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Giovanny Jesus Choque Centeno</h2>
                            <p>
                                Desarrollador Frontend con habilidades en HTML,CSS,Javascript y React.js
                            </p>
                        </div>
                        <hr />
                        <div className='card-actions p-5'>
                            <div className='flex flex-row'>
                                <AiOutlineMail size={25} />
                                <span>giovannyjchoquecenteno@gmail.com</span>
                            </div>
                            <div className='flex flex-row'>
                                <AiOutlinePhone size={25} />
                                <span>79019549</span>
                            </div>
                            <div className='flex flex-row'>
                                <AiOutlineGithub size={25} />
                                <span>GiovannyChoqueCenteno</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://www.w3schools.com" target="_blank">
                    <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                        <figure className='p-5'><img src={perfileduardo} className='rounded-2xl w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Jorge Eduardo Cruz Rodirguez</h2>
                            <p>
                                Desarrolador Backend y Movil con habilidades en JS,Node.js y React Native
                            </p>
                        </div>
                        <hr />
                        <div className='card-actions flex-col p-5'>
                            <div className='flex flex-row'>
                                <AiOutlineMail size={25} />
                                <span>jorge.ecrg@gmail.com</span>
                            </div>
                            <div className='flex flex-row'>
                                <AiOutlinePhone size={25} />
                                <span>72602365</span>
                            </div>
                            <div className='flex flex-row'>
                                <AiOutlineGithub size={25} />
                                <span>EduardoRodriguez</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default About