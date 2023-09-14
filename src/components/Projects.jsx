import React from "react";
import tweetBook from "./../assets/portfolio/tweetbook.png";
import jenkinsAutomation from "./../assets/portfolio/jenkins_automation.png";
import spaceInvader from "./../assets/portfolio/space_invader.png";
import blogger from "./../assets/portfolio/blogger.png";
import onlineMeals from "./../assets/portfolio/online_meals.png";
import pongGame from "./../assets/portfolio/pong_game.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: tweetBook,
      title: "TweetBook",
      link: "https://github.com/Upsurge-11/tweetbook",
    },
    {
      id: 2,
      src: blogger,
      title: "Blogger",
      link: "https://github.com/Upsurge-11/Blooger",
    },
    {
      id: 3,
      src: jenkinsAutomation,
      title: "Jenkins TUI",
      link: "https://github.com/Upsurge-11/Jenkins-Automation-Selenium",
    },
    {
      id: 4,
      src: spaceInvader,
      title: "Alien Game",
      link: "https://github.com/Upsurge-11/Space_Invader",
    },
    {
      id: 5,
      src: onlineMeals,
      title: "Restaurant",
      link: "https://github.com/Upsurge-11/Food-Delivery",
    },
    {
      id: 6,
      src: pongGame,
      title: "Pong Game",
      link: "https://github.com/Upsurge-11/Pong_Game",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 w-full text-slate-200 md:h-fit"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects in here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="blogger website"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  {title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
