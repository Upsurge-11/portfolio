import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-fit bg-gradient-to-b from-gray-800  to-black text-slate-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hi there! I am{" "}
          <span className="text-sky-500 text-2xl">Arghyadeep</span>, a freelance
          full stack developer with a passion for all things tech. With fluency
          in the MERN stack, JavaScript, Python, git, Linux, Docker. Whether
          it's building a custom web application from scratch or optimizing an
          existing system for performance and scalability, I am committed to
          delivering high-quality results that exceed my clients' expectations.
        </p>
        <br />
        <p className="text-xl mt-5 mb-10">
          I am always eager to learn and stay up-to-date with the latest
          technologies and industry trends, ensuring that I am equipped to
          tackle any challenge that comes my way. If you're looking for a
          skilled and dedicated developer to help bring your project to life,
          don't hesitate to get in touch. Let's work together to create
          something truly amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
