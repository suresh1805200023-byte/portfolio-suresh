const Skills = () => {
  // A simple list of skills to display
  const skillList = [
    { name: "React", color: "bg-blue-50 text-blue-600 border-blue-100" },
    { name: "MERN Stack", color: "bg-green-50 text-green-600 border-green-100" },
    { name: "MongoDB", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { name: "Node.js", color: "bg-slate-50 text-slate-600 border-slate-100" },
    { name: "Tailwind CSS", color: "bg-sky-50 text-sky-600 border-sky-100" },
    { name: "Express", color: "bg-purple-50 text-purple-600 border-purple-100" },
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Technical Skills</h3>
      
      {/* This creates the bubble/tag row like your drawing */}
      <div className="flex flex-wrap gap-4">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className={`px-6 py-3 rounded-full border shadow-sm font-medium text-sm md:text-base hover:scale-105 transition-transform cursor-default ${skill.color}`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;