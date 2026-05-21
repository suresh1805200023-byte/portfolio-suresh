const Education = () => {
  const educationData = [
    {
      degree: "Post Graduation (PG)",
      college: "KLN College of Engineering",
      duration: "2023 - 2025",
      result: "78% CGPA",
      specialization: "Master Of Computer Applications"
    },
    {
      degree: "Under Graduation (UG)",
      college: "Madura College",
      duration: "2017 - 2020",
      result: "61% CGPA",
      specialization: "B.Sc. Computer Science"
    }
  ];

  return (
    <section id="Education" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-100">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</h2>
        <h3 className="text-4xl font-bold text-gray-900">Academic Background</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-4 py-2 rounded-full">
                {edu.duration}
              </span>
              <span className="text-sm font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg border border-green-100">
                {edu.result}
              </span>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
            <p className="text-lg font-semibold text-gray-700 leading-tight mb-1">{edu.college}</p>
            <p className="text-gray-500 text-sm italic">{edu.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;