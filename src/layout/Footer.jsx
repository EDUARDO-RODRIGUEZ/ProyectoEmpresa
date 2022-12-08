import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto bg-base-100 p-5 rounded-t-sm border">
                <div className='flex justify-between'>
                    <div className='p-5 w-2/3'>
                        <h3 className='fredoka text-xl'>
                            <span className={"text-red-500"}>SOFT</span>
                            <span>BO</span>
                        </h3>
                        <div className='text-justify w-3/4'>
                            SOFBO es una empresa especializada en servicios de desarrollo de software a medida que brinda soluciones utilizando tecnologías de última generación.
                        </div>
                    </div>

                    <div className='p-5 w-1/3'>
                        <h3 className='fredoka text-xl'>
                            <span className={"text-red-500"}>SER</span>
                            <span>VICES</span>
                        </h3>
                        <div className='text-justify'>
                            <ul>
                                <li className='my-1'>Web Design</li>
                                <li className='my-1'>App Developemnt</li>
                                <li className='my-1'>Cloud Services</li>
                                <li className='my-1'>Domain adn Hosting</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer