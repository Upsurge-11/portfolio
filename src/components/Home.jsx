import React from "react";
import me from "./../assets/portfolio/me.png";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-200">
            I'm a <span className="text-sky-500">Full Stack</span> Developer
          </h2>
          <p className="text-slate-500 py-4 max-w-md">
            Eager to connect with fellow professionals and explore exciting
            opportunities for collaboration and project work. Let's connect and
            create amazing web experiences together!
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-slate-200 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full py-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
