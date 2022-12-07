import React from 'react'
import { Link } from 'react-router-dom';
import empresaicon from '../assets/image/empresaicon.png';
import fundacionicon from '../assets/image/fundacionicon.png';
import lsbicon from '../assets/image/lsbicon.png';

const Proyecto = () => {
    return (
        <div className="container mx-auto bg-base-100 p-5">
            <h2 className='text-center fredoka text-3xl mb-5'>Nustros Proyectos</h2>
            <div className='flex flex-wrap gap-4 justify-center sm:justify-between'>

                <a href="https://hands-sign.netlify.app/" target="_blank">
                    <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                        <figure><img src={lsbicon} className='rounded-md  w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Proyecto LSB</h2>
                            <p>
                                Proyecto de Educacion y Comunicacion del lenguaje de señas bolivia
                            </p>
                        </div>
                    </div>
                </a>

                <a href="https://www.w3schools.com" target="_blank">
                    <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                        <figure><img src={fundacionicon} className='rounded-md w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Proyecto Fundacion-Fintech</h2>
                            <p>
                                Aplicacion que se encarga de gestionar la recuadacion de dinero de las fundaciones en bolivia
                            </p>
                        </div>
                    </div>
                </a>

                <a href="https://www.w3schools.com" target="_blank">
                    <div className="w-full rounded-md  sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                        <figure><img src={empresaicon} className='rounded-md  w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Proyecto DevSoft</h2>
                            <p>Web de empresa de bolivia el cual ofrecen varid de servicios de software </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Proyecto