import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "React Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS showcasing skills, experience, and projects.",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Task Manager App",
      description:
        "A full-stack task management app built with Node.js, Express, MongoDB, and React.",
      github: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <section
      id="Projects"
      className="h-screen w-full bg-black flex flex-col justify-center items-center px-4"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-1 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>

            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
