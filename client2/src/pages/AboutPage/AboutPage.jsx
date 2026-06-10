
import profile from "../../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto py-8 relative" >

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-extrabold mb-6">About</h2>
        <p className="text-lg leading-relaxed text-balance px-5">
          TaskSync is a productivity tool designed to streamline your task management process, providing a user-friendly platform to organize your tasks efficiently. Whether you're working solo or collaborating with a team, TaskSync offers the flexibility and functionality you need to stay organized and focused on your goals.
        </p>
      </div>

      <h2 className="text-4xl font-extrabold text-blue-700 mt-16 mb-8 text-center">Developer</h2>

      <div className="mx-auto max-w-5xl flex items-center justify-center gap-8 md:flex-nowrap flex-wrap px-4">
        <img src={profile} alt="profile picture" className="w-56 rounded-[8px] object-contain shrink-0" />
        <div className="flex items-center flex-col">
          <h3 className="italic text-3xl mb-4">Hire me!</h3>
          <div className="flex justify-center gap-6 flex-col md:flex-row">
            <a href="https://www.linkedin.com/in/franco-martin-valdez" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 hover:text-blue-700 flex items-center gap-2 p-2">
              <span>my linkedin</span>
              <FaLinkedin />
            </a>
            <a className="text-3xl text-cyan-500 hover:text-cyan-700 flex items-center gap-2 p-2 select-none cursor-pointer"
            target="_blank" rel="noopener noreferrer"
            href="https://francovaldezdev.netlify.app/">
              <span>my work</span>
              <MdOutlineWork />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
