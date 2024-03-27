import React from 'react'
import { Animated } from 'react-animated-css'
import FormContacto from '../../component/FormContacto'
import Proyecto from '../../component/Proyecto'
import Servicio from '../../component/Servicio'
import iconEmpresa from '../../assets/image/empresa.png';

const PageHome = () => {
    return (
        <main className='pb-30'>
            <div className="container mx-auto navbar bg-base-100">
                <div className='grid grid-cols-1 p-2 sm:p-0 sm:grid-cols-2  gap-2 mt-2'>

                    <Animated animationIn="fadeInLeft" isVisible={true}>
                        <div>
                            <h1 className='fredoka text-4xl md:text-6xl my-4'>Desarrollo de Software</h1>

                            <Animated className='block sm:hidden' animationIn="fadeInDown" isVisible={true}>
                                <img src={iconEmpresa} alt="sds" />
                            </Animated>

                            <div className='text-justify'>
                                <p className='text-xl my-2 font-bold'>Quienes Somos?</p>
                                SOFBO es una empresa especializada en servicios de desarrollo de software a medida que brinda soluciones utilizando tecnologías de última generación.
                            </div>
                        </div>
                    </Animated>

                    <div className='hidden sm:block'>
                        <Animated animationIn="fadeInDown" isVisible={true}>
                                <img width={450} src={iconEmpresa} alt="empresa" className={"ml-auto"} />
                        </Animated>
                    </div>

                </div>
            </div>

            <Servicio />

            <Proyecto />

            <FormContacto />

        </main>
    )
}

export default PageHome