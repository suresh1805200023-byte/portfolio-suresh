const Experience = () => {
  const experienceData = [
    {
      role: "Software Development Intern",
      company: "ISQUARE Business Pvt. Ltd.",
      location: "Madurai",
      duration: "January 2025 – June 2025",
      points: [
        "Assisted in developing and enhancing web application features under senior developer supervision.",
        "Built and modified frontend components using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
        "Worked with backend APIs and gained exposure to real-world application architecture.",
        "Collaborated with team members using Git and GitHub for version control.",
        "Understood Agile development workflow and real-time project delivery processes."
      ],
      skills: ["React.js", "Tailwind CSS", "JavaScript", "Git","MERN"]
    }
  ];

  return (
    <section id="Experience" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-100">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Experience</h2>
        <h3 className="text-4xl font-bold text-gray-900">Professional Journey</h3>
      </div>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{exp.role}</h4>
                <p className="text-lg font-semibold text-indigo-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">📍 {exp.location}</p>
              </div>
              <span className="text-sm font-bold text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-full self-start shadow-sm">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {exp.points.map((point, pIndex) => (
                <li key={pIndex} className="text-gray-600 flex gap-3 text-sm md:text-base">
                  <span className="text-indigo-500 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, sIndex) => (
                <span key={sIndex} className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50/50 border border-indigo-100 px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;