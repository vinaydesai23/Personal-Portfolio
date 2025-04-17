import React from "react";
import { SiSap,SiIeee } from "react-icons/si";

const experiences = [
  {
    company: "SAP India Pvt.Ld",
    role: "Associate Developer",
    duration: "July 2022 – Present",
    icon: SiSap,
    description: [
      "Worked with SAP CAP model and UI5 for enterprise applications.",
      "Built and maintained full-stack web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver scalable solutions for multiple Fortune 500 Companies.",
    ],
  },
  {
    company: "SAP Labs India Pvt.Ltd",
    role: "Associate Developer Intern",
    duration: "Jan 2022 – Jun 2022",
    icon: SiSap,
    description: [
      "Worked on the developemnt of SAP Business By Design-ByD.",
      "SAP ByD is an SME based ERP Product",
    ],
  },
  {
    company: "IEEE UVCE Yantrik",
    role: "Secretary",
    duration: "Jan 2021 – Dec 2021",
    icon: SiIeee,
    description: [
      "Orgnaized multiple technical events for nation level fests for IEEE.",
      "Collaborated with mutiple other technical clubs intra college.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="h-screen w-full bg-black flex flex-col justify-center items-center px-4"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-1 max-w-6xl w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {exp.icon && <exp.icon className="w-10 h-10 text-blue-800" />}
            <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
