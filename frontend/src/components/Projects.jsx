import { Link } from 'react-router-dom';
import { PROJECTS_DATABASE } from '../data/projectsData';

const Projects = () => {
  const projectEntries = Object.entries(PROJECTS_DATABASE);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-50">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Portfolio</h2>
        <h3 className="text-4xl font-bold text-gray-900">Featured Projects</h3>
        <p className="text-gray-500 mt-3 max-w-2xl">
          Click a project to view screenshots, features, and live links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectEntries.map(([key, project]) => {
          const routeSlug = project.slug || key;
          const previewImage = project.screenshots?.[0];

          return (
            <Link
              key={key}
              to={`/project/${routeSlug}`}
              className="group block bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No preview image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h4>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{project.tagline}</p>
                <p className="text-indigo-600 text-sm font-semibold mt-4">View project details →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
