import React from 'react'
import empresaicon from '../assets/image/empresaicon.png';
import fundacionicon from '../assets/image/fundacionicon.png';
import lsbicon from '../assets/image/lsbicon.png';



const About = () => {
  return ( 
    <div className="container mx-auto bg-base-100 p-5">
    <h2 className='text-center fredoka text-3xl mb-5'>Nustro Equipo</h2>
    <div className='flex flex-wrap gap-4 justify-center sm:justify-between'>

        <a href="https://hands-sign.netlify.app/" target="_blank">
            <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                <figure><img src={lsbicon} className='rounded-md  w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Giovanny Jesus Choque Centeno</h2>
                    <p>
                        Desarrollador Frontend con habilidades en HTML,CSS,Javascript y React.js
                    </p>
                </div>
            </div>
        </a>

        <a href="https://www.w3schools.com" target="_blank">
            <div className="w-full rounded-md sm:w-80 bg-base-100 shadow-xl hover:transition-all hover:duration-150 hover:scale-95 cursor-pointer">
                <figure><img src={fundacionicon} className='rounded-md w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Jorge Eduardo Cruz Rodirguez</h2>
                    <p>
                        Desarrolador Backend y Movil con habilidades en JS,Node.js y React Native
                    </p>
                </div>
            </div>
        </a>


    </div>
</div>

  )
}

export default About