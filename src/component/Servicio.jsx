import React from 'react'
import movil from '../assets/image/iconmovil.png';
import server from '../assets/image/iconserver.png';
import sw from '../assets/image/iconsw.png';
import ux from '../assets/image/iconux.png';
import testing from '../assets/image/testing.png';


const Servicio = () => {
    return (
        <div className="container mx-auto bg-base-100 p-5">
            <h2 className='text-center fredoka text-3xl mb-4'>¿Qué hacemos?</h2>
            <div className='flex justify-center sm:justify-between flex-wrap gap-4'>

                <div className='w-full sm:w-80 h-64  rounded-md shadow-xl'>
                    <div className='flex  justify-center'>
                        <img style={{ height: 150 }} className='h-100' src={sw} alt="imagen" />
                    </div>
                    <div className='p-2'>
                        <p className='text-center font-bold'>Desarrollo de Software</p>
                        <p className='text-center'>
                            <small>
                                Realizamos desarrollo de Software personalizado
                            </small>
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-80 h-64  rounded-md shadow-xl'>
                    <div className='flex  justify-center'>
                        <img style={{ height: 150 }} className='h-100' src={movil} alt="imagen" />
                    </div>
                    <div className='p-2'>
                        <p className='text-center font-bold'>Desarrollo de Apps</p>
                        <p className='text-center'>
                            <small>
                                Desarrollo de aplicaciones Android e iOS conectadas al administrador
                            </small>
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-80 h-64  rounded-md shadow-xl'>
                    <div className='flex  justify-center'>
                        <img style={{ height: 150 }} className='h-100' src={ux} alt="imagen" />
                    </div>
                    <div className='p-2'>
                        <p className='text-center font-bold'>Diseño UX/UI</p>
                        <p className='text-center'>
                            <small>
                                Optimización de la experiencia de usuario e interfaz de usuario
                            </small>
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-80 h-64  rounded-md shadow-xl'>
                    <div className='flex  justify-center'>
                        <img style={{ height: 150 }} className='h-100' src={testing} alt="imagen" />
                    </div>
                    <div className='p-2'>
                        <p className='text-center font-bold'>Testeo y Control de Calidad</p>
                        <p className='text-center'>
                            <small>
                                Garantía de funcionamiento del software y depuración de errores
                            </small>
                        </p>
                    </div>
                </div>

                <div className='w-full sm:w-80 h-64  rounded-md shadow-xl'>
                    <div className='flex  justify-center'>
                        <img style={{ height: 150 }} className='h-100' src={server} alt="imagen" />
                    </div>
                    <div className='p-2'>
                        <p className='text-center font-bold'>Servidores Cloud</p>
                        <p className='text-center'>
                            <small>
                                Lanzamiento en servidores Cloud de alta disponibilidad
                            </small>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Servicio