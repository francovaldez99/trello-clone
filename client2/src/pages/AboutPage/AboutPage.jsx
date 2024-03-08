import React from 'react';
import profile from "../../assets/profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto py-8 relative" >

      <div className='flex justify-around'>
        
        <h2 className="text-5xl font-extrabold mb-4">About</h2>
        <p className="text-lg mb-4 text-balance  px-5">
          TaskSync is a productivity tool designed to streamline your task management process, providing a user-friendly platform to organize your tasks efficiently. Whether you're working solo or collaborating with a team, TaskSync offers the flexibility and functionality you need to stay organized and focused on your goals.
        </p>
      </div>
        
      <h2 className="text-4xl  mb-4 font-extrabold text-blue-700 ">Developer</h2>
       
      <div className='flex items-center justify-center md:flex-nowrap flex-wrap'>
        <img src={profile} alt="profile picture" className='w-56  mb-8 rounded-[8px] object-contain' />
        <div className='flex items-center flex-col'>
          <p className="text-lg mb-4 px-5">
          ¡Hola! Soy Franco Valdez,
           un apasionado de la programación con experiencia en la administración de tiendas online. He finalizado un Bootcamp en desarrollo web y sigo en pasos de convertirme en un gran desarrollador. Con experiencia en gestión de proyectos y atención al cliente, estoy ansioso por aplicar mis habilidades de resolución de problemas en un nuevo desafío. Me encanta trabajar en equipo y estoy comprometido a seguir mejorando en el desarrollo web.
          
          </p>

          <h3 className='font-italic text-3xl  '>Hire me !</h3>
          <div className='flex justify-around flex-col md:flex-row  min-w-[450px]'>
            <a href="https://www.linkedin.com/in/franco-martin-valdez" target="_blank" rel="noopener noreferrer"  className="text-3xl text-blue-500 hover:text-blue-700 flex items-end p-2">
                   
                   <span className=''>my linkedin</span>
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a  className="text-3xl text-cyan-500 hover:text-cyan-700 flex items-end select-none cursor-pointer p-2 "
            target="_blank" rel="noopener noreferrer "
            href='https://francovaldez.netlify.app/' >
              <span>my work</span>
            <span><MdOutlineWork/></span>
            </a>
          </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default About;
