import React from "react";
import { SiSap, SiIeee } from "react-icons/si";

const experiences = [
  {
    company: "SAP India Pvt.Ld",
    role: "Associate Developer",
    duration: "July 2022 – Present",
    icon: SiSap,
    description: [
      "Worked on React.js to develop modern, responsive user interfaces and dynamic internal dashboards, enhancing user experience and usability across devices.",
      "Developed and maintained full-stack applications using SAP CAP Model with a Node.js backend and UI5 frontend, ensuring scalable and efficient enterprise solutions.",
      "Actively contributed to internal tools that improved operational workflows and overall project efficiency.",
      "Built and enhanced enterprise modules like HR and Finance for Fortune 500 clients, integrated with SAP platforms like SuccessFactors.",
      "Ensured clean architecture, secure API integration, and adherence to best practices in enterprise-grade development.",
    ],
  },
  {
    company: "SAP Labs India Pvt.Ltd",
    role: "Associate Developer Intern",
    duration: "Jan 2022 – Jun 2022",
    icon: SiSap,
    description: [
      "Developed custom cloud solutions for SAP Business ByDesign (ByD), an ERP platform for small and medium enterprises, using ABAP and SAP UI5 for backend logic and intuitive UI design.",
    ],
  },
  {
    company: "IEEE UVCE Yantrik",
    role: "Secretary",
    duration: "Jan 2021 – Dec 2021",
    icon: SiIeee,
    description: [
      "Organized multiple technical events for national-level fests for IEEE.",
      "Collaborated with multiple other technical clubs within the college.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>

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
