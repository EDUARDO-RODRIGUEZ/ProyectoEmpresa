import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto bg-base-100 p-5 rounded-t-sm border">
                <div className='flex justify-between'>
                    <div className='p-5 w-2/3'>
                        <h3 className='fredoka text-xl'>
                            <span className={"text-red-500"}>DEV</span>
                            <span>SOFT</span>
                        </h3>
                        <div className='text-justify w-3/4'>
                            Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.
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