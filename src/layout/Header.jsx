import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header className='fixed w-full h-8 z-10'>
                <div className="container mx-auto navbar bg-base-100 border-b border-b-stone-600">
                    <div className="flex-1">
                        <Link to={"/"} className="btn btn-ghost normal-case text-2xl fredoka">
                            <span className={"text-red-500"}>SOFT</span>
                            <span>BO</span>
                        </Link>
                    </div>
                    <div className="hidden md:block flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to={"/"} className='rounded-md' >Home</Link></li>
                            <li><Link to={"/servicio"} className='rounded-md'>Servicios</Link></li>
                            <li><Link to={"/proyecto"} className='rounded-md'>Nuestros Productos</Link></li>
                            <li><Link to={"/contacto"} className='rounded-md'>Contactos</Link></li>
                            <li><Link to={"/about"} className='rounded-md'>Acerca de nosotros</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='container mx-auto'>
                    <div className="block md:hidden flex-none ">
                        <ul className="flex flex-wrap justify-around items-center p-0 ">
                            <li className='text-start text-ellipsis p-1 rounded shadow-xl '><Link to={"/"} className='rounded-md'>Home</Link></li>
                            <li className='text-start text-ellipsis p-1 rounded shadow-xl '><Link to={"/servicio"} className='rounded-md'>Servicios</Link></li>
                            <li className='text-start text-ellipsis p-1 rounded shadow-xl '><Link to={"/proyecto"} className='rounded-md'>Productos</Link></li>
                            <li className='text-start text-ellipsis p-1 rounded shadow-xl '><Link to={"/contacto"} className='rounded-md'>Contactos</Link></li>
                            <li className='text-start text-ellipsis p-1 rounded shadow-xl '><Link to={"/about"} className=' rounded-md text-ellipsis'>Acerca de Nosotros</Link></li>
                        </ul>
                    </div>
                </div>

            </header>

            <div className='h-24 sm:h-16'></div>
        </>
    )
}

export default Header