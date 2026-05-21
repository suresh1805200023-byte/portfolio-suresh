import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import CertificateDetail from './components/CertificateDetail';
import Experience from './components/Experience';
import { getProjectByRouteParam } from './data/projectsData';

// =============================================================
// MODERN PROJECT DETAILS COMPONENT (With Picture Lightbox)
// =============================================================
const ProjectDetails = () => {
  const { projectName } = useParams();
  
  const [activeImageIndex, setActiveImageIndex] = useState(-1);
  
  const match = getProjectByRouteParam(projectName);
  const project = match?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0e12] flex flex-col items-center justify-center p-10 pt-32 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Project Data Not Found</h2>
        <Link to="/" className="text-indigo-400 font-medium hover:underline">← Back to Portfolio Home</Link>
      </div>
    );
  }

  const closeViewer = () => setActiveImageIndex(-1);
  
  const showNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-[#0d0e12] text-gray-100 pt-28 pb-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-gray-800/60">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-purple-400 transition-colors"
          >
            ← Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-sm font-medium rounded-xl transition-all flex items-center gap-2"
            >
              <span>GitHub</span> 📦
            </a>
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-sm font-medium rounded-xl transition-all shadow-lg shadow-purple-900/20 flex items-center gap-1"
            >
              <span>Live Demo</span> ↗
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-10">
            <section>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-purple-400 text-xl font-bold">⚡</span>
                <h2 className="text-xl font-bold text-white tracking-tight">Project Overview</h2>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-3 capitalize">
                {project.name}
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-purple-400 text-xl font-bold">⭐</span>
                <h2 className="text-xl font-bold text-white tracking-tight">Key Features</h2>
              </div>
              <ul className="space-y-3.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-3.5 group">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 bg-purple-900/30 text-purple-400 rounded-full flex items-center justify-center font-bold text-xs border border-purple-500/20">
                      ✓
                    </span>
                    <span className="leading-relaxed group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-6 border-t border-gray-800/60">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-medium bg-gray-900/80 text-purple-300 px-3 py-1.5 rounded-lg border border-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-purple-400 text-xl font-bold">📸</span>
              <h2 className="text-xl font-bold text-white tracking-tight">Project Screenshots</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveImageIndex(index)}
                  className="bg-[#13151a] rounded-xl overflow-hidden border border-gray-800/80 shadow-md group hover:border-purple-500/50 transition-all duration-300 aspect-[16/10] cursor-zoom-in"
                >
                  <img 
                    src={src} 
                    alt={`${project.name} preview snapshot ${index + 1}`} 
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {activeImageIndex !== -1 && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 select-none"
          onClick={closeViewer}
        >
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-white/70 text-sm z-10">
            <span>Image {activeImageIndex + 1} of {project.screenshots.length}</span>
            <button 
              onClick={closeViewer}
              className="w-10 h-10 flex items-center justify-center bg-gray-900/80 hover:bg-purple-600 border border-gray-800 text-white rounded-full transition-colors text-lg"
            >
              ✕
            </button>
          </div>

          <div className="w-full max-w-5xl flex items-center justify-between relative px-2 md:px-12">
            <button 
              onClick={showPrevImage}
              className="absolute left-2 md:left-4 z-20 w-12 h-12 flex items-center justify-center bg-gray-900/80 hover:bg-purple-600 border border-gray-800 text-white rounded-full font-bold transition-all text-xl"
            >
              ‹
            </button>

            <div className="w-full flex items-center justify-center overflow-hidden max-h-[75vh] p-2 bg-[#13151a]/30 border border-gray-800/40 rounded-2xl">
              <img 
                src={project.screenshots[activeImageIndex]} 
                alt="Selected asset review view" 
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
            </div>

            <button 
              onClick={showNextImage}
              className="absolute right-2 md:right-4 z-20 w-12 h-12 flex items-center justify-center bg-gray-900/80 hover:bg-purple-600 border border-gray-800 text-white rounded-full font-bold transition-all text-xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

// =============================================================
// MAIN ROUTING FRAMEWORK
// =============================================================
function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen selection:bg-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Education /> 
              <Projects />
              <Certificates />
              <Contact />
            </main>
          } />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
          <Route path="/certificate/:certName" element={<CertificateDetail />} />
        </Routes>
        <footer className="py-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} — Built with React & Tailwind
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;