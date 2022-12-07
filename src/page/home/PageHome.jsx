import React from 'react'
import { Animated } from 'react-animated-css'
import FormContacto from '../../component/FormContacto'
import Proyecto from '../../component/proyecto'
import Servicio from '../../component/Servicio'
import iconEmpresa from '../../assets/image/empresa.png';

const PageHome = () => {
    return (
        <main>

            <div className="container mx-auto navbar bg-base-100">
                <div className='grid grid-cols-1 p-2 sm:p-0 sm:grid-cols-2  gap-2'>

                    <Animated animationIn="fadeInLeft" isVisible={true}>
                        <div>
                            <h1 className='fredoka text-4xl md:text-6xl my-4'>Software Development</h1>

                            <Animated className='block sm:hidden' animationIn="fadeInDown" isVisible={true}>
                                <img src={iconEmpresa} alt="sds" />
                            </Animated>

                            <div className='text-justify'>
                                Eiusmod excepteur cillum reprehenderit anim nisi dolor nisi reprehenderit mollit qui ea est sint eiusmod. Commodo dolore sunt in occaecat incididunt ipsum ipsum velit ad. Irure excepteur voluptate magna cillum do ut ullamco. Et consequat voluptate voluptate aliqua ex labore amet ullamco. Nulla est nisi ex laborum Lorem qui. Irure laborum amet esse aliqua pariatur voluptate tempor duis non deserunt. Magna ad ipsum voluptate nulla.
                            </div>
                        </div>
                    </Animated>

                    <div className='hidden sm:block'>
                        <Animated animationIn="fadeInDown" isVisible={true}>
                            <img src={iconEmpresa} alt="sds" />
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