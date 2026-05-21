import { useParams, Link } from 'react-router-dom';

// ==========================================
// MOCK DATA WITH DASHBOARD PLACEHOLDERS
// ==========================================
const MOCK_PROJECTS = [
  {
    id: "project-one",
    name: "FreelanceHub",
    tagline: "Full-Stack Freelancing & Task Management Engine",
    description: "FreelanceHub is a full-stack freelancing platform where clients can post projects, hire freelancers, and manage tasks. Freelancers can create profiles, showcase their skills, bid on projects, and get paid securely.",
    features: [
      "User authentication (Client & Freelancer)",
      "Post and browse projects",
      "Bid on projects & hire freelancers",
      "Real-time chat",
      "Secure payments integration",
      "Review and rating system",
      "Responsive design"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    liveDemo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: "project-two",
    name: "Project Two",
    tagline: "Agile Project Management Dashboard",
    description: "An interactive, multi-tenant productivity platform tailored for distributed software engineering teams. Built with performance and minimal latency in mind, the platform manages asynchronous updates flawlessly across all signed-in workspaces.",
    features: [
      "Drag-and-Drop kanban boards with optimized hooks",
      "Dynamic data persistence powered by structural layouts",
      "Granular team role permissions (Admin, Member, Guest)",
      "Advanced text and filter engine matching tags or dates",
      "Automated automated cron-jobs managing daily milestone reports"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    liveDemo: "https://example.com",
    github: "https://github.com"
  }
];

// Curated dark-themed dashboard placeholder images to feed the UI
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80", // Dashboard charts
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", // Analytics landing
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", // UI Components
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"  // User Dashboard view
];

const ProjectDetail = () => {
  // If your route is path="/project/:id", use "id" here. 
  // If your route is path="/project/:projectName", change "id" to "projectName" below.
  const { id } = useParams();
  
  // Find project, fallback to first mock project if ID doesn't match for previewing purposes
  const project = MOCK_PROJECTS.find((p) => p.id === id) || MOCK_PROJECTS[0];

  return (
    <main className="min-h-screen bg-[#0d0e12] text-gray-100 pt-28 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Navbar Layer */}
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

        {/* Split UI Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE COLUMN: Texts and Features */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Project Overview Section */}
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

            {/* Key Features Section */}
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

            {/* Tech Stack Badges Section */}
            <section className="pt-6 border-t border-gray-800/60">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium bg-gray-900/80 text-purple-300 px-3 py-1.5 rounded-lg border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE COLUMN: 4 Image Grid Display */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-purple-400 text-xl font-bold">📸</span>
              <h2 className="text-xl font-bold text-white tracking-tight">Project Screenshots</h2>
            </div>

            {/* Structured 4 image display framework */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PLACEHOLDER_IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className="bg-[#13151a] rounded-xl overflow-hidden border border-gray-800/80 shadow-md group hover:border-purple-500/30 transition-all duration-300 aspect-[16/10]"
                >
                  <img 
                    src={src} 
                    alt={`${project.name} preview snapshot ${index + 1}`} 
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default ProjectDetail;