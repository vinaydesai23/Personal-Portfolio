import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSap,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiJenkins,
  SiCplusplus,
  SiPython
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-yellow-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "React.js", icon: <SiReact className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "SAP UI5", icon: <SiSap className="text-blue-800" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "Github", icon: <SiGithub className="text-red-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-red-500" /> },
  { name: "SQLite", icon: <SiSqlite className="text-red-500" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="text-base font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
