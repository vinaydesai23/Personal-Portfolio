import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "AI Travel Guide",
      description:
        "Built an AI-powered travel assistant using React.js, Tailwind CSS with Google Authentication and Firebase for user management.Integrated Gemini API to provide personalized travel tips based on user preferences and conditions.Ensured real-time response handling and seamless user experience across platforms.",
      github: "https://github.com/vinaydesai23/AI-Travel-Guide",
    },
    {
      title: "Personal Portfolio",
      description:
        "Developed a responsive personal portfolio using React.js and Tailwind CSS to showcase projects and skills.Implemented smooth navigation, interactive UI elements, and optimized performance for all devices.",
      github: "https://github.com/vinaydesai23/Personal-Portfolio",
    },
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4"
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
